import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CardContext} from "../Context";
import brandImage from "../photo/brand.png";

//import {} from "../images"

const NavbarMenu = (props) => {
  const CardDetails = React.useContext(CardContext);

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <form className="d-flex">
            <input
              className="form-control me-2 border-0 border-bottom border-dark rounded-0"
              type="search"
              placeholder="Search"
            ></input>
            <button className="btn btn-outline-success border-0" type="submit">
              <BsSearch />
            </button>
          </form>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <Link to="/login">
              <Button className="btn btn-light">
                <BsFillPersonFill /> <small>Log In</small>
              </Button>
            </Link>

            <CardContext.Consumer>
            {(context) => (
            <Button
              className="btn btn-light"
              onClick={context.setShowCanvas}
            >
              {" "}
              <BsFillCartFill />
              <span id="cart_number"> {props.quantity}</span>
            </Button>
             )}
            </CardContext.Consumer>
            
          </div>
        </div>
      </nav>

      <div
        id="brand"
        className="container d-flex justify-content-center align-items-center"
      >
        <img id="brand_img" alt="" src={brandImage}></img>
        <span id="brand_name">HERA</span>
      </div>

      <div className="container-md d-flex justify-content-center mt-4">
        <ul className="list-group list-group-horizontal ">
          <li className="list-group-item border-0">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              HOME
            </Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
              SHOP
            </Link>
          </li>
          <li className="list-group-item border-0">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              ABOUT
            </Link>
          </li>
          <li className="list-group-item border-0">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
};

export default NavbarMenu;
