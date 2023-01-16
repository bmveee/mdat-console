import React, { useState } from "react";
import AuthorizeButton from "./AuthorizeButton";

const Authorize = () => {
  const [securePassword, setSecurePassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", e);
  };
  const shouldSubmit = (e) => {
    console.log("should_submit", e);
  };
  return (
    <div className="text-white z-[2] p-2  mt-[-1.5rem] mr-3 col-span-2 self-center">
      <div className="flex flex-1 justify-end">
        <form
          className="py-5 text-xs"
          onBlur={(e) => {
            if (shouldSubmit(e)) handleSubmit(e);
          }}
          onSubmit={handleSubmit}
        >
          {/* {message} */}
          {/* <input className="ml-2 mr-2 p-1 text-black "></input> */}
          {/* <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ml-3 mr-2 text-xxs text-gray-900 dark:text-gray-300">
            Enable Auth
          </span>
        </label> */}
          <input
            type="password"
            id="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500  w-fit  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="password"
          />

          <div id="authorizeBtn" className="pt-4 ml-2">
            <AuthorizeButton />
          </div>
          {/* <button className="text-xs px-8 py-2 border m-l-2 p-2">
          {buttonText}
        </button> */}
        </form>
      </div>
    </div>
  );
};

export default Authorize;
