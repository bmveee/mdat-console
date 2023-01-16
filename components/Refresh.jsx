import React, { useState } from "react";
import Image from "next/image";
import useFetch from './src/useFetch';


const RefreshData = (e) => {
  e.preventDefault();
  const url = 'https://jsonplaceholder.typicode.com/users';
  const {data} = useFetch( {
    url: url,

  })
  console.log("getting data from: ", url); //
};
const Refresh = () => {
  const [lastRefresh, setLastRefresh] = useState();
  return (
    <div className="p-5 ml-[-0.5rem] mt-[-1.5rem] self-center items-center">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={RefreshData}
      >
        {/* <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
        <Image
          className="fill-current w-4 h-4 mr-2"
          src="https://img.icons8.com/flat-round/64/null/update-left-rotation.png"
          alt=""
          width="64"
          height="64"
        />
        <span>Refresh Data</span>
      </button>
      <label className="text-xs px-3 text-white  self-center">
        Last Refresh:{" "}
      </label>
    </div>
  );
};

export default Refresh;
