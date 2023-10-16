
import { Link , Outlet } from "react-router-dom";
function Navbar(){
    return(
        <>
        
    
            <nav className=" w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
               <div>
         <ul className='flex gap-8'>
             <li className='hover:scale-125 duration-300 cursor-pointer'>
                <Link to ="/Home">Home</Link>
             </li>
             <li className='hover:scale-125 duration-300 cursor-pointer'>
                <Link to ="/Trending">Trending</Link>
             </li>

             <li className='hover:scale-125 duration-300 cursor-pointer'>
                      <Link to="/Allbogs">All bogs</Link>

             </li>

             <li className='hover:scale-125 duration-300 cursor-pointer'>
                <Link to ="/Create">Create</Link>
             </li>



          </ul>
          </div>
          
          </nav>
       
        <main>
                <Outlet></Outlet>
             </main> 
             
        </>
    )
}
export default Navbar;

