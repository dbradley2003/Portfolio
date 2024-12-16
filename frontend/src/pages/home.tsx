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
<div className="flex mt-2 ">
  <h1
  className=" text-purple font-terminal text-4xl lg:text-5xl text-left mb-4  animate-typing overflow-hidden whitespace-nowrap"
  >
  Dominic's Portfolio
    
</h1>
  {/* Stationary Blinking Cursor */}
  <span className="animate-blink text-green mb-3 text-4xl lg:text-5xl">|</span>
</div>
 
 
 
    
<div className="flex flex-col lg:flex-row   ">
<FileExplorer />
  
</div>
</div>

    
  );



}