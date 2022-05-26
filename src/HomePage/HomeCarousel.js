import React from 'react'
import { Carousel } from 'react-bootstrap'
import "../css/Outline.css"
import carousel1 from "../photo/carousel1.jpg"
import carousel2 from "../photo/carousel2.jpg"
import carousel3 from "../photo/carousel3.jpg"

const HomeCarousel = () => {
    return (
        <div className='container'>

            <div>
                <h5><span>HERA SHOP</span></h5>
            </div>
            <br />

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <br/><br/><br/><br/><br/>

            <div>
                <h5><span>FEATURED ITEMS</span></h5>
            </div>
        </div>
    )
}

export default HomeCarousel