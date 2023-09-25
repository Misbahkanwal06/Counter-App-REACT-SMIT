import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App(){
  let [count, setCount] = useState(0);
  // add value function
  let addValue = () => {
    count += 1;
    setCount(count);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={() => { setCount(count - 1) }}>RMV Value</button>
    </>
  )
}

export default App
