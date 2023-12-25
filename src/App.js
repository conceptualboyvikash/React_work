// import Accord from './Accord';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './Alert';


function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  let showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      txt:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

 
  let togglemode=()=>{
   // console.log(mode);
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#2e427bba';
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
   <Navbar  title="Text-Magic" about="mobile no" mode={mode} toggleMode={togglemode} />
    <Alert  alert={alert} />
    {/* <Navbar /> */}
    
       {/* <Accord/> */}
       {/* <Accord/> */}
       <div className='container'>
       <Textform mode={mode} showAlert={showAlert} />
       </div>
 
      
    </>
  );
}

export default App;
