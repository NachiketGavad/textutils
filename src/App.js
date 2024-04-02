import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  // switching modes from App
  // hook useState
  // var, set method, default
  const [mode,setMode] = useState('light');
  const [togglebtn,settogglebtn] = useState('Enable Dark Mode');
  
  // toggle function
  const toggleMode = ()=>{
    console.log('toggle clicked')
    if(mode==='light'){
      setMode('dark');
      settogglebtn('Enable Light Mode');
      document.body.style.backgroundColor='#212529';
      document.body.style.Color='White';
    }
    else{
      setMode('light');
      settogglebtn('Enable Dark Mode');
      document.body.style.backgroundColor='White';
      document.body.style.Color='Black';
    }
  }
  
  return (
    <>
      <Navbar title="My Practice react app" aboutText="about" mode={mode} togglebtn={togglebtn} toggleMode={toggleMode}></Navbar>
      <Textform mode={mode} togglebtn={togglebtn} toggleMode={toggleMode}></Textform>
    </>
  );
}

export default App;
