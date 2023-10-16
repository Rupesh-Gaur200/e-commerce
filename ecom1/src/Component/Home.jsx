import Data from "./Data";

function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full mt-4 md:ml-8 lg:ml-16">
      {Data.map((data) => (
        <div key={data.title}>
          <div className="shadow-2xl hover:scale-105 duration-300 bg-[#e4e4e4fd] w-60 sm:w-80 md:w-72 lg:w-80">
            <div>
              <img className="w-32 md:w-40 lg:w-48 mx-auto" src={data.img} alt={data.title} />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">
                {data.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
