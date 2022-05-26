import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>


            <div id="yellow" className="container-fluid">
                <div className="container p-5">
                    <h3>HERA SHOP</h3>
                    <hr />
                    <div className="row" id="bottom-text" >
                        <div className="col-md-2 ">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 ">
                            <ul>
                                <li><Link to="/questions">Questions</Link></li>
                                <li><Link to="/shipping">Shipping & Returns</Link></li>
                                <li><Link to="/store">Store Policy</Link></li>
                                <li><Link to="/store">Payments</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 ">
                            <ul>
                                <li>meryemyld08@gmail.com</li>
                                <span>
                                    500 Terry Francois Street San Francisco, CA 94158
                                </span>
                                <div>
                                    <span>Tel: 123-456-7890 </span>
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <br /><br />


            <div className="d-flex justify-content-center">
                <span className="lead">© 2023 Hera, created by Meryem Yıldız</span>
            </div>

            <br/><br/>
        </div>
    )
}

export default Footer