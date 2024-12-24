import { useState } from 'react'
import {Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home'
import TextViewer from './pages/TextViewer';
import { Layout } from './pages/Layout';
import PDFViewer from './pages/PDFViewer';
import URLViewer from './pages/URLViewer';
import  {FolderProvider}   from './components/FolderContext';
import { ViewProvider } from './components/ViewContext';
import FileExplorer from './components/filer';
import './input.css';

function App() {
  
  return (

   
    
        <ViewProvider>
        <FolderProvider>
        <Layout>   
            <Pages  /> 
            </Layout>
            </FolderProvider> 
            </ViewProvider>     
    
      
    )
  }

  function Pages(){
    return(

      <Routes>
        
        <Route path="/Portfolio/" element={<FileExplorer />} />
        {/* <Route path="/Portfolio/text/:fileName" element={<TextViewer />} />
        <Route path="/Portfolio/pdf/:fileName" element={<PDFViewer />} />
        <Route path="/Portfolio/url/:fileName" element={<URLViewer />} /> */}
      </Routes>
  
 
     
   
  )
}

export default App
