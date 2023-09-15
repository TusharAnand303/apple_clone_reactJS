import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from "./Pages/Home/Home";
import Nav from "./components/Navbar/Nav";
import Mac from "./Pages/Mac/Mac";
import Ipad from './Pages/ipad/Ipad';
import Iphone from './Pages/Iphone/Iphone';
import Watch from './Pages/Watch/Watch';
import Cart from './Pages/Cart/Cart';
import Vision from './Pages/Vision/Vision';
import Airpods from './Pages/Airpods/Airpods';
import Acc from './Pages/Acc/Acc';
import Error from './Pages/error/Error';
import Support from './Pages/support/support';
import { useState, useEffect } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import Iphonecat from './categories/iphonecat/Iphonecat';
import Ipadcat from './categories/Ipadcat/Ipadcat';
import Maccat from './categories/Maccat/Maccat';
import Watchcat from './categories/Watchcat/Watchcat';
import Iphonedetails from "./Details/Iphonedetails/Iphonedetails";
import { Alert } from "@mui/material";

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setwarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 3000);
      return;
    }
    setCart([...cart, item]);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <Nav size={cart.length} />
        {warning && (
          <Alert severity="warning">Item is already added to cart!</Alert>
        )}
        {cart.length > 0 && (
          <Alert severity="success">Item has been added to cart!</Alert>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/vision" element={<Error />} />
          <Route path="/airpods" element={<Error />} />
          <Route path="/accessories" element={<Error />} />
          <Route path="/support" element={<Error />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/iphonecat" element={<Iphonecat />} />
          <Route path="/ipadcat" element={<Ipadcat />} />
          <Route path="/maccat" element={<Maccat />} />
          <Route path="/watchcat" element={<Watchcat />} />
          <Route
            path="/iphonedetails/:id"
            element={<Iphonedetails handleClick={handleClick} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

