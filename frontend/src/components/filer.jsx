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
 
<>
    
          <table className="font-terminal text-green table-auto border w-full lg:w-3/4  ">
            <thead>
              <tr className=" bg-black text-xs lg:text-3xl ">
                <TH className="w-2/6">Name</TH>
                <TH className="w-1/6">Size</TH>
                <TH className="w-1/6">Type</TH>
                <TH className="w-1/6">Modified</TH>
                
              </tr>
            </thead>
        <tbody className=" bg-black text-xs lg:text-3xl ">
        {currentFolder !== "root" && (
      <tr className="cursor-pointer hover:bg-gray" onClick={handleBack}>
      <td colSpan={4} className=" px-2 border border-green border-2 text-left h-10">
        {".."} (Back)
      </td>
    </tr>
        )}

      {folders[currentFolder]?.map((item, index) => (
        <tr
                key={index}
                className={`cursor-pointer hover:bg-gray`}
                onClick={() => handleFileOrFolderClick(item)}
                onMouseEnter={handleMouseEnter}
              >
        <td className="py-0 px-2 w-1/6 border border-green border-2 align-middle h-10 lg:h-20">
                  <div className="inline-flex items-center gap-2 ">
                    {item.type === "folder" ? (
                      <div className="text-base ">📁</div>
                    ) : (
                      <BsCircleFill className="text-red text-xs" />
                    )}
                    <span>{item.name}</span>
                  </div>
                </td>
                <td className="py-0 px-2 border border-green border-2  ">
                  {item.size}
                </td>
                <td className="py-0 px-2 border border-green border-2 ">
                  {item.type === "folder" ? "Folder" : item.name.split(".").pop()}
                </td>
                <td className="py-0 px-2  border border-green border-2">
                  {item.modified}
                </td>
                
        </tr>
      ))}

  </tbody>
  </table>
  <div className="lg:pl-4 bg-gray-900 text-2xl w-full lg:w-1/4 mt-10 lg:mt-0">
      {currentView}
    </div>
  </>
 

);
}
export default FileExplorer;


{/* <div className="flex lg:flex-row text-green font-terminal h-screen"> */}
  
  {/* <div className=" w-full h-3/4"> */}
    {/* Main Content */}