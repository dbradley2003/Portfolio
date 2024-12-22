import React from "react";

import { IoClose } from "react-icons/io5";


export default function DefaultView({onClose}) {

    return (
    <div className="relative p-4">
        <button
       className="absolute top-2 right-2 bg-red-500 
       hover:bg-red-600 text-white rounded-full h-7 w-7 flex items-center justify-center shadow-md"
        onClick={onClose}
        aria-label="Close"
        >
<IoClose className="text-xl" /> {/* Clean close icon */}
        </button>
       
    <p className="text-blue-500 italic text-base md:text-xl bg-gray-100 border border-gray-300 rounded-lg py-3 px-5 shadow-sm font-inter">
        Select a file or folder to view its contents...
        </p>

        </div>
    )
    
}