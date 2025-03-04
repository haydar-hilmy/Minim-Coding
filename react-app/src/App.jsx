import { useState } from 'react'
import './App.css'
import { TitleText } from './TitleText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TitleText name="Mark Zuck" />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App