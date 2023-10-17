import Data from "./Data";

function Home() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mb-4 w-90 mt-4">
      
      
      {Data.map((data) => (
        
          <div className="   m-auto mt-4 shadow-2xl w-80 rounded">
           
           
            <div className=" ">
           <img className="  mx-auto w-full" src={data.img} alt={data.title} />
            </div>


            <div className="  text-center mt-2   ">

              <div className=" flex  justify-between ml-2 mr-2  items-center">
              <h4 className="   sm:text-xl md:text-xl lg:text-xl font-semibold text-gray-700">
                {data.title}
              </h4>

              <p className="">${data.newPrice}</p>

              </div>

              <span className="">Company : {data.company}</span>

              <p className=""> Reviews : {data.reviews}</p>
            </div>


            <div className=" mb-2 ml-2 mr-2 mt-2  rounded bg-yellow-400  hover:scale-105 duration-300 ">
            
            <button className=" ml-28  text-black">Add to cart </button>

            </div>
          </div>
       
      ))}
    </div>
  );
}

export default Home;
