import Accord from './Accord';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const[color, setColor]=useState('white');
  let showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      txt:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  let colorset=(col)=>{
    //document.body.style.backgroundColor=col;
    if(mode==='light')
        return;
    setColor(col);
  //  console.log("my color is "+color);
    togglemode("cwala")
  //  console.log("funciton is calling");
    //console.log(col);
  }
 
  let togglemode=(word="Hellow")=>{
   // console.log(mode);
    if(word==="cwala")
    {
    //  console.log("my color is "+color);
      document.body.style.backgroundColor=color;
    }
    else  if(mode==='light'  )
    {
      setMode('dark');
      
     // console.log("my updated color is "+ color);
     setColor('#60a0ab')
      document.body.style.backgroundColor=color;
      if(word!=="cwala")
      {
          showAlert("Dark mode has been enable","success");
          //document.title="Text-magic:Dark Mode ON!";
      }
      // setInterval(() => {
      //   document.title="Install this ";
      // }, 100);
      // setInterval(() => {
      //   document.title="Install facebook ";
      // }, 0);
       
    }
    
    else
    {
      
      setMode('light');
      
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
     // document.title="Text-magic:Light Mode ON!";
      setColor("white");
      
    }
  }
  
 
  return (
    <>
  <Router>
   <Navbar  title="Text-Magic" about="mobile no" mode={mode} toggleMode={togglemode} colorset={colorset}/>
    <Alert  alert={alert} />
    {/* <Navbar /> */}
    
       {/* <Accord/> */}
       {/* <Accord/> */}
      
    
  
          
         <div className="container">
         <Routes>
          <Route path="/React_work/Accord" element={ <Accord color={color} mode={mode}/>}>
           
          </Route>
         
          <Route path="/React_work/" element={<Textform mode={mode} showAlert={showAlert} color={color}/>}>
          
          </Route>
        </Routes>
         
          </div>
         
         
       
 
      </Router>
    </>
  );
}

export default App;
