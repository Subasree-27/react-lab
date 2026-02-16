import React, { useState } from 'react'

function App() {

  const [bgColor, setBgColor] = useState('silver')

  return (
    <div>
      <h1>Color Changer</h1>


      <div className='burger' style={{backgroundColor : bgColor}}>
      <div>
        <button onClick={() => setBgColor('red')}> <strong>Red</strong> </button>
        <button onClick={() => setBgColor('blue')}> <strong>Blue</strong> </button>
        <button onClick={() => setBgColor('green')}> <strong>Green</strong></button>
      </div>

      </div>
    </div>
  )
}

export default App
