// import logo from './logo.svg';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import './App.css';
// import About from './component/About';
import React, {useState} from 'react';
import Alert from './component/Alert';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // wheather 
  const [alert, setAlert] =useState(null);

  const showAlert = (massage, type) =>{

    setAlert({
      msg: massage,
      type: type
    })

    setTimeout(() => {
      setAlert('');
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor='gray';
     showAlert("Dark mode has been enabled","success")
     document.title = 'TextUtil- Dark Mode'

    //  setInterval(() => {
    //   document.title = 'TextUtil is amazing'
    //  }, 1000);

    //  setInterval(() => {
    //   document.title = 'Install TextUtil'
    //  }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title = 'TextUtil- Light Mode'
    }
  }
  return (
    <>
  {/* // <Router>   */}
    <Navbar title="Text Utils"  aboutText="About" toggleMode = {toggleMode} mode={mode} />
    {/* <Navbar/> */}
    <Alert alert={alert}/>
        <div className="container my-3">
    {/* <Routes>
          <Route path="/About" element={<About />}>
          </Route> */}
          
          {/* <Route path="/Home" element={<TextForm heading="Enter the text analyze below" showAlert={showAlert} mode={mode}/>}>            
          </Route> */}

          <TextForm heading="Enter the text analyze below" showAlert={showAlert} mode={mode}/>

          {/* <Route path="/" element={<TextForm heading="Enter the text analyze below" showAlert={showAlert} mode={mode}/>}>            
          </Route> */}
    {/* </Routes> */}
        </div>
        {/* <About/> */}

    {/* // </Router> */}
    </>
  );
}

export default App;