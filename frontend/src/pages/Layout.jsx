import React from 'react';
import Navbar from '../components/navbar';


export const Layout = ({children}) => {
 

  return (
   
    <div className=' bg-shadowWhite w-full '>
     <Navbar />
     <main className="items-center px-3 sm:px-4 md:px-8 bg-shadowWhite">
       
        {children}
        </main> 
        </div>
  
  );
}