import React from "react";
import '../fonts.css'
import Navbar from "../components/navbar";
import MusicPlayer from "../components/musicplayer";
import DirectoryMap from "../components/DirectoryMap";
import FileExplorer from "../components/filer";
import Timeline from "../components/timeline";
export default function Home() {


return (
<div className="flex flex-col pl-4">
<div className="flex mb-3 mt-2 ">
  <h1
  className=" text-purple font-terminal text-4xl lg:text-5xl text-left mb-4  animate-typing overflow-hidden whitespace-nowrap"
  >
  Dominic's Portfolio
    
</h1>
  {/* Stationary Blinking Cursor */}
  <span className="animate-blink text-green mb-5 text-5xl">|</span>
</div>
 
 
 
    
<div className="flex flex-col  lg:flex-row  ">
<FileExplorer />
  <div className="flex-2 mt-5 lg:pl-5">
  <p className="text-green text-lg  lg:text-2xl border border-purple px-2 py-2 border-2 rounded-md font-terminal ">
  Select a file or folder to view its content...
</p>   
</div>
</div>
</div>

    
  );



}