import React from 'react';
import Navbar from '../components/navbar';


export const Layout = ({children}) => {
 

  return (
    <div className="flex flex-col h-screen  ">
    
   <Navbar />

   <div className="flex py-6 flex-grow px-3 md:px-8 justify-center items-center bg-shadowWhite ">
        {children}
        </div> 
     </div>

  );
}
