

import { useState } from 'react';
import './App.css'

import "../src/styles/Box.css"

import HomePage from './HomePage';


function App() {
 const [boxCount, setBoxCount] = useState(0);


 

  return (
    <>
      
    {/* <Animation  /> */}
    <HomePage />
    </>
  )
}

export default App
