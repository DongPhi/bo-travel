const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userCtrl = {
    register: async (req, res) => {
        try{
            const {name, email, password} = req.body;

            const user = await Users.findOne({email});
            if(user) return res.status(400).json({msg: "Email hiện tại đã tồn tại."});

            if(password.length < 6) 
                return res.status(400).json({msg: "Vui lòng nhập mật khẩu trên 6 ký tự."});

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = new Users({
                name, email, password: passwordHash
            });

            // Save mongodb
            await newUser.save();

            // Then create jsonwebtoken to authentication
            const accesstoken = createAccessToken({id: newUser._id});
            const refreshtoken = createRefreshToken({id: newUser._id});

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
            })

            res.json({accesstoken});

        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },

    login: async (req, res) => {
        try {
            const{email, password} = req.body;

            const user = await Users.findOne({email});
            if(!user) return res.status(400).json({msg:"Email không đúng."});

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) return res.status(400).json({msg:"Mật khẩu không đúng."});

            //If login success, create access token and refresh token
            const accesstoken = createAccessToken({id: user._id});
            const refreshtoken = createRefreshToken({id: user._id});

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.json({accesstoken});

        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },

    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'});
            return res.json({msg:"Đã đăng xuất"});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },

    refreshToken: (req, res) =>{
        try {
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Vui lòng đăng nhập hoặc đăng ký."});

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg: "Vui lòng đăng nhập hoặc đăng ký."});

                const accesstoken = createAccessToken({id: user.id});

                res.json({accesstoken});
            })

        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },

    getUser: async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id).select('-password');
            if(!user) return res.status(400).json({msg: "Tài khoản không tồn tại"});

            res.json(user);
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
}

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'});
}

const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'});
}

module.exports = userCtrl