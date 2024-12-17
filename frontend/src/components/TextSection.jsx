import React from "react";


export default function TextSection({ children, className }) {

  return <div 
  className={`whitespace-pre-line leading-6 md:leading-8 lg:leading-8  
    border border-border
    text-primary text-sm md:text-lg lg:text-lg rounded-md py-6 px-4 bg-secondary shadow-md 
    ${className} `}>
    {children}
    </div>;
}