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
const defaultComponent = <DefaultView />;

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

// const handleBack = () => {
//   playEffect()
//   setCurrentFolder("root")
//   setCurrentView(defaultComponent);
//   setViewType("default");
// }

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
mb-16 
md:mb-0 
grid 
grid-cols-full
md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5
`}>
<>
<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
<DialogContent
   className="dialogcontent bg-shadowWhite rounded-md shadow-md border border-stone-500 text-xs md:text-base font-windows "
   onOpenAutoFocus={true}

>
    <DialogHeader>
      <DialogTitle className="dialog-title text-blue-500  text-base md:text-xl font-windows">{selectedFile}</DialogTitle>
      <DialogDescription className="dialog-desc font-mono text-xs md:text-sm">{fileDesc[selectedFile]}</DialogDescription>
      {selectedFile && (
      parse(fileContents[selectedFile]) || "File not found."
      )}

    </DialogHeader>
  </DialogContent>
</Dialog>
</>
 


{/* <Draggable cancel="tr"> */}

  
  <div 
  className={`flex flex-col h-full 
    ${currentView ? " md:col-span-2 lg:col-span-3 2xl:col-span-4" : "md:col-span-full px-8 "}
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

<div className="flex-1  sm:overflow-hidden md:overflow-hidden rounded-b-md  ">
   

  <table
  className={`table-auto border 
    shadow-md bg-white-500 font-inter text-dodgerblue text-left    
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
  <tr className="cursor-pointer md:hover hover:bg-red-100  hover:scale" onClick={navigateBack}>
  <td colSpan={4} className=" px-2 border border-stone-300  border-1   text-left h-20 ">
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
    <td className="border border-stone-300 border-1 align-middle h-20 lg:h-20 px-2 ">
              <div className="inline-flex items-center  gap-2 ">
                {item.type === "folder" ? (
                  <FaFolder className="text-yellow-500 text-sm md:text-lg" />
                ) : (

                  <FaFileAlt className="text-blue-500 text-sm md:text-lg" />
                
                )}
                <span>{item.name}</span>
              </div>
            </td>
            <td className="border border-stone-300 border-1 px-2 ">
              {item.size}
            </td>
            <td className="border border-stone-300  border-1 px-2   ">
              {item.type === "folder" ? "Folder" : item.name.split(".").pop()}
            </td>
            <td className=" border border-stone-300 border-1 px-2">
              {item.modified}
            </td>
                
    </tr>
  ))}

  </tbody>
  </table>
  </div>
  
  </div>
  {/* </Draggable> */}

  {currentView && (
    <div className="md:col-span-1 lg:pl-12 text-2xl mt-10 lg:mt-0 flex justify-center items-center">
      {getCurrentViewComponent()}
    </div>
  )}
 </section>


);
}
export default FileExplorer;
