import React from "react";
import '../fonts.css'
import Navbar from "../components/navbar";
import MusicPlayer from "../components/musicplayer";
import DirectoryMap from "../components/DirectoryMap";
import FileExplorer from "../components/filer";
import Timeline from "../components/timeline";

export default function Home() {


return (
<div className="flex flex-col items-center mt-12 md:mt-16  2xl:mt-22 w-full">
<div className="flex justify-center mb-5 md:mb-2">
    <h1
    className=" text-blue-800 text-center  font-inter font-bold text-3xl md:text-4xl text-left animate-typing  overflow-hidden whitespace-nowrap"
    >
    Dominic's Portfolio

    </h1>
        {/* Stationary Blinking Cursor */}
        <span className="animate-blink text-left  font-inter font-bold text-blue-800 text-3xl mt-0.5  md:text-4xl whitespace-nowrap">|</span>
        </div>
 
 
 
    
<div className="flex flex-col lg:flex-row mt-14 md:mt-20 lg:mt-20  2xl:mt-24 ">
  
<FileExplorer />
  
</div>
</div>

    
  );



}