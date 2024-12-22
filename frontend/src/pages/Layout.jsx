import React from 'react';
import Navbar from '../components/navbar';

export const Layout = (props) => {
 

  return (
   
   <>
      <div className='py-6 px-3 sm:px-4 md:px-8 bg-shadowWhite w-full h-screen'>
        {props.children}
        </div>
        </>
    
  
  );
}