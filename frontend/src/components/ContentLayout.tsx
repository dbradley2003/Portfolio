import React from "react";



export default function ContentLayout({ children }) {
  return <div 
  className="flex flex-col 
  items-left justify-center 
  border border-white border-1 p-4 
  font-terminal text-white gap-4 rounded-md bg-black
  ">
{children}
</div>;
}

//p-4 bg-black text-green-400 text-white border rounded-md font-terminal sm:text-sm