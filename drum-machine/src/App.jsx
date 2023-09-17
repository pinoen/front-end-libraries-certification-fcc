import { useState } from "react"
import audioClips from "./assets/clips"
import { useEffect } from "react"

function App() {
  const [currentClip, setCurrentClip] = useState(audioClips[0])

  const playAudio = (url) => {
    const audio = new Audio(url)
    audio.play()
    setCurrentClip(audioClips.find((clip) => clip.url === url))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyPressed = e.key.toUpperCase()
      const clip = audioClips.find((clip) => clip.keyTrigger === keyPressed)
      if (clip) {
        playAudio(clip.url)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div id="drum-machine">
      <p id="display">
        {currentClip.id}
      </p>

      <div id="drum-pad-container">
        {audioClips.map((clip) => (
          <div key={clip.id} className="drum-pad" id={clip.keyTrigger} onClick={() => playAudio(clip.url)}>
            {clip.keyTrigger}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
