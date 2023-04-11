import { useState } from 'react'
import './App.css'
import group from '../public/amongUsGroup.png'
import spaceship from '../public/spaceship.png'

function App() {

  return (
    <div className="App">
      <div className='mainPage'>
        <h2 className='title'>Welcome to the Crewmate Creator!</h2>
        <img id='group' src={group} height={300} />
        <p id='description'>Here is where you can create your very own set of crewmates before sending them off into space!</p>
        <img id='spaceship' src={spaceship} width={385} />
      </div>
    </div>
  )
}

export default App
