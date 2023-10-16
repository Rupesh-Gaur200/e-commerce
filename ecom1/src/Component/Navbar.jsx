import { Link  , Outlet} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-[#0a192f] text-gray-300 ">
        <div className="container mx-auto px-4 py-4 md:py-0 flex justify-between items-center w-full h-[80px] ">
          <ul className="flex gap-8">
            <li className="hover:scale-125 duration-300 cursor-pointer">
              <Link to="/Home">Home</Link>
            </li>
            <li className="hover:scale-125 duration-300 cursor-pointer">
              <Link to="/Trending">Trending</Link>
            </li>
            <li className="hover:scale-125 duration-300 cursor-pointer">
              <Link to="/Allbogs">All Blogs</Link>
            </li>
            <li className="hover:scale-125 duration-300 cursor-pointer">
              <Link to="/Create">Create</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default Navbar;


