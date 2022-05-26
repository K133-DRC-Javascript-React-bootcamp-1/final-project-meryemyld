import React, { createContext, useState } from "react";
import data from "./Source.json";
import { useParams } from "react-router-dom";

const CardContext = createContext();
const ProductContext = createContext();

const CardProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleShowChange = () => setShow(true);
  const handleCloseChange = () => setShow(false);

  const { id } = useParams();
  const [product] = data.filter((item) => {
    return item.id == id;
  });

  const ker={
    id:"3",
    name:"meryem"
  }

  return (
    <CardContext.Provider
      value={{
        show,
        setShowCanvas: handleShowChange,
        setCloseCanvas: handleCloseChange,
      }}
    >
      <ProductContext.Provider value={ker}>
        {children}
      </ProductContext.Provider>
    </CardContext.Provider>
  );
};

export { CardProvider, CardContext, ProductContext };
