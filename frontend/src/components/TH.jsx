import React from "react";

export default function TableHeader({ children, className }) {
  return <th className={` border border-border2 border-l-2 border-r-2 pt-1   ${className}`}>{children}</th>;
}