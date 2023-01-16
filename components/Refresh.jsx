import React, { useState } from "react";
import Image from "next/image";
import useFetch from "./src/useFetch";
import { getDataFromEndpoint } from "@/components/src/helpers";

const Refresh = () => {
  const [lastRefresh, setLastRefresh] = useState();
  const refreshData = async (e) => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await getDataFromEndpoint(url);
    console.log("got data from: ", url); //
    setLastRefresh(new Date().toLocaleTimeString());
  };
  return (
    <div className="p-5 ml-[-0.5rem] mt-[-1.5rem] flex flex-1 self-center items-center">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={refreshData}
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
      <div className="flex flex-1 flex-row">
        <div className="ml-3">
          <label className=" relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 mr-2 text-xs text-white dark:text-gray-300">
              Auto Refresh
            </span>
          </label>
        </div>

        <label className="text-xs px-3 text-white  self-center">
          Last Refresh: {lastRefresh}
        </label>
      </div>
    </div>
  );
};

export default Refresh;
