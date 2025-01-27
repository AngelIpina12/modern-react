import { useState } from 'react'
import { Button } from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button success primary>Click me!!!</Button>
      </div>
      <div>
        <Button>fgfdsgds</Button>
      </div>
      <div>
        <Button>gfdsgdsg</Button>
      </div>
      <div>
        <Button>gfdgfds</Button>
      </div>
      <div>
        <Button>hydnhf</Button>
      </div>
    </>
  )
}

export default App
