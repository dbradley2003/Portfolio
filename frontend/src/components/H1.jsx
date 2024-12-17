import React from "react";


export default function H1({ children,className }) {

  return <h1 className={`text-2xl  md:text-4xl mt-2 font-bold text-blue-900 underline ${className} `}>{children}</h1>;
}