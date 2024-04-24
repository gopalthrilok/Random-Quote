import { useState } from 'react'

import './App.css'
import RandomQuote from './components/randomquotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomQuote/>
    </>
  )
}

export default App
