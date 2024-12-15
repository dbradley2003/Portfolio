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
function FileExplorer() {

    
    const [currentFolder, setCurrentFolder] = useState("root");
    const [currentView, setCurrentView] = useState(null);
   
    const soundUrl = hover
    const clickurl = click
    // const [play, { stop }] = useSound();

    useEffect(() => {
      // Save current folder and history to localStorage
      localStorage.setItem("currentFolder", currentFolder);
      localStorage.setItem("history", JSON.stringify(history));
    }, [currentFolder, history]);
   
    const [play] = useSound(hover,{
      preload:true,
      volume: 0.2,
    })

    const [playEffect] = useSound(click, { volume: 0.2 });
   
    // const handleMouseDown = () =>{
    //   console.log('hi')
    // }

    const throttledPlay = throttle(() => {
      play();
    }, 200); // Play sound at most once every 200ms
    
    const handleMouseEnter = () => {
      throttledPlay();
    };


   
    const navigate = useNavigate();
    // const [audioSource, setAudioSource] = useState(null);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const folders = {

      root: [
        {name: "About.txt", type:"file" },
        {name: "Experience.pdf", type:"file"},
        {name: "Projects", type: "folder"},
        {name: "Contact", type: "folder"},
        {name: "MusicPlayer.exe", type:"file"},
      ],
      Projects: [
        {name: "TeamUpNow.txt", type:"file"},
        {name: "TradeAnalysis.txt", type:"file"}
      ],
      Contact: [
        {name: "Email.txt", type:"file"},
        {name: "LinkedIn.url", type:"file"},
        {name: "GitHub.url", type:"file"}
      ],
};





const handleFileOrFolderClick = (item) => {
  playEffect()
if (item.name === "MusicPlayer.exe" && currentView != null ){
  setCurrentView(null);
}

else if (item.name == "MusicPlayer.exe"){
  setCurrentView(<MusicPlayer />)
}
else if(item.type == "folder"){
setCurrentFolder(item.name)
setCurrentView(null)
}
else if (item.type == "file"){
  const fileType = item.name.split(".").pop()
  
 switch (fileType) {
  case "txt":
    navigate(`/text/${item.name}`);
    break;
  case "pdf":
    navigate(`/pdf/${item.name}`);
    break;
  
  case "url":
    navigate(`/url/${item.name}`);
    break;
  
 }
 
}
console.log(item.name)

}

const handleBack = () => {
  playEffect()
  setCurrentFolder("root")
}


   

    const playingButton = (file) => {
      if (!file.path) {
        alert("No audio file available for this selection.");
        setIsPlaying(false);
        return;
      }
  
      // Check if the same file is clicked and toggle playback
      if (selectedFile?.name === file.name) {
        if (isPlaying) {
          pause();
          setIsPlaying(false);
        } else {
          play();
          setIsPlaying(true);
        }
      } else {
        // New file clicked, stop the previous sound and play the new one
        if (sound) {
          stop(); // Stop the current audio
        }
        setSelectedFile(file); // Update the selected file
        setAudioSource(file.path); // Update the audio source
        setIsPlaying(true); // Set the state to playing
  
        // Wait for `audioSource` to update before calling play
        setTimeout(() => play(), 0);
      }
    };
  
    return (
      <div className="min-h-screen bg-black text-green font-terminal w-full text-xl ">
      <div className="p-3 w-full h-screen flex flex-col  ">
      

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden ">
            <div className=" bg-black overflow-auto w-full max-h-[550px]">
              <table className="table-auto w-full ">
                <thead>
                  <tr className=" bg-black w-2 text-xl ">
                    <th className="py-0 px-1 border border-green w-3/4 border-2 text-left">Filename</th>
                    <th className="py-0 px-1 border border-green border-2 text-left">Filetype</th>
                  </tr>
                </thead>
            <tbody className="text-lg bg-black">
            {currentFolder !== "root" && (
              <tr className="cursor-pointer hover:bg-gray-700" onClick={handleBack}>
              <td
                colSpan={2}
                className="py-2 px-4 border border-green border-2 text-left"
               
              >
                {".."} (Back)
              </td>
            </tr>
            )}

          {folders[currentFolder]?.map((item, index) => (
            <tr
                    key={index}
                    onMouseEnter={handleMouseEnter}
                   
                    className={`cursor-pointer hover:bg-purple`}
                    onClick={() => handleFileOrFolderClick(item)}
                  >
            <td className="py-2 px-4 border border-green border-2 align-middle">
                      <div className="inline-flex items-center gap-2 ">
                        {item.type === "folder" ? (
                          <span className="text-green">📁</span>
                        ) : (
                          <BsCircleFill className="text-green-500 text-xs" />
                        )}
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 border border-green border-2">
                      {item.type === "folder" ? "Folder" : item.name.split(".").pop()}
                    </td>
            </tr>
          ))}

      </tbody>
      </table>
      </div>

      <div className="w-1/3  ml-4  bg-gray-9000 text-2xl ">
            {currentView || (
              <p className="text-green-400 border border-purple px-2 py-2 text-center border-2 rounded-md ">
                Select a file or folder to view its content...
              </p>
            )}
            </div>
   
     
    
      

  

            </div>
          </div>
        </div>
   
    );
  }
  export default FileExplorer;


       {/* <td className="py-0 px-1 border border-green border-2 align-middle">
          <div className="inline-flex items-center gap-0.5">
          <div style={{ transform: 'scale(0.5)' }}>
  <BsCircleFill />
  {folder}
</div>
            
           
          </div>
        </td> */}
     
      {/* <td className="py-0 px-1 border border-green border-2">
       
        {file.path.endsWith(".mp3") ? ".mp3" : "?"}
      </td> */}

      {/* <td className="py-0 px-1 border border-green border-2">
       
     
      </td> */}
    {/* </tr> */}