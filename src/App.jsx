import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import User from './user';

function App() {

  function handleClick (){
    alert('button clicked');
  }
  const handleClick2 = (num)=>{
    alert(num + 3);
  }

  return (
    <>
      <h1>Vite + React</h1>
    <User></User>


    <Counter></Counter>

      <button onClick={handleClick}>click me</button>
      <button onClick={() => handleClick2(5)}>btn2</button>

      <button onClick={function(){alert('this is anonimus function')}}>btn 3</button>
    </>
  )
}

export default App
