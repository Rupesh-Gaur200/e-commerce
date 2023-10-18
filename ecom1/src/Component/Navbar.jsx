import { Link, Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Deliver from "./Deliver";

function Navbar({ size }) {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();

  const [showCategory, setCategory] = useState(false);

  return (
    <>
      <nav className="bg-[#0a192f] text-gray-300">
        <div className="container mx-auto px-4 py-4 md:py-0">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto md:ml-8">
              <img
                src="https://www.simicart.com/blog/wp-content/uploads/eCommerce-logo-1.jpg"
                alt="logo image"
                className="w-36 md:w-48 h-12 md:h-16"
              />
            </div>
            <div
              onClick={() => setCategory(!showCategory)}
              className="md:hidden text-3xl cursor-pointer p-4"
            >
              
            </div>
            <div className="w-full md:w-auto  md:flex items-center">
              <input
                className="w-48 md:w-72 rounded pl-2"
                type="text"
                placeholder="Search Products"
              />
              <button>
                <CiSearch className="w-8 h-6 hover:scale-125 duration-300" />
              </button>
            </div>
            <ul className="w-full md:w-auto  md:flex items-center space-x-4">
              <Link to="/" className="text-xl">
                All
              </Link>
              <li className="relative text-xl">
                <span
                  onClick={() => setCategory(!showCategory)}
                  className="cursor-pointer"
                >
                  Category
                </span>
                {showCategory && (
                  <ul className="absolute left-0 top-12 w-48 bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1">
                    <Link to="/" className="cursor-pointer">
                      Nike
                    </Link>
                    <Link to="/" className="cursor-pointer">
                      Adidas
                    </Link>
                    <Link to="/" className="cursor-pointer">
                      Puma
                    </Link>
                    <Link to="/" className="cursor-pointer">
                      Sneakers
                    </Link>
                    <Link to="/" className="cursor-pointer">
                      Flats
                    </Link>
                  </ul>
                )}
              </li>
              <Link to="/Deliver" className="text-xl flex items-center">
                Save Address
                <IoLocationOutline />
              </Link>
              <Link to="/Contact" className="text-xl">
                Contact us
              </Link>
              {isAuthenticated ? (
                <li className="text-xl">
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="flex items-center">
                  <AiOutlineUserAdd className="w-8 h-6" />
                  <button onClick={() => loginWithRedirect()}>Login</button>
                </li>
              )}
              <Link to="/Cart" className="text-xl flex items-center">
                <AiOutlineShoppingCart className="w-8 h-6" />
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





