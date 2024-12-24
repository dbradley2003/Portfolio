import React from "react";

import { IoClose } from "react-icons/io5";


export default function DefaultView({onClose}) {

    return (
        <div
    className={`flex flex-col justify-center w-full md:w-80 rounded:3xl md:h-72 mr-0  col-span-full mb-6 md:mb-0 md:col-span-1 border border-gray p-6 bg-neutral-100  shadow-md `}
  >
        <h1 className="text-lg md:text-xl text-blue-600 lg:text-2xl font-semibold ">
        Interactive Terminal
      </h1>
      <p className="text-xs text-blue-600 md:text-base mt-4 border-b-2 border-blue-600 pb-4">
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