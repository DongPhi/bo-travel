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
                            <img src={Slide01} alt="slide-1" width="100%"height="500px"/>
                        </div>
                        <div className="carousel-item ">
                            <img src={Slide01} alt="slide-2" width="100%" height="500px"/>
                        </div>
                        <div className="carousel-item ">
                            <img src={Slide01} alt="slide-3" width="100%" height="500px"/>
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
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
                                        <i className="icon-i-c1"><img src={Iluggage} alt="" /></i>
                                        <p className="text-1">T??m tour</p>
                                        <p className="text-2 text-dltn">???? N???ng</p>
                                    </div>
                                    <div className="o-dl dlnn">
                                        <i className="icon-i-c1"><img src={Icar} alt="" /></i>
                                        <p className="text-1">T??m xe</p>
                                        <p className="text-2 text-dlnn">Di chuy???n</p>
                                    </div>
                                    <div className="o-dl dltc1">
                                        <i className="icon-i-c1"><img src={Imap} alt="" /></i>
                                        <p className="text-1">Du l???ch</p>
                                        <p className="text-2 text-dltc1">T??? do</p>
                                    </div>
                                    <div className="o-dl tttc">
                                        <i className="icon-i-c1"><img src={Icoconut} alt="" /></i>
                                        <p className="text-1">??i???m ?????n</p>
                                        <p className="text-2 text-tttc">H???p d???n</p>
                                    </div>
                                    <div className="o-dl hvtt">
                                        <i className="icon-i-c1"><img src={Iticket} alt="" /></i>
                                        <p className="text-1">T??m ki???m</p>
                                        <p className="text-2 text-hvtt">Khuy???n m??i</p>
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
                        <img src={Ihleft} alt="" />
                        <Link to="#">Tour h??ng ng??y</Link>
                        <img src={Ihright} alt="" />
                    </h2>
                </div>
                <div className="text-center mb-4">
                    <p>Tour h??ng ng??y v???i gi?? t???t</p>
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
