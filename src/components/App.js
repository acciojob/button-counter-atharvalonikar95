
import React from "react";
import './../styles/App.css';

const App = () => {
    const [counter,setCounter=useState(0)
  return (
    <div>
        {/* Do not remove the main div */}
      <p>Button clicked {counter} times</p>
      <button onClick={()=>setCounter(prev=>prev+1)}>Click me</button>
    </div>
  )
}

export default App
