import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import logo from './assets/image.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <h1> Order app </h1>
      <section>The Order component is loaded.</section>
      <div>
        <a href='/profile'>Go to Profile</a>
      </div>
    </div>
    </>
  )
}

export default App
