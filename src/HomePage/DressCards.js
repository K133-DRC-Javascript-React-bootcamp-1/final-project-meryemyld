import React, { useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import data from "../Source.json"
import { Link } from 'react-router-dom'
import "../css/Outline.css"

const DressCards = () => {

  const [items, setItems] = useState(data);



  const handleMouseOver = (elementId) => {
    const newObj = items.map(obj => {
      if (obj.id === elementId) {
        return { ...obj, src1: `${obj.src2}` };
      }
      return obj
    })
    setItems(newObj)
  }


  const handleMouseLeave = (elementId) => {
    const newObj = data.map(obj => {
      if (obj.id === elementId) {
        return { ...obj, src1: `${obj.src1}` };
      }
      return obj
    })
    setItems(newObj)
  }

  
  return (
    <div className='container '>


      <Row > {items.slice(0, 8).map((element) =>
        <Col xs="3" key={element.id} className="d-flex justify-content-center">
          <Link className='text-decoration-none'  to={`/product/${element.id}`} >
            <Card className="cards">
              <Card.Img variant="top" id="image" src={require(`../${element.src1}`)} onMouseOver={() => handleMouseOver(element.id)} onMouseLeave={() => handleMouseLeave(element.id)} />
              <Card.Body>
                <Card.Text className='text-center m-0'>
                  <li className="cards-text">{element.name}</li>
                  <span className="cards-text">${element.price}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      )}
      </Row>
    

      <br /><br /><br />


      <div className="container d-flex justify-content-center ">
        <form action="shop.html">
          <Link to="/shop">
            <Button renderas="button" variant="outline-dark" >
              <span>Shop All</span>
            </Button>
          </Link>
        </form>
      </div>


      <br /><br /><br /><br /><br />

    </div>
  )
}

export default DressCards