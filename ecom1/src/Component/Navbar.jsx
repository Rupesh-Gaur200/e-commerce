import { Link  , Outlet} from "react-router-dom";
import Home from "./Home";
import {CiSearch} from 'react-icons/ci'
import{AiOutlineUserAdd , AiOutlineShoppingCart} from 'react-icons/ai'
import{IoLocationOutline} from 'react-icons/io5'
import{MdArrowDropDown} from 'react-icons/md'

import { useAuth0 } from "@auth0/auth0-react";

import { useState } from "react";
import Deliver from "./Deliver";

function Navbar({size}) {

  const { loginWithRedirect } = useAuth0();
  const { logout , isAuthenticated ,user} = useAuth0();

  const[showCategory , setCategory] = useState(false);

  const[deliverto , setDeliver] =useState(false)

  

  return (
    <>
      <nav className="bg-[#0a192f] text-gray-300 flex justify-end items-center ">

        
        <div className="container mx-auto px-4 py-4 md:py-0 flex items-center  w-full h-[80px] gap-72">


        <div className="ml-8">
           <img   src="https://www.simicart.com/blog/wp-content/uploads/eCommerce-logo-1.jpg" alt='logo image' style={{width:"200px" , height:"80px"}}></img>

            </div>

       <div className="flex justify-between item-center" >
          <ul className="flex  justify-center gap-10">
          
          <div className=" flex justify-center">
          
          <input className="w-72 rounded pl-2" type="text" placeholder="Search Products "></input>

             <button><CiSearch className="w-8 h-6 hover:scale-125 duration-300 "></CiSearch>
            </button>
             </div>
             <Link to="/" className="hover:scale-125 duration-300 cursor-pointer">
              All
            </Link> 

            <li className="hover:scale-125 duration-300 cursor-pointer  relative ">

            <span onClick={()=>setCategory(!showCategory)} className="flex gap-1 items-center">
               Category<span><MdArrowDropDown className=""></MdArrowDropDown></span>
               </span>

             {showCategory && (
              <div>
                <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">

                  <li className=" hover:scale-105  cursor-pointer duration-200">Nike</li>
                  <li  className=" hover:scale-105 cursor-pointer duration-200">Addidas</li>
                  <li  className=" hover:scale-105 cursor-pointer duration-200">puma</li>
                  <li  className=" hover:scale-105 cursor-pointer duration-200">Sneakers</li>
                  <li  className=" hover:scale-105 cursor-pointer duration-200">Flats</li>
                </ul>
              </div>
             )}
            </li>

            <Link to="/Deliver" className="hover:scale-125 duration-300 cursor-pointer flex justify-center items-center relative">
            <span>Deliver to</span>
              <span><IoLocationOutline></IoLocationOutline></span>

              
             



             </Link>
            <Link to='./Contact' className="hover:scale-125 duration-300 cursor-pointer">Contact us</Link>
       



       {

        isAuthenticated ?(<li className="hover:scale-125 duration-300 cursor-pointer flex">
        <span className="">
       <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
       <h6>{user.name}</h6>
          </button>
        
           </span>
           

       </li>):( <li className="hover:scale-125 duration-300 cursor-pointer flex">
              
              <AiOutlineUserAdd className="w-8 h-6"></AiOutlineUserAdd>
              <button onClick={() => loginWithRedirect()}>login</button>
            </li>)
       }
            
               
            


             
            <Link to="./Cart" className="hover:scale-125 duration-300 cursor-pointer flex"><AiOutlineShoppingCart className="w-8 h-6">
              
              
        
              </AiOutlineShoppingCart>
              
              <span className="w-4 bg-red-500 rounded pl-1">{size}</span>
              </Link>


            
           
          </ul>

          </div>
        </div>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default Navbar;


