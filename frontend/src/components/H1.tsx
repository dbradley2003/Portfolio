import React from "react";


export default function H1({ children,className }) {

  return <h1 className={`text-4xl font-bold text-yellow ${className} `}>{children}</h1>;
}