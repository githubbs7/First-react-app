import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css'


function App() {
  const [color, setColor] = useState("white")
  return (
      <>
      
          <div className="h-screen w-100" style={{backgroundColor: color}}></div>
          <div className="bg">
              <button style={{background: "red"}} onClick={() =>{
                  setColor("red")
              }}>Red</button>
              <button style={{background: "green"}} onClick={() =>{
                  setColor("green")
              }}>Green</button>
              <button style={{background: "Blue"}} onClick={() =>{
                  setColor("blue")
              }}>Blue</button>
              <button style={{background: "#ff2b9d"}} onClick={() =>{
                  setColor("white")
              }}>Reset</button>
              
          </div>
      </>
  )
}

export default App;
