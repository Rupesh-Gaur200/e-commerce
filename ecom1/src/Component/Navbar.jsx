import { Link  , Outlet} from "react-router-dom";
import Home from "./Home";
import {CiSearch} from 'react-icons/ci'
import{AiOutlineUserAdd , AiOutlineShoppingCart} from 'react-icons/ai'
function Navbar() {
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
          
          <input className="w-72 rounded pl-2" type="text" placeholder="Serach Products "></input>

             <button><CiSearch className="w-8 h-6 hover:scale-125 duration-300"></CiSearch>
            </button>
             </div>
            <li className="hover:scale-125 duration-300 cursor-pointer">
              <Link to="/Home">All</Link>
            </li>

            <li className="hover:scale-125 duration-300 cursor-pointer">
               Category
            </li>

            <li className="hover:scale-125 duration-300 cursor-pointer"> Add Address </li>
            <li className="hover:scale-125 duration-300 cursor-pointer">Contact us</li>
       
            <li className="hover:scale-125 duration-300 cursor-pointer"><AiOutlineUserAdd className="w-8 h-6"></AiOutlineUserAdd></li>

            <li className="hover:scale-125 duration-300 cursor-pointer"><AiOutlineShoppingCart className="w-8 h-6"></AiOutlineShoppingCart></li>


            
           
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


