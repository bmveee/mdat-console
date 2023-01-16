import React from "react";
import Authorize from "./Authorize";

const Heading = ({ heading, message, buttonText }) => {
  return (
    // <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
    <div className="grid grid-rows-1 grid-cols-4 gap-1 mb-1 text-white">
      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" /> */}
      {/* <div className='p-5 text-white z-[2] ml-[-20rem] mt-[-15rem]'> */}
      <div className="text-white z-[2] p-5 ml-[-0.5rem] mt-[-0.5rem] col-span-2 self-center">
        <span className="text-xxl font-bold col-span-2">{heading}</span>
      </div>
      <div className="col-span-2 pl-24 ">
        <Authorize message={message} />
      </div>

      <div className="ml-3 max-h-1 border shadow-sm shadow-slate-400 col-span-4 mt-[-0.5rem] mr-5 "></div>

      {/* <div className="bg-purple-500 border row-span-2 col-span-2 mt-[-12.0rem] z-[2]">Table data</div>
      <div className="bg-slate-500 border row-span-2 col-span-2 mt-[-12rem]">Graph Data</div> */}
    </div>
  );
};

export default Heading;
