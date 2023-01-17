import React, { useState , useEffect } from "react";
import Image from "next/image";
import useFetch from "./src/useFetch";
import { getDataFromEndpoint } from "@/components/src/helpers";

const Refresh = (props) => {
  const [lastRefresh, setLastRefresh] = useState();
  const [refreshInterval, setRefreshInterval] = useState(0);
  const [lastRefreshTS, setLastRefreshTS] = useState(0);

  const doRefreshData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await getDataFromEndpoint(url);
    setLastRefreshTS(Date.now());
    return data;
  }



  const refreshData = async (e) => {
    e.preventDefault();
    // const url = "https://jsonplaceholder.typicode.com/users";
    // const data = await getDataFromEndpoint(url);
    var data = await doRefreshData();
    console.log("got data from: ", data); //
    setLastRefresh('Last refresh: ' + new Date().toLocaleTimeString());
    props.childData(data);
  };
  const autoRefreshChanged = (e) => {
    //console.log('auto-refresh: ', e.target.checked)
    if (e.target.checked) {
      setRefreshInterval(1000*5);
      //console.log('refresh_interval=',refreshInterval)
    } else {
      setRefreshInterval(0);
    }
    console.log('refresh_interval=',refreshInterval)
  }

  useEffect(() => {
    const refreshDataOnInterval = async () => {
      const data = await doRefreshData();
      props.childData(data);
      setLastRefresh('Last refresh: ' + new Date().toLocaleTimeString());

    }
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(refreshDataOnInterval, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [props, refreshInterval]);
  // useEffect(() => {
  //   setInterval(
  //     () => {
  //       if (refreshInterval > 0)  { //&& (Date.now() - lastRefreshTS <= refreshInterval)
  //         var data = doRefreshData();
  //         setLastRefresh('Last refresh: ' + new Date().toLocaleTimeString());
  //         props.childData(data);

  //       }
  //     }, refreshInterval ? refreshInterval : 0
  //   );
  // }, [props,refreshInterval]);


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
            <input type="checkbox" value="" className="sr-only peer" onChange={autoRefreshChanged}/>
            <div className=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 mr-2 text-xs text-white dark:text-gray-300">
              Auto Refresh
            </span>
          </label>
        </div>

        <label className="text-xs px-3 text-white  self-center">
          {lastRefresh}
        </label>
      </div>
    </div>
  );
};

export default Refresh;
