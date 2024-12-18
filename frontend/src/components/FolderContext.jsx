
import React, { createContext, useState } from 'react';

const FolderContext = createContext();

 export const FolderProvider = ({children}) => {
    

    const [currentFolder,setCurrentFolder] = useState('root')
    const [folderHistory, setFolderHistory] = useState([])

    const navigateToFolder = (folder ) => {
        setFolderHistory((prevHistory) => [...prevHistory, currentFolder]);
        setCurrentFolder(folder)
        console.log(currentFolder)
    }

    const navigateBack = () => {
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



