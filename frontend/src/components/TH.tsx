import React from "react";

export default function TableHeader({ children, className }) {
  return <th className={`py-0 px-1 border border-green border-2 text-left ${className}`}>{children}</th>;
}