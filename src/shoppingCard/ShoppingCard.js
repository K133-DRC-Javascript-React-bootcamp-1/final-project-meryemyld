import React from "react";
import { Card, Offcanvas } from "react-bootstrap";
import { CardContext, ProductContext } from "../Context";
import example from "../photo/6.1.jpg";
import { RiCloseCircleFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import data from "../Source.json";

const ShoppingCard = (props) => {
  const CardDetails = React.useContext(CardContext);
  const ProductDetails = React.useContext(ProductContext);

  const { id } = useParams();
  const [product]  = data.filter((item) =>  item.id == id);
  console.log(product)

  return (
    <>
      <Offcanvas
        placement="end"
        show={CardDetails.show} onHide={CardDetails.setCloseCanvas}
      >
        <Offcanvas.Header className="bg-success" closeButton>
          <Offcanvas.Title className="text-white">Card</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="row bg-light m-3 shadow p-2 rounded">
            <div className="col-md-4">
              <img className="w-100" src={product && product.src1}/>
            </div>
            
            <div className="col-md-5 pt-2">
              <p>{product && product.name}</p>
              <p>Size: {props.size}</p>
              <p>Quantity: {props.quantity}</p>
            </div>
            <div className="col-md-2 pb-3 d-flex align-items-end">250$</div>
            <div className="col-md-1 ">
              <button className="but">
                <RiCloseCircleFill />
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
     
    </>
  );
};

export default ShoppingCard;
