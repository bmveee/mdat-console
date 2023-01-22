import React from 'react'
import Heading from './Heading';
import Navbar2 from './Navbar2';

const Layout = ({children}) => {
  return (
    <div className="content">
      <Heading heading='MDAT Admin Console' message='Password: ' buttonText='Authorize'/>
      <Navbar2></Navbar2>
      {children}
    </div>
  )
}

export default Layout