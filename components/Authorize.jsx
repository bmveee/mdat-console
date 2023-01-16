import React from "react";
import AuthorizeButton from "./AuthorizeButton";

const Authorize = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-white z-[2] p-2  mt-[-1.5rem] col-span-2 self-center">
      <form
        className="py-5 text-xs  self-center justify-self-auto flex-1"
        onBlur={(e) => {
          if (shouldSubmit(e)) handleSubmit(e);
        }}
        onSubmit={handleSubmit}
      >
        {/* {message} */}
        {/* <input className="ml-2 mr-2 p-1 text-black "></input> */}
        <input
          type="password"
          id="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-t-sm focus:ring-blue-500 focus:border-blue-500  w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
        />

        <span id="authorizeBtn" className="pt-2 ml-2 justify-self-auto">
          <AuthorizeButton />
        </span>
        {/* <button className="text-xs px-8 py-2 border m-l-2 p-2">
          {buttonText}
        </button> */}
      </form>
    </div>
  );
};

export default Authorize;
