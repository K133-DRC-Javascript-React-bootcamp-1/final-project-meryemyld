import React from 'react'
import { useParams } from "react-router-dom";
import ShoppingCard from './shoppingCard/ShoppingCard';
import data from "./Source.json";

const Test = () => {
    const  {id}  = useParams();
  const [x ]= data.filter((item) => {
    return item.id == id;

  });

  const name=x.name
  console.log(name)
  return (
    <div>
        <ShoppingCard x={name}/>
    </div>
  )
}

export default Test