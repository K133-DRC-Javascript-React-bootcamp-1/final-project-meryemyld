import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"
import About from "./AboutPage/About";
import Contact from "./ContactPage/Contact";
import Home from "./HomePage/Home";
import Product from "./ProductPage.js/Product";
import Shop from "./ShopPage/Shop";
import {CardProvider} from "./Context";
import ShoppingCard from "./shoppingCard/ShoppingCard";
import Login from "./GeneralComponents/Login";
import Alert from "./ProductPage.js/Alert";
import Questions from "./GeneralComponents/Questions";
import Shipping from "./GeneralComponents/Shipping";
import Store from "./GeneralComponents/Store";
import Test from "./Test";

function App() {

  return (
    <Router>
    <div >
      <CardProvider>
      <ShoppingCard/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/questions" element={<Questions/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/test/:id" element={<Test/>}/>
      </Routes>
      </CardProvider>
    </div>
    </Router>
  );
}

export default App;
