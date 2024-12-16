import React from "react";


export default function Button({ children, onClick }) {
    return <button

    onClick={onClick} 
    className="bg-green text-base text-white font-bold py-2 rounded hover:bg-gray w-20">
    {children}
    </button>;
}