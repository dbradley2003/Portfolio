
import React, { createContext, useState } from 'react';
import click from "../sounds/click.mp3"
import useSound from "use-sound"; // for handling the sound 
const FolderContext = createContext();

 export const FolderProvider = ({children}) => {
    
    const [playEffect] = useSound(click, {preload:true, volume: 0.06 });
    const [currentFolder,setCurrentFolder] = useState('root')
    const [folderHistory, setFolderHistory] = useState([])

    const navigateToFolder = (folder ) => {
        setFolderHistory((prevHistory) => [...prevHistory, currentFolder]);
        setCurrentFolder(folder)
   
    }

    const navigateBack = () => {
        playEffect()
        setFolderHistory((prevHistory) => {
          const newHistory = [...prevHistory];
          console.log(newHistory)
          const previousFolder = newHistory.pop();
          setCurrentFolder(previousFolder || 'root');
          return newHistory;
        });
    };

      return (
        <FolderContext.Provider value={{ currentFolder, navigateToFolder, navigateBack }}>
          {children}
        </FolderContext.Provider>
      );
}

export default FolderContext



