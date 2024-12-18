import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home'
import TextViewer from './pages/TextViewer';
import { Layout } from './pages/Layout';
import PDFViewer from './pages/PDFViewer';
import URLViewer from './pages/URLViewer';
import  {FolderProvider}   from './components/FolderContext';


function App() {
  
  return (

    
      <Layout>
        <FolderProvider>
            <Pages /> 
            </FolderProvider>         
      </Layout>

    )
  }

  function Pages(){
    return(
     
     <Router>

      <Routes>
        <Route path="/Portfolio/" element={<Home />} />
        <Route path="/Portfolio/text/:fileName" element={<TextViewer />} />
        <Route path="/Portfolio/pdf/:fileName" element={<PDFViewer />} />
        <Route path="/Portfolio/url/:fileName" element={<URLViewer />} />

      </Routes>
  
     </Router>
     
   
  )
}

export default App
