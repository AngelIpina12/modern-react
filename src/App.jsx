import { useState } from 'react'
import { Button } from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button>Click me!!!</Button>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <Button></Button>
      </div>
    </>
  )
}

export default App
