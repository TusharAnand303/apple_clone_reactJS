import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    if (arr.length === 0) {
      setPrice(0);
    }
  };

  const handleIncrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
    handlePrice();
  };

  const handleDecrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.amount > 1) {
        return {
          ...item,
          amount: item.amount - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  }, []);

  return (
    <>
      <h1 className='cart_h1'>Your Cart items</h1>
      <hr style={{ marginTop: "30px" }} />
      {cart.length === 0 ? (
        <h2 style={{textAlign:"center",marginTop:"20px"}}>No items in cart</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id} className='cart'>
            <img src={item.image} alt='' />
            <div className='counter'>
              <h2 className='ico' onClick={() => handleDecrease(item.id)}>
                -
              </h2>
              <h2>{item.amount}</h2>
              <h2 className='ico' onClick={() => handleIncrease(item.id)}>
                +
              </h2>
            </div>
            <div className='idetails'>
              <h1>{item.name}</h1>
              <p>{item.desc}</p>
              <p>₹ {item.price}*</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <hr style={{ marginBottom: '30px', marginTop: '170px' }} />

      <div className='price'>
        <h1>Total Price</h1>
        <h3>₹ {price}.00</h3>
        <button className='checkout'>Proceed to checkout</button>
      </div>
    </>
  );
};

export default Cart;
