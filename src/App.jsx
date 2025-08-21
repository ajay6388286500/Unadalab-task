

import { useState } from 'react';
import './App.css'

import "../src/styles/Box.css"
import Animation from './Animation';
import HomePage from './HomePage';


function App() {
 const [boxCount, setBoxCount] = useState(0);


 

  return (
    <>
        {/* <div className="app">
      <h1>Interactive C-Box Layout</h1>
      <InputForm setBoxCount={setBoxCount} />
      {boxCount > 0 && <BoxGrid boxCount={boxCount} />}
    </div> */}
    {/* <Animation  /> */}
    <HomePage />
    </>
  )
}

export default App
