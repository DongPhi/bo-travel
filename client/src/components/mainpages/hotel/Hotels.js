import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import HotelItem from '../utils/hotelItem/HotelItem'
import HotelSl from './imgs/hotelslide1.jpg'

function Hotels() {
    const state = useContext(GlobalState)
    const [hotels] = state.hotelsAPI.hotels

    console.log(hotels)
    return (
        <div className="hotels">
            <div className="slide-hotel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={HotelSl} alt="First slide" height="540px"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={HotelSl} alt="Second slide" height="540px"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={HotelSl} alt="Third slide" height="540px"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>  
            </div>
            <div className="container">
                <div className="text-center mt-4 mb-1">
                    <h2 className="title-1">
                        <Link to="#">Khách Sạn Giá Tốt</Link>
                    </h2>
                </div>
                <div className="text-center mb-4">
                    <p>Khách sạn chất lượng, view siêu đẹp</p>
                </div>
                <div className="row">
                    {
                        hotels.map(hotel => {
                            return <HotelItem key={hotel._id} hotel={hotel} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Hotels
