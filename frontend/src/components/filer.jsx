import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { BsCircleFill } from "react-icons/bs";
import useSound from "use-sound"; // for handling the sound
import daft from "../assets/daft.mp3"; 
import Riptide from "../assets/Riptide.mp3"; 
import MusicPlayer from "./musicplayer";
import hover from "../sounds/hoverclick.mp3"
import click from "../sounds/click.mp3"
import throttle from "lodash/throttle";
import TH from "./TH"
import DefaultView from "../components/DefaultView";
import { FaFolder, FaFileAlt } from "react-icons/fa";
import "../style/filer.css";

function FileExplorer() {

const [currentFolder, setCurrentFolder] = useState("root");
const [currentView, setCurrentView] = useState(<DefaultView />);
const soundUrl = hover
const clickurl = click
const [viewType, setViewType] = useState("default");
const navigate = useNavigate();
const [selectedFile, setSelectedFile] = useState(null);

const [playHover] = useSound(hover,{preload:true,volume: 0.2,})

const [playEffect] = useSound(click, { volume: 0.2 });

const throttledPlay = throttle(() => {
  playHover();
}, 100); //200ms throttle

const handleMouseEnter = () => {
  throttledPlay();
};

const handleBack = () => {
  playEffect()
  setCurrentFolder("root")
  setCurrentView(<DefaultView />);
  setViewType("default");
}

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
  setCurrentView(<DefaultView />);
  setViewType("default");
 
}

 else if (item.name == "MusicPlayer.exe"){
  setCurrentView(<MusicPlayer />)
  setViewType("music")
}
else if(item.type == "folder"){
setCurrentFolder(item.name)
setViewType("default");
setCurrentView(<DefaultView />);
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
 
// {/* <div className="flex flex-col w-full h-full "> */}

<section className="grid grid-cols-1 md:grid-cols-3 h-full w-full ">

<div className="md:col-span-2 flex flex-col h-full w-full">
 {/* wraps file explorer and topbar */}
<div className="bg-gray font-inter text-black flex items-center px-2 py-2  shadow-md   ">
  <div className="flex gap-2">
    <BsCircleFill className="text-red" />
    <BsCircleFill className="text-yellow" />
    <BsCircleFill className="text-green" />
  </div>
  <span className="ml-4 text-sm">File Explorer - /{currentFolder}</span>
</div>

    <div className="flex-1 overflow-auto sm:overflow-hidden md:overflow-hidden">
          <table className=" bg-secondary  font-inter text-dodgerblue table-auto border text-left shadow-md w-full   ">
            <thead>
              <tr className=" text-xs lg:text-xl">
                <TH className="w-2/6 px-2">Name</TH>
                <TH className="w-1/6 px-2">Size</TH>
                <TH className="w-1/6 px-2">Type</TH>
                <TH className="w-1/6 px-2">Modified</TH>
                
              </tr>
            </thead>
        <tbody className="text-base md:text-xl ">
        {currentFolder !== "root" && (
      <tr className="cursor-pointer hover:bg-accent2" onClick={handleBack}>
      <td colSpan={4} className=" px-2 border border-border1  border-2   text-left h-10">
        {".."} (Back)
      </td>
    </tr>
        )}

      {folders[currentFolder]?.map((item, index) => (
        <tr
                key={index}
                className={`cursor-pointer hover:scale `}
                onClick={() => handleFileOrFolderClick(item)}
                onMouseEnter={handleMouseEnter}
              >
        <td className="border border-border2 border-2 align-middle h-20 lg:h-20 px-2 ">
                  <div className="inline-flex items-center  gap-2 ">
                    {item.type === "folder" ? (
                      <FaFolder className="text-yellow text-base md:text-lg" />
                    ) : (

                      <FaFileAlt className="text-sky-500 text-base md:text-lg" />
                    
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
  
  <div className=" grid-2 pl-0 mt-5 md:mt-0 md:pl-6 items-center ">
      {currentView}
    </div>

 </section>

);
}
export default FileExplorer;
