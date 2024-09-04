import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <RandomNumber count = {count} setCount = {setCount}></RandomNumber>
  
  )

  function RandomNumber(props){
    function onClickHandler(){
      props.setCount(props.count + 1)
    }
    return <div>
      <button onClick={onClickHandler}>Counter {props.count}</button>
    </div>
  }
}

export default App
