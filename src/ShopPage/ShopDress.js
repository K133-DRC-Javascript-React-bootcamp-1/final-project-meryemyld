import React, { useState, createContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import data from "../Source.json";
import "../css/Outline.css";
import { Link } from "react-router-dom";
import Product from "../ProductPage.js/Product";


const ShopDress = () => {
  const [items, setItems] = useState(data);

  //MouseOver
  const handleMouseOver = (elementId) => {
    const newObj = items.map((obj) => {
      if (obj.id === elementId) {
        return { ...obj, src1: `${obj.src2}` };
      }
      return obj;
    });
    setItems(newObj);
  };

  //MouseLeave
  const handleMouseLeave = (elementId) => {
    const newObj = data.map((obj) => {
      if (obj.id === elementId) {
        return { ...obj, src1: `${obj.src1}` };
      }
      return obj;
    });
    setItems(newObj);
  };


  return (
      <div className="container ">
        <div>
          <h5>
            <span>THE COLLECTION</span>
          </h5>
        </div>
        <br />

        <Row>
          {" "}
          {items.map((element) => (
            <Col
              xs="3"
              key={element.id}
              className="d-flex justify-content-center"
            >
              <Link underline="none" to={`/product/${element.id}`}>
                <Card className="cards">
                  <Card.Img
                    variant="top"
                    id="image"
                    src={require(`../${element.src1}`)}
                    onMouseOver={() => handleMouseOver(element.id)}
                    onMouseLeave={() => handleMouseLeave(element.id)}
                  />
                  <Card.Body>
                    <Card.Text className="text-center m-0">
                      <li className="cards-text">{element.name}</li>
                      <span className="cards-text">${element.price}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
  );
};

export default ShopDress;
