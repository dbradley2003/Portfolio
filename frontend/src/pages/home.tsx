import React from "react";
import '../fonts.css'
import Navbar from "../components/navbar";
import MusicPlayer from "../components/musicplayer";
import DirectoryMap from "../components/DirectoryMap";
import FileExplorer from "../components/filer";
import Timeline from "../components/timeline";

export default function Home() {


return (
<div className="flex flex-col">
<div className="flex mt-8  justify-center ">
  <h1
  className=" underline text-blue-900 font-inter font-bold text-3xl md:text-4xl text-left mt-1  animate-typing overflow-hidden whitespace-nowrap"
  >
  Dominic's Portfolio
    
</h1>
  {/* Stationary Blinking Cursor */}
  <span className="animate-blink  text-4xl mb-4 lg:text-4xl">|</span>
</div>
 
 
 
    
<div className="flex flex-col lg:flex-row mt-10 md:mt-16">
  
<FileExplorer />
  
</div>
</div>

    
  );



}