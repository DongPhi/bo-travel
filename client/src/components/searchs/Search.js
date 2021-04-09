import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Icoconut from './imgs/icon-coconut.png'
import Icar from './imgs/icon-car.png'
import Iluggage from './imgs/icon-luggage.png'
import Imap from './imgs/icon-map.png'
import Iticket from './imgs/icon-ticket.png'
function Search(){
    const value = useContext(GlobalState)
    return(
        <search>
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
        </search>
    )
}
export default Search