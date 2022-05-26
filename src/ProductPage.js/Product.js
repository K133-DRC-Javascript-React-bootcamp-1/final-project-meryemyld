import React from "react";
import { BsHeart } from "react-icons/bs";
import { useParams } from "react-router-dom";
import data from "../Source.json";
import NavbarMenu from "../GeneralComponents/NavbarMenu";
import Footer from "../GeneralComponents/Footer";
import AccordionContent from "./Accordion";
import { CardContext, CardDispatchContext } from "../Context";
import ShoppingCard from "../shoppingCard/ShoppingCard";
import { Carousel } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";

const Product = () => {

  //Use Params
  const { id } = useParams();
  const [product] = data.filter((item) => {
    return item.id == id;
  });



  //Get Initial value of size
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = React.useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //Get Inıtial value of quantity
  const getInitialQuantity = () => {
    const quantity = "";
    return quantity;
  };

  const [quantity, setQuantity] = React.useState(getInitialQuantity);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      <NavbarMenu quantity={quantity}/>
      <div className="container">
        <h5>
          <span>{product.name}</span>
        </h5>
      </div>

      <br />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 me-5 ">
            <Carousel className="mt-2">
              <Carousel.Item>
                <ReactImageMagnify
                  className="d-block w-100"
                  {...{
                    smallImage: {
                      isFluidWidth: true,
                      src: require(`../${product.src1}`),
                    },
                    largeImage: {
                      src: require(`../${product.src1}`),
                      width: 1200,
                      height: 1800,
                    },
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <ReactImageMagnify
                  className="d-block w-100"
                  {...{
                    smallImage: {
                      isFluidWidth: true,
                      src: require(`../${product.src2}`),
                    },
                    largeImage: {
                      src: require(`../${product.src2}`),
                      width: 1200,
                      height: 1800,
                    },
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-md-5 text-muted ps-2  ">
            <br />
            <span className="dress_head" id="dress_head">
              {product.name}
            </span>{" "}
            <br />
            <small id="barcode">SKU: {product.barcode}</small> <br />
            <br />
            <span id="cost">${product.price}</span>
            <br />
            <br />
            <div className="col-md-9">
              <form action="" className="needs-validation">
                <label className="form-label">
                  <small>Size</small>
                </label>

                <select
                  id="inputState"
                  className="form-select"
                  placeholder="Select size"
                  value={value} onChange={handleChange}
                >
                  <option value="" >Select size</option>
                  <option value="34">34</option>
                  <option value="36">36</option>
                  <option value="38">38</option>
                  <option value="40">40</option>
                  <option value="42">42</option>
                </select>
               
              </form>
            </div>
            <br />
            <div className="col-md-2">
              <label className="form-label">
                <small>Quantity</small>
              </label>
              <input
              value={quantity} onChange={handleQuantityChange}
                type="number"
                className="form-control"
                id="quantity"
                min="1"
                
              ></input>
            </div>
            <br />
            <br />
            <div className="col-md-10">
              <CardContext.Consumer>
                {(context) => (
                  <button
                    className="btn btn-outline-dark w-75 me-2"
                    onClick={context.setShowCanvas}
                  >
                    Add To Cart
                  </button>
                )}
              </CardContext.Consumer>

              <button className="btn btn-outline-dark w-20">
                <BsHeart />
              </button>
            </div>
            <br />
            <div className="col-md-9">
              <button className="btn btn-success w-100">Buy Now</button>
            </div>
            <br />
            <div className="col-md-9">
              <AccordionContent />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <ShoppingCard size={value} quantity={quantity} />
      <Footer />
    </div>
  );
};

export default Product;
