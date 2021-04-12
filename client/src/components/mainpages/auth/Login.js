import React, {useState} from 'react'
import LoginImg from './imgs/loginImg.png'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        email:'', password:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('user/login',{...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="container login-page">
            <div className="row content">
                <div className="col-md-6 mb-3" >
                    <img src={LoginImg} alt="image" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h3 className="signin-text mb-3">Đăng Nhập</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" required
                            placeholder="Email" className="form-control" value={user.email} onChange={onChangeInput} />
                        </div>
                        <div className="form-group">
                            <label for="password">Mật khẩu</label>
                            <input type="password" name="password" required autoComplete="on"
                            placeholder="Email" className="form-control" value={user.password} onChange={onChangeInput} />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
                            <label className="form-check-label" for="checkbox">Lưu tài khoản</label>
                        </div>
                        <button className="btn btn-class">Đăng Nhập</button>
                        <button className="btn btn-class"><Link to="/register">Đăng Ký</Link></button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
