import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'

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
                                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a>
                                    <i className="pl-2">0582.565.855</i>
                                </div>  
                            </div>
                        </div>
                        <div className="col-sm-6 text-right">
                            <div className="hd-top-r">
                                <div className="btn-login">
                                    <a href="#">ĐĂNG NHẬP</a>
                                </div>
                                <div className="btn-lang">
                                    <a href="#" className="">VIE</a>
                                    <i>|</i>
                                    <a href="#" className="">ENG</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hd-bot">
                <div className="menu-bar container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><i>BOtravel</i></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-dark " href="#">TOUR DU LỊCH</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">KHÁCH SẠN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">DI CHUYỂN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">TIN TỨC</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">KHUYẾN MÃI</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">LIÊN HỆ</a>
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

