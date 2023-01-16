import React from "react";

const Authorize = ({message, buttonText}) => {
  return (
    <div className="text-white z-[2] p-2 ml-[-0.5rem] mt-[-1.5rem] col-span-2 self-center">
      <p className="py-5 text-xs  m-l-2 p-2 self-center justify-self-auto ">
        {message}
        <input className="ml-2 mr-2 p-1 text-black "></input>
        <button className="text-xs px-8 py-2 border m-l-2 p-2">
          {buttonText}
        </button>
      </p>
    </div>
  );
};

export default Authorize;
