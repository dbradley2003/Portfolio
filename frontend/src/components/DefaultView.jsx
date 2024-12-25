import React from "react";

import { IoClose } from "react-icons/io5";


export default function DefaultView({onClose}) {

    return (
        <div
    className="flex flex-col items-left justify-start p-4 text-dodgerblue  bg-background  shadow-md w-64 h-64 md:w-64 md:h-72 lg:w-80 lg:h-72 rounded-3xl border-2"
  >
        <h1 className=" text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4  ">
        Interactive Terminal
      </h1>
      <p className="border-b-2 mt-4"></p>
      <p className="text-xs  md:text-base mt-4 ">
        Select files from the file explorer to view their contents.
      </p>
      </div>
    )
    
}

        {/* <button
       className="absolute top-2 right-2 bg-red-500 
       hover:bg-red-600 text-white rounded-full h-7 w-7 flex items-center justify-center shadow-md"
        onClick={onClose}
        aria-label="Close"
        >
<IoClose className="text-xl" /> 
        </button> relative p-4 */}