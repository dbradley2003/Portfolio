import React from 'react';
import Navbar from '../components/navbar';


export const Layout = ({children}) => {
 

  return (
    <div className="flex flex-col min-h-screen">
    
   <Navbar />
   <div className="flex flex-grow mt-4 md:mt-8  overflow-auto px-3 sm:px-6 md:px-8 py-6">
   {/* <div className="flex py-6 flex-grow px-3 md:px-8 justify-center items-center bg-shadowWhite "> */}
        {children}
        </div> 
     </div>

  );
}
