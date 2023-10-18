import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <div className="container mx-auto mt-10 p-4">
      {cart?.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
          <div className="flex items-center">
            <img src={item.img} alt={item.title} className="w-16 h-16 object-contain mr-4" />
            <div>
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>
          <div className="sm:flex items-center sm:gap-8">
           <button  className="px-1 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={()=>(handleChange(item , +1))}>+</button>
            <span className="mx-2">{item.amount}</span>
            <button  className="px-1 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={()=>(handleChange(item ,-1))}>-</button>
            
            <button
              className="ml-1 text-red-500 hover:text-red-600"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="text-right mt-4">
        <p className="text-lg font-semibold">Total Price of Your Cart</p>
        <p className="text-2xl text-blue-500">Rs = {price.toFixed(2)}</p>
      </div>
 

        <span className=' bg-cyan-400 rounded pb-1 pt-1 pl-1 pr-1'>
            <button><Link to="/">Contiue Shopping</Link></button>
        </span>




    </div>
  );
};

export default Cart;



