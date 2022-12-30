import React, {useState} from 'react';
import './App.css'; 
import { Login } from './Login';
import { Signup } from './Signup';

function App() {
  const [currentForm , setCurrentForm] =useState ('Login');
  const toggleForm = (formName) => {
    setCurrentForm(formName) ;
  }
  
  return (
    <div className="App">
     {
      currentForm ==='Login' ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm}/>

     }
  
   
    </div> 
    
  );
}


export default App;
