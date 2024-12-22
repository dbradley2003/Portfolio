import React, {createContext, useState, useEffect} from 'react'
import DefaultView from "../components/DefaultView";
import MusicPlayer from "./musicplayer";

const ViewContext = createContext()

export const ViewProvider = ({children}) => {

const componentMap = {
default: <DefaultView onClose={() => setCurrentView(null)} />,
musicPlayer: <MusicPlayer />,

};


const [currentView, setCurrentView] = useState(() => {
    const savedView = localStorage.getItem("currentView")
    return savedView ? savedView : 'default' 
    })
useEffect(() => {
    localStorage.setItem('currentView', currentView)
}, [currentView])

const getCurrentViewComponent = () => {
    return componentMap[currentView] || <DefaultView onClose={() => setCurrentView('nothing')} />;
  };


return (
   < ViewContext.Provider value={{currentView, setCurrentView, getCurrentViewComponent}}>
    {children}
   </ViewContext.Provider>
)

}
export default ViewContext
