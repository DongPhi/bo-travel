import React, {useState} from 'react'
import RegisterImg from './imgs/registerImg.png'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('user/register',{...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <div className="row content">
                <div className="col-md-6 mb-3" >
                    <img src={RegisterImg} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h3 className="signin-text mb-3 text-center">Đăng ký</h3>
                    <form onSubmit={registerSubmit}>
                    <div className="form-group">
                            <label for="text">Tên</label>
                            <input type="text" name="name" required
                            placeholder="Tên người dùng" className="form-control" value={user.name} onChange={onChangeInput} />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" required
                            placeholder="Email" className="form-control" value={user.email} onChange={onChangeInput} />
                        </div>
                        <div className="form-group">
                            <label for="password">Mật khẩu</label>
                            <input type="password" name="password" required autoComplete="on"
                            placeholder="Mật khẩu" className="form-control" value={user.password} onChange={onChangeInput} />
                        </div>
                        <button className="btn btn-class">Đăng Ký</button>
                        <p className="text-center mt-2">Bạn đã có tài khoản, hãy nhấn vào đây để <Link className="ln-regis" to="/login">Đăng nhập</Link></p>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
