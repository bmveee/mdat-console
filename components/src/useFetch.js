import React, {useState} from 'react';

const useFetch = (opts) => {

  const data = fetch(opts.url).then().json();

  console.log('got data', data)
  return {
    data,
  };
};
export default useFetch;