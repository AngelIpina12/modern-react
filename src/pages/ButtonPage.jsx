import { useState } from 'react'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import { Button } from '../components/Button'

export const ButtonPage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button primary rounded outline><GoBell></GoBell>Click me!!!</Button>
      </div>
      <div>
        <Button secondary outline><GoCloudDownload></GoCloudDownload>fgfdsgds</Button>
      </div>
      <div>
        <Button success><GoDatabase></GoDatabase>gfdsgdsg</Button>
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
