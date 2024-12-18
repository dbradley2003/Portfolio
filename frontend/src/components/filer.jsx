import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { BsCircleFill } from "react-icons/bs";
import useSound from "use-sound"; // for handling the sound 
import MusicPlayer from "./musicplayer";
import hover from "../sounds/hoverclick.mp3"
import click from "../sounds/click.mp3"
import throttle from "lodash/throttle";
import TH from "./TH"
import DefaultView from "../components/DefaultView";
import { FaFolder, FaFileAlt } from "react-icons/fa";
import "../style/filer.css";
import Draggable from "react-draggable"; // Import Draggable
import { useMediaQuery } from "react-responsive";

function FileExplorer() {

const navigate = useNavigate();

const defaultComponent = <DefaultView onClose={() => setCurrentView(null)} />;
const soundUrl = hover
const clickurl = click

const [currentFolder, setCurrentFolder] = useState("root");
const [currentView, setCurrentView] = useState(defaultComponent);
const [viewType, setViewType] = useState("default");

const [playHover] = useSound(hover,{preload:true,volume: 0.075,})
const [playEffect] = useSound(click, {preload:true, volume: 0.08 });

const throttledPlay = throttle(() => {
  playHover();
}, 100); //200ms throttle

const handleMouseEnter = () => {
  throttledPlay();
};

const handleBack = () => {
  playEffect()
  setCurrentFolder("root")
  setCurrentView(defaultComponent);
  setViewType("default");
}
const isLgScreen = useMediaQuery({ query: "(min-width: 1024px)" });

const folders = {

  root: [
    {name: "About.txt", type:"file",size:"1.2KB",modified:"2024-12-15"},
    {name: "Experience.pdf", type:"file", size:"500KB",modified:"2024-09-02"},
    {name: "Projects", type: "folder",modified:"2024-12-15"},
    {name: "Contact", type: "folder",modified:"2024-04-11"},
    {name: "MusicPlayer.exe", type:"file", size:"2.3MB",modified:"2023-11-01"},
  ],
  Projects: [
    {name: "TeamUpNow.txt", type:"file", size:"3.4KB",modified:"2021-04-27"},
    {name: "TradeAnalysis.txt", type:"file", size:"3.4KB",modified:"2024-12-15"}
  ],
  Contact: [
    {name: "Email.txt", type:"file", size:"3.4KB",modified:"2024-12-15"},
    {name: "LinkedIn.url", type:"file", size:"3.4KB",modified:"2022-12-01"},
    {name: "GitHub.url", type:"file", size:"3.4KB",modified:"2024-12-15"}
  ],
};

useEffect(() => {
  // Save current folder and history to localStorage
  localStorage.setItem("currentFolder", currentFolder);
  localStorage.setItem("history", JSON.stringify(history));
}, [currentFolder, history]);
   

const handleFileOrFolderClick = (item) => {
  playEffect()

if (item.name === "MusicPlayer.exe" && viewType !== "default"){
  setCurrentView(defaultComponent);
  setViewType("default");
 
}

 else if (item.name == "MusicPlayer.exe"){
  setCurrentView(<MusicPlayer />)
  setViewType("music")
}
else if(item.type == "folder"){
setCurrentFolder(item.name)
setViewType("default");
setCurrentView(defaultComponent);
}
else if (item.type == "file"){
  const fileType = item.name.split(".").pop()
  
 switch (fileType) {
  case "txt":
    navigate(`/Portfolio/text/${item.name}`);
    break;
  case "pdf":
    navigate(`/Portfolio/pdf/${item.name}`);
    break;
  
  case "url":
    navigate(`/Portfolio/url/${item.name}`);
    break; 
    }
  }
}

return (
  
<section 
className={`mb-16 
md:mb-0 
grid 
h-full
grid-cols-full

md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5
 `}>


<Draggable cancel="tr" className=".handle">

  
  <div 
  className={`flex flex-col h-full  
    ${currentView ? " md:col-span-2 lg:col-span-3 2xl:col-span-4" : "md:col-span-full px-8 "}
  `}
  >
  

<div className="bg-gray font-inter text-black flex items-center px-2 py-2  shadow-md rounded-t-md ">   
  <div className="flex gap-2">
    <BsCircleFill className="text-red-500" />
    <BsCircleFill className="text-yellow-500" />
    <BsCircleFill className="text-green-500" />
  </div>
  <span className="ml-4 text-xs md:text-sm ">File Explorer - /{currentFolder}</span>
</div>

<div className="flex-1  overflow-auto sm:overflow-hidden md:overflow-hidden rounded-b-md  ">
   

  <table
  className={`table-auto border text-left 
    shadow-md bg-secondary font-inter text-dodgerblue text-left    
    ${
    currentView ? "w-full" : "md:w-screen mx-auto "
  }`}
>
    <thead>
      <tr className=" text-xs md:text-base lg:text-lg ">
        <TH className="w-2/6 px-2">Name</TH>
        <TH className="w-1/6 px-2">Size</TH>
        <TH className="w-1/6 px-2">Type</TH>
        <TH className="w-1/6 px-2">Modified</TH>
            
          </tr>
        </thead>
    <tbody className="text-sm md:text-base lg:text-xl ">
    {currentFolder !== "root" && (
  <tr className="hover:none cursor-pointer md:hover:bg-accent2" onClick={handleBack}>
  <td colSpan={4} className=" px-2 border border-border1  border-2   text-left h-10">
    {".."} (Back)
  </td>
</tr>
    )}

  {folders[currentFolder]?.map((item, index) => (
    <tr
            key={index}
            className={`cursor-pointer md:hover hover:scale `}
            onClick={() => handleFileOrFolderClick(item)}
            onMouseEnter={handleMouseEnter}
          >
    <td className="border border-border2 border-2 align-middle h-20 lg:h-20 px-2 ">
              <div className="inline-flex items-center  gap-2 ">
                {item.type === "folder" ? (
                  <FaFolder className="text-yellow-500 text-sm md:text-lg" />
                ) : (

                  <FaFileAlt className="text-blue-500 text-sm md:text-lg" />
                
                )}
                <span>{item.name}</span>
              </div>
            </td>
            <td className="border border-border2 border-2 px-2 ">
              {item.size}
            </td>
            <td className="border border-border2  border-2 px-2   ">
              {item.type === "folder" ? "Folder" : item.name.split(".").pop()}
            </td>
            <td className=" border border-border2 border-2 px-2">
              {item.modified}
            </td>
                
    </tr>
  ))}

  </tbody>
  </table>
  </div>
  
  </div>
  </Draggable>

  {currentView && (
    <div className="md:col-span-1 lg:pl-12 text-2xl mt-10 lg:mt-0 flex justify-center items-center">
      {currentView}
    </div>
  )}
 </section>


);
}
export default FileExplorer;
