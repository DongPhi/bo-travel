import React, { useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'

function Header() {
    const value = useContext(GlobalState)
    return (
        <header>
            <div className="hd-top">
                <div className="container">
                    <div className="row h-36">
                        <div className="col-sm-6 text-left">
                            <div className="hd-top-r">
                                <div className="hd-contact">
                                    <i className="pr-2">LIÊN HỆ</i>
                                    <a href="https://www.facebook.com/dongphivnn/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                                    <Link to="#"><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                                    <Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                                    <Link to="#"><i class="fa fa-phone" aria-hidden="true"></i></Link>
                                    <i className="pl-2">0582.565.855</i>
                                </div>  
                            </div>
                        </div>
                        <div className="col-sm-6 text-right">
                            <div className="hd-top-r">
                                <div className="btn-login">
                                    <Link to="/login">ĐĂNG NHẬP</Link>
                                </div>
                                <div className="btn-lang">
                                    <Link to="#" className="">VIE</Link>
                                    <i>|</i>
                                    <Link to="#" className="">ENG</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hd-bot">
                <div className="menu-bar container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/"><i>BOtravel</i></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark " to="#">TOUR DU LỊCH</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/hotel">KHÁCH SẠN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="#">DI CHUYỂN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="#">TIN TỨC</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="#">KHUYẾN MÃI</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="#">LIÊN HỆ</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header

