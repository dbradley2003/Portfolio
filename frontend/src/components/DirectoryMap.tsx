import React from "react";
import H1 from "./H1";

export default function DirectoryMap({ children }) {

  return(
  <div>
    <H1 className={"mt-12"}>
    {children}
    </H1>
  </div>
  )
}