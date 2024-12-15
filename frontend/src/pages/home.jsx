import React from "react";
import '../fonts.css'
import Navbar from "../components/navbar";
import MusicPlayer from "../components/musicplayer";
import FileExplorer from "../components/filer";
export default function Home() {


    return (
      <div className="flex flex-row items-start p-2">
     
        <div className=" w-full mt-5">
        <div className="flex items-center">
        <h1
            className="p-3 text-purple font-terminal text-5xl text-left mb-5  animate-typing overflow-hidden whitespace-nowrap"
         >
            Dominic's Portfolio
           
          </h1>
  {/* Stationary Blinking Cursor */}
  <span className="animate-blink text-green mb-5 text-5xl">|</span>
</div>
      
          {/* <MusicPlayer /> */}
          <FileExplorer />
          </div>
        </div>
        
      );



}