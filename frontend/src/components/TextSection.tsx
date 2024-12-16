import React from "react";


export default function TextSection({ children, className }) {

  return <div 
  className={`whitespace-pre-line leading-8  
    
    text-black text-base lg:text-2xl rounded-md p-4 bg-gray shadow-md 
    ${className} `}>
    {children}
    </div>;
}