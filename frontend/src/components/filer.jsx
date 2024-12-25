import React, { useState, useEffect, useContext } from "react";
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
import "../style/styles.css";
import Draggable from "react-draggable"; // Import Draggable
import { useMediaQuery } from "react-responsive";
import FolderContext from "./FolderContext";
import ViewContext from "@/components/ViewContext";
import  { fileContents }   from "@/constants/TextContent";
import { fileDesc } from "@/constants/TextDesc";
import parse from 'html-react-parser';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/dialog";
import { cn } from "@/utils/cn"; // Utility function, optional
import Button from "./Button";

function FileExplorer() {

const navigate = useNavigate();
const musicComponent = <MusicPlayer /> 
const defaultComponent = <DefaultView onClose={() => setCurrentView(null)} />;

const soundUrl = hover
const clickurl = click

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedFile, setSelectedFile] = useState(null);

const {currentFolder, navigateToFolder, navigateBack} = useContext(FolderContext)
const {currentView, setCurrentView, getCurrentViewComponent} = useContext(ViewContext)
const [viewType, setViewType] = useState("default");


const [playHover] = useSound(hover,{preload:true,volume: 0.055,})
const [playEffect] = useSound(click, {preload:true, volume: 0.06 });

const throttledPlay = throttle(() => {
  playHover();
}, 100); //200ms throttle

const handleMouseEnter = () => {
  throttledPlay();
}

const onClose = () => {
  
setCurrentView(null)
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
    {name: "TeamUpNow.txt", type:"file", size:"3.4KB",modified:"2021-04-27", desc:"A real time collaboration platform for film students"},
    {name: "TradeAnalysis.txt", type:"file", size:"3.4KB",modified:"2024-12-15"},
  ],
  Contact: [
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

if (item.name === "MusicPlayer.exe" && currentView === "musicPlayer"){
setViewType("default");
setCurrentView('default')
}

else if (item.name == "MusicPlayer.exe"){
setCurrentView("musicPlayer")
}
else if(item.type == "folder"){
navigateToFolder(item.name)
console.log(currentFolder)


}
else if (item.type == "file"){
  const fileType = item.name.split(".").pop();
    switch (fileType) {
    case "txt":
    setIsModalOpen(true);
    setSelectedFile(item.name);
    case "pdf":
      setIsModalOpen(true)
      setSelectedFile(item.name)
    case "url":

      
    }
  }
}

return (
  
<section 
className={`
grid 
justify-center
grid-cols-full
md:grid-cols-3 
lg:grid-cols-4 
2xl:grid-cols-5
mb-0

`}>
  <div className="flex flex-col justify-center items-center ">
   {getCurrentViewComponent()}
  </div>
<>
<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
<DialogContent
   className="dialog-content text-base md:text-base  bg-shadowWhite rounded-md shadow-md border border-stone-500 font-windows"
   onOpenAutoFocus={true}

>
    <DialogHeader>
      <DialogTitle className="dialog-title pb-1 text-center text-lg md:text-2xl  text-blue-500 font-windows">{selectedFile}</DialogTitle>
      <DialogDescription className=" dialog-description text-center text-xs md:text-sm leading-6  font-mono">{fileDesc[selectedFile]}</DialogDescription>
      <div className="text-left leading-6 pt-4  ">
      {selectedFile && (
      parse(fileContents[selectedFile]) || "File not found."
      )}
</div>
    </DialogHeader>
  </DialogContent>
</Dialog>
</>
 


{/* <Draggable cancel="tr"> */}

  
  <div 
  className={`flex flex-col md:px-12 mt-8 md:mt-0
    ${currentView ? "md:col-span-2 lg:col-span-3 2xl:col-span-4" : "md:col-span-full  "}
  `}
  >
  

<div className="bg-gray font-inter text-black flex items-center px-2 py-2  shadow-sm rounded-t-md ">   
  <div className="flex gap-2">
    <BsCircleFill className="text-red-500" />
    <BsCircleFill className="text-yellow-500" />
    <BsCircleFill className="text-green-500" />
  </div>
  <span className="ml-4 text-xs md:text-sm">File Explorer - /{currentFolder}</span>
</div>

<div className="flex-1 sm:overflow-hidden md:overflow-hidden rounded-b-md  ">
   

  <table
  className={`table-auto  
    shadow-md bg-white-500 font-inter text-dodgerblue text-left    
    ${
    currentView ? "w-full" : "w-full"
  }`}
>
    <thead>
      <tr className=" text-xs md:text-base lg:text-lg  ">
        <TH className="w-2/6 px-2">Name</TH>
        <TH className="w-1/6 px-2">Size</TH>
        <TH className="w-1/6 px-2">Type</TH>
        <TH className="w-1/6 px-2">Modified</TH>
            
          </tr>
        </thead>
    <tbody className="text-base md:text-lg lg:text-xl ">
    {currentFolder !== "root" && (
  <tr className="cursor-pointer md:hover font-bold  hover:scale" onClick={navigateBack}>
  <td colSpan={4} className=" px-2 border-2 border-neutral-300  text-left h-20 ">
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
    <td className="border-2 border-neutral-300  align-middle h-[90px]  px-2 ">
              <div className="inline-flex items-center  gap-4 ">
                {item.type === "folder" ? (
                  <FaFolder className="text-yellow-500 text-lg md:text-2xl" />
                ) : (

                  <FaFileAlt className="text-blue-500 text-lg md:text-2xl" />
                
                )}
                <span>{item.name}</span>
              </div>
            </td>
            <td className="border-2 border-neutral-300  px-2 ">
              {item.size}
            </td>
            <td className="border-2 border-neutral-300   px-2   ">
              {item.type === "folder" ? "Folder" : item.name.split(".").pop()}
            </td>
            <td className=" border-2 border-neutral-300  px-2">
              {item.modified}
            </td>
                
    </tr>
  ))}

  </tbody>
  </table>
  </div>
  
  </div>
  {/* </Draggable> */}

  {/* {currentView && (
    <div className="ml-0 mr-0 md:ml-6 mt-12 md:mt-0 md:mb-0 
    flex 
    justify-center 
    items-center ">
      {getCurrentViewComponent()}
    </div>
  )} */}
 </section>


);
}
export default FileExplorer;
