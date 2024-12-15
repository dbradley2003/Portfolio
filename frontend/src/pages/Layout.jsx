import React from 'react';
import Navbar from '../components/navbar';

export const Layout = (props) => {
 

  return (
   
   <>
      
      {/* <Navbar /> */}
      
    
      <main className='p-4'>
        {props.children}
        </main>
        </>
    
  
  );
}