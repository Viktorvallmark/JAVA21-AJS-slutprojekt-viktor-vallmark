import React, {useState} from 'react';
import './App.css';
import Shop from './Shop';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Cart from './Cart';
import Home from './Home';
import Register from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName); 
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Home onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
      
    </div>
  );
}

export default App;
