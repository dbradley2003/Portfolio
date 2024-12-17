import React from "react";


export default function Button({ children, onClick }) {
    return <button

    onClick={onClick} 
    className="bg-sky-600 w-20 mb-10 text-sm md:text-lg text-white font-bold py-3 rounded  w-20 md:w-40 hover:bg-hover">
    {children}
    </button>;
}