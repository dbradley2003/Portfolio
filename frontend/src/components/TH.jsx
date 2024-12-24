import React from "react";

export default function TableHeader({ children, className }) {
  return <th className={` border border-neutral-300 border-l-2 border-r-2 border-t-0 pt-1   ${className}`}>{children}</th>;
}