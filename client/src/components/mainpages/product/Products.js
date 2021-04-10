import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import ProductItem from '../utils/productItem/ProductItem'
import Slide01 from './imgs/slide-01.jpg'
import Icoconut from './imgs/icon-coconut.png'
import Icar from './imgs/icon-car.png'
import Iluggage from './imgs/icon-luggage.png'
import Imap from './imgs/icon-map.png'
import Iticket from './imgs/icon-ticket.png'
import Ihleft from './imgs/ihleft.png'
import Ihright from './imgs/ihright.png'

function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products

    console.log(products)
    return (
        <div className="products">
            <div className="slide">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    {/* The slideshow */}
                    <div className="carousel-inner">
                        <div className="carousel-item active" >
                            <img src={Slide01} alt="slide-1" width="100%"height="490px"/>
                        </div>
                        <div className="carousel-item ">
                            <img src={Slide01} alt="slide-2" width="100%" height="490px"/>
                        </div>
                        <div className="carousel-item ">
                            <img src={Slide01} alt="slide-3" width="100%" height="490px"/>
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                        <span class="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="search">
                <div className="n3-form-search">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="frame-search">
                                    <div className="o-dl dltn">
                                        <i className="icon-i-c1"><img src={Iluggage}/></i>
                                        <p className="text-1">Tìm tour</p>
                                        <p className="text-2 text-dltn">Đà Nẵng</p>
                                    </div>
                                    <div className="o-dl dlnn">
                                        <i className="icon-i-c1"><img src={Icar}/></i>
                                        <p className="text-1">Tìm xe</p>
                                        <p className="text-2 text-dlnn">Di chuyển</p>
                                    </div>
                                    <div className="o-dl dltc1">
                                        <i className="icon-i-c1"><img src={Imap}/></i>
                                        <p className="text-1">Du lịch</p>
                                        <p className="text-2 text-dltc1">Tự do</p>
                                    </div>
                                    <div className="o-dl tttc">
                                        <i className="icon-i-c1"><img src={Icoconut}/></i>
                                        <p className="text-1">Điểm đến</p>
                                        <p className="text-2 text-tttc">Hấp dẫn</p>
                                    </div>
                                    <div className="o-dl hvtt">
                                        <i className="icon-i-c1"><img src={Iticket}/></i>
                                        <p className="text-1">Tìm kiếm</p>
                                        <p className="text-2 text-hvtt">Khuyến mãi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="text-center mt-4 mb-1">
                    <h2 className="title-1">
                        <img src={Ihleft} />
                        <a href="#">Tour hàng ngày</a>
                        <img src={Ihright}></img>
                    </h2>
                    
                </div>
                <div className="text-center mb-4">
                    <p>Tour hàng ngày với giá tốt</p>
                </div>
                <div className="row">
                    {
                        products.map(product =>{
                            return <ProductItem key={product._id} product={product} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
