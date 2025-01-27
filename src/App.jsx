import { useState } from 'react'
import { Button } from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button primary rounded outline>Click me!!!</Button>
      </div>
      <div>
        <Button secondary outline>fgfdsgds</Button>
      </div>
      <div>
        <Button success>gfdsgdsg</Button>
      </div>
      <div>
        <Button warning>gfdgfds</Button>
      </div>
      <div>
        <Button danger>hydnhf</Button>
      </div>
    </>
  )
}

export default App
