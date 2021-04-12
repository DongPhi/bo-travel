import React from 'react'
import {Link} from 'react-router-dom'

function HotelItem({hotel}) {
    return (
        <div className="col-sm-3">
            <div className="hotel_card">
                <Link to="/">
                    <img src={hotel.images.url} alt="" width="100%"/>
                    <div className="hotel_box">
                        <h5 title={hotel.title}>{hotel.title}</h5>
                        <p>{hotel.description}</p>
                        <span>Giá: {hotel.price} VNĐ</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HotelItem
