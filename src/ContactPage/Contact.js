import React from 'react'
import Footer from '../GeneralComponents/Footer'
import NavbarMenu from '../GeneralComponents/NavbarMenu'

const Contact = () => {
    return (
        <div>
            <NavbarMenu/>
            <div className="container ">
                <h5><span>CONTACT</span></h5>
            </div>

            <br /><br />
            <div className="container w-50" id="form_text">
                <div className="row d-flex justify-content-center ">


                    <form className="row g-3 d-flex justify-content-center">
                        <div className="col-md-5">
                            <label className="form-label">Enter Your First Name</label>
                            <input type="text" className="form-control" id="validationDefault01" required></input>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Enter Your Last Name</label>
                            <input type="text" className="form-control" id="validationDefault02" required></input>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="validationDefaultUsername" placeholder="name@example.com"></input>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Enter Your Phone </label>
                            <input type="tel" className="form-control" id="validationDefault03" placeholder="0555 555 5555" pattern="[0-9]{4} [0-9]{3} [0-9]{2}[0-9]{2}" required></input>
                        </div>
                        <div className="col-md-10">
                            <label className="form-label">Textarea</label>
                            <textarea className="form-control" id="validationTextarea" required></textarea>
                        </div>

                        <div className="col-10">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>


                </div>
            </div>

            <br /><br /><br />



            <br /><br /><br /><br />
            <Footer/>
        </div>
    )
}

export default Contact