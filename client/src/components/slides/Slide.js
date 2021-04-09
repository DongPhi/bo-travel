import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Slide01 from './imgs/slide-01.jpg'

function Slide(){
    const value = useContext(GlobalState)
    return(
        <slide>
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
        </slide>
    )
}

export default Slide