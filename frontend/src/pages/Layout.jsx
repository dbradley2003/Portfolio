import React from 'react';
import Navbar from '../components/navbar';

export const Layout = (props) => {
 

  return (
   
   <>
      <div className='p-6 bg-black w-full h-full'>
        {props.children}
        </div>
        </>
    
  
  );
}