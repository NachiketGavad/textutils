import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import StringDivideUsers from './components/Stringdivideusers';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // switching modes from App
  // hook useState
  // var, set method, default
  const [mode,setMode] = useState('light');
  const [togglebtn,settogglebtn] = useState('Enable Dark Mode');
  // alert object
  const [alert,setAlert] = useState(null);
  
  // toggle function
  const toggleMode = ()=>{
    console.log('toggle clicked')
    if(mode==='light'){
      setMode('dark');
      settogglebtn('Enable Light Mode');
      document.body.style.backgroundColor='#212529';
      document.body.style.Color='White';
      showAlert('Dark Mode Enabled','success');
    }
    else{
      setMode('light');
      settogglebtn('Enable Dark Mode');
      document.body.style.backgroundColor='White';
      document.body.style.Color='Black';
      showAlert('Light Mode Enabled','success');
    }
  }

  // alert function
  // 2 props of alert object
  const showAlert = (message,type)=>{
    console.log('alert');
    setAlert({
      msg:message,
      type:type
    })
    // remove alert automatically
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  
  return (
    // passing props to components is important step
    <Router>        
      <Navbar title="Text-Utils react app" aboutText="String Divide Users API" mode={mode} togglebtn={togglebtn} toggleMode={toggleMode} showAlert={showAlert}></Navbar>
      <Alert alert={alert} showAlert={showAlert} mode={mode}/>
      <Routes>
          <Route path='/' element={<Textform key="general"  mode={mode} togglebtn={togglebtn} toggleMode={toggleMode} showAlert={showAlert}/>} />
          <Route path='/StringDivideUsers' element={<StringDivideUsers key="stringdivideapi"  mode={mode} togglebtn={togglebtn} toggleMode={toggleMode} showAlert={showAlert}/>} />
      </Routes>
    </Router>
  );
}

export default App;
