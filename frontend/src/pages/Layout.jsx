import React from 'react';
import Navbar from '../components/navbar';


export const Layout = ({children}) => {
 

  return (
    <div className="px-12 py-8  mt-0  md:mt-12">
        {children}
        </div> 
  );
}
