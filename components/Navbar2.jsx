import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar2 = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  //{currentRoute === '/' ? "text-white font-semibold text-md" : "text-teal-300 font-medium text-sm"}
  return (
    <div>
      <nav className="shadow-sm  w-full z-10 ">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-2 justify-between  w-full">
              <div className="hidden md:block">
                <div className="ml-3 flex items-baseline spec-x-4"></div>
                <Link href="/" legacyBehavior>
                  <a className={[currentRoute === '/' ? 'text-white text-md' : 'text-gray-800 text-sm', "font-medium cursor-pointer  px-3 py-3  hover:bg-gray-400 rounded-md text-sm"].join(" ")}>
                    Dashboard
                  </a>
                </Link>
                <Link href="/orders" legacyBehavior>
                <a className={[currentRoute === '/orders' ? 'text-white text-md' : 'text-gray-800 text-sm', "font-medium cursor-pointer  px-3 py-3  hover:bg-gray-400 rounded-md text-sm"].join(" ")}>
                    Orders
                  </a>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
