import './App.css';
import React, {useState} from 'react'
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';



const App=(props)=>{
  const [progress, setProgress]=useState(0)
    const pageSize=5;
    const apiKey=process.env.react_app_news_api
    return(

      <div>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color='red' height={2}
        progress={progress}
        
      />
      <Routes>
        <Route exact path="/" element={<News apikey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' language="en"/>}/>
        <Route exact path="/sports" element={<News apikey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category='sports' language="en"/>}/>
        <Route exact path="/health" element={<News apikey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category='health' language="en"/>}/>
        <Route exact path="/business" element={<News apikey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category='business' language="en"/>}/>
        <Route exact path="/technology" element={<News apikey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category='technology' language="en"/>}/>
        <Route exact path="/entertainment" element={<News apikey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category='entertainment' language="en"/>}/>
        
      </Routes>
      </BrowserRouter>
      </div>
      

    )
  
}
export default App;