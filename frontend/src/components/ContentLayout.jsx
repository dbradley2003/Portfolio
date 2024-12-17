import React from "react";



export default function ContentLayout({ children }) {
  return <div 
  className="flex flex-col 
  items-left justify-center 
  border border-white border-1 p-4 
  font-mono text-zinc-800 gap-6 rounded-md bg-white
  ">
{children}
</div>;
}

//p-4 bg-black text-green-400 text-white border rounded-md font-terminal sm:text-sm