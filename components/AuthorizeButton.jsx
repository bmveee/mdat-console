import React from 'react'
import Image from 'next/image';

const AuthorizeButton = () => {
  return (
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center h-fit w-fit">
      <Image
        className="fill-current w-4 h-4 mr-2"
        src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/null/external-authorize-business-administration-wanicon-lineal-wanicon.png"
        alt=""
        width="64" height="64"
      />
        <span>Authorize</span>
    </button>
  )
}

export default AuthorizeButton