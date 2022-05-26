import React from 'react'
import Footer from '../GeneralComponents/Footer'
import NavbarMenu from '../GeneralComponents/NavbarMenu'
import aboutimage from "../photo/work3.2.jpg"

const Aabout = () => {
  return (
    <div>
      <NavbarMenu/>
      <div className="container ">
        <h5><span>BEHIND THE BRAND</span></h5>
      </div>

      <br />

      <div className="container ">
        <div className="row d-flex justify-content-center p-5">

          <div className="col-md-6 p-4 text-muted">
            <small className="lead text-dark">Who we are?</small>
            <br /><br />
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil error quasi mollitia beatae nam voluptatum magni necessitatibus natus quos aliquam unde facere, eius quas neque! Libero earum error eveniet.</small>
            <br /><br />
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci recusandae repellendus hic placeat deleniti ullam quae tempora iste maiores culpa voluptatibus, magni, ab veniam voluptatum omnis tenetur odit quasi?</small>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci recusandae repellendus hic placeat deleniti ullam quae tempora iste maiores culpa voluptatibus, magni, ab veniam voluptatum omnis tenetur odit quasi?</small>

          </div>

          <div className="col-md-5">
            <img className="rounded" src={aboutimage} ></img>
          </div>
        </div>
      </div>
      <br /><br /><br />



      <br /><br /><br /><br /><br />
      <Footer/>
    </div>
  )
}

export default Aabout