import React from 'react'
import {Link} from 'react-router-dom'

function ProductItem({product}) {
    return (     
        <div className="col-sm-4">
            <div className="product_card">
                <Link to="/">
                    <img src={product.images.url} alt="" width="100%" height="200px"/>
                    <div className="product_box">
                        <h5 title={product.title}>{product.title}</h5>
                        <p><i class="fa fa-map-marker" aria-hidden="true"></i> {product.description}</p>
                        <span><i class="fa fa-map-marker" aria-hidden="true"> Giá:</i> {product.price} VNĐ</span>
                    </div>
                </Link>
                
                {/* <div className="row_btn">
                    <Link id="btn_buy" to="#!">
                        Đặt tour
                    </Link>
                    <Link id="btn_view" to={'detail/${product}._id'}>
                        Xem tour
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default ProductItem
