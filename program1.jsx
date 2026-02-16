import React, { useState } from 'react'

function Counter() {
    const [count,setcount]=useState(0)
    const incre=()=>{
        setcount(count+1)
    }
    const decre=()=>{
        setcount(count-1)
    }
    const reset=()=>{
        setcount(0)
    }
  return (
    <div>
      <h1>Counter-App</h1>
      <p>{count}</p>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter
