import Data from "./Data"


function Home (){
    return (
       
        <div className="grid grid-cols-3 gap-2 w-3/6 mt-4 ml-72">

            {Data.map((data)=>{
              
              
              return(
              <div className="">

                  <div className="shadow-2xl hover:scale-105 duration-300  bg-[#e4e4e4fd] " style={{width:"220px"}} >
                                <div>
                              <img  className=" w-32 ml-12 "  src={data.img}></img>
                              </div>
                              <div className="flex justify-center mt-6 ">
                              <h1 className="text-2xl font-semibold font-gray-300">{data.title}</h1>
                             </div>
                            </div>


              </div>
              
              
            )
            })}
            
            
        </div>
        
       
    )
}

export default Home