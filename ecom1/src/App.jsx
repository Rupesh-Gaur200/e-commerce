import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Deliver from './Component/Deliver';
import Contact from './Component/Contact';

import { useState } from 'react';

function App() {

  const [cart , setCart ] = useState([])

    const handleClick=(item)=>{
       
      let isPresent=false;
      cart.forEach((product)=>{
        if(item.id === product.id)
        isPresent=true;
      })

      if(isPresent)
      return alert("Product is already added to the Cart")  ;
    

      setCart((prevCart) => [...prevCart, item]);
    }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar size={cart.length}/>}>
        <Route path='/' element={<Home handleClick={handleClick} />} />
        <Route path='/Deliver' element={<Deliver />} />
        <Route path='/Contact' element={<Contact />} />
        
      </Route>
    )
  );


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
