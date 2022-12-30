import React, {useState} from 'react';
import './App.css'; 
import { Login } from './Login';
// import { Signup } from './Signup';

function App() {
  const [currentForm , setCurrentForm] =useState ('Login');
  const toggleForm = (formName) => {
    setCurrentForm(formName) ;
  }
  // <Signup onFormSwitch={toggleForm}
  return (
    <div className="App">
     {
      currentForm ==='Login' ? <Login onFormSwitch={toggleForm} /> : null

     }
  
   
    </div> 
    
  );
}


export default App;
