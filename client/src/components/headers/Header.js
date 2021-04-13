import React, {useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged, setIsLogged] = state.userAPI.isLogged
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin

    const logoutUser = async () => {
        await axios.get('./user/logout')
        localStorage.clear()
        setIsAdmin(false)
        setIsLogged(false)
    }

    const adminRouterTour = () =>{
        return(
            <>
                <Link className="nav-link text-dark" to="/create_tour">THÊM TOUR</Link>         
            </> 
        )
    }
    const adminRouterHotel = () =>{
        return(
            <>
                <Link className="nav-link text-dark" to="/create_hotel">KHÁCH SẠN</Link>         
            </> 
        )
    }
    const adminRouterMove = () =>{
        return(
            <>
                <Link className="nav-link text-dark" to="/create_move">DI CHUYỂN</Link>         
            </> 
        )
    }
    const adminRouterPage = () =>{
        return(
            <>
                <Link className="nav-link text-dark" to="/create_page">BÀI VIẾT</Link>         
            </> 
        )
    }
    const adminRouterDiscount = () =>{
        return(
            <>
                <Link className="nav-link text-dark" to="/create_discount">KHUYẾN MÃI</Link>         
            </> 
        )
    }
    const adminRouterContact = () =>{
        return(
            <>
                <Link className="nav-link text-dark" to="/create_contact">LIÊN HỆ</Link>         
            </> 
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <i className="mr-3">Xin chào:<Link to="/user"><i className="fa fa-user-circle-o ml-2" aria-hidden="true"></i></Link></i>
                <Link to="/" onClick={logoutUser}>ĐĂNG XUẤT</Link>
            </> 
        )
    }

    return (
        <header>
            <div className="hd-top">
                <div className="container">
                    <div className="row h-36">
                        <div className="col-sm-6 text-left">
                            <div className="hd-top-r">
                                <div className="hd-contact">
                                    <i className="pr-2">LIÊN HỆ</i>
                                    <a href="https://www.facebook.com/dongphivnn/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> </a> 
                                    <Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-phone" aria-hidden="true"></i></Link>
                                    <i className="pl-2">0582.565.855</i>
                                </div>  
                            </div>
                        </div>
                        <div className="col-sm-6 text-right">
                            <div className="hd-top-r">
                                <div className="btn-login">
                                        {
                                            isLogged ? loggedRouter() : <Link to="/login">ĐĂNG NHẬP</Link>
                                        }
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
                        <Link className="navbar-brand" to="/">{isAdmin ? 'ADMIN' : 'BOtravel'}</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                        {isAdmin ? adminRouterTour() : <Link className="nav-link text-dark" to="/">TOUR DU LỊCH</Link> }
                                </li>  
                                 <li className="nav-item">
                                     {isAdmin ? adminRouterHotel() : <Link className="nav-link text-dark" to="/hotel">KHÁCH SẠN</Link> }
                                    
                                </li>
                                <li className="nav-item">
                                    {isAdmin ? adminRouterMove() : <Link className="nav-link text-dark" to="#">DI CHUYỂN</Link>}
                                </li>
                                <li className="nav-item">
                                    {isAdmin ? adminRouterPage() : <Link className="nav-link text-dark" to="#">BÀI VIẾT</Link>}
                                </li>
                                <li className="nav-item">
                                    {isAdmin ? adminRouterDiscount() : <Link className="nav-link text-dark" to="#">KHUYẾN MÃI</Link>}
                                </li>
                                <li className="nav-item">
                                    {isAdmin ? adminRouterContact() : <Link className="nav-link text-dark" to="#">LIÊN HỆ</Link>}
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

