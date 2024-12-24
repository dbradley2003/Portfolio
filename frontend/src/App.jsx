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
import Navbar from './components/navbar';
function App() {
  
  return (

   
    
        <ViewProvider>
        <FolderProvider>
         
           <Navbar />
           <Layout>
          <FileExplorer />
          </Layout>
            
            </FolderProvider> 
            </ViewProvider>     
    
      
    )
  }



export default App
