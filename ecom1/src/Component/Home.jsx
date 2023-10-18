import React from 'react';
import Data from './Data';

function Home({ handleClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {Data.map((data) => (
        <div key={data.id} className="shadow-md rounded-lg">
          <img className="mx-auto w-full" src={data.img} alt={data.title} />
          <div className="p-4">
            <h4 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-gray-700">
              {data.title}
            </h4>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
              <p>${data.price}</p>
              <div className="mt-2 sm:mt-0">
                <button
                  className="rounded-full bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 hover:scale-105 transition-transform duration-300"
                  onClick={() => handleClick(data)}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <span className="text-sm sm:text-base">Company: {data.company}</span>
            <p className="text-sm sm:text-base">Reviews: {data.reviews}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;




