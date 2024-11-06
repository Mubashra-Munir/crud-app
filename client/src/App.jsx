import { useState } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Details from './Components/Details';
import './App.css'
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter> 
      <Navbar/>
         <Routes> 
          
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<SignUp/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/edit/:id" element={<Edit/>}></Route>
          <Route exact path="/view/:id" element={<Details/>}></Route>
         
         </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
