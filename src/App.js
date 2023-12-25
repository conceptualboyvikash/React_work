// import Accord from './Accord';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './Alert';


function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const[color, setColor]=useState('#2e427bba');
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
    if(mode=='light')
        return;
    setColor(col);
    togglemode("cwala")
  //  console.log("funciton is calling");
    //console.log(col);
  }
 
  let togglemode=(word="hellow")=>{
   // console.log(mode);
    if(mode==='light' || word==="cwala")
    {
      setMode('dark');
      console.log("hellwo");
      document.body.style.backgroundColor=color;
      if(word!="cwala")
        showAlert("Dark mode has been enable","success");
    }
    else
    {
      
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
     
      
    }
  }
  return (
    <>
   <Navbar  title="Text-Magic" about="mobile no" mode={mode} toggleMode={togglemode} colorset={colorset}/>
    <Alert  alert={alert} />
    {/* <Navbar /> */}
    
       {/* <Accord/> */}
       {/* <Accord/> */}
       <div className='container'>
       <Textform mode={mode} showAlert={showAlert} color={color}/>
       </div>
 
      
    </>
  );
}

export default App;
