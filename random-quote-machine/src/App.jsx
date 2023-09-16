import { useEffect, useState } from "react"

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [newQuote, setNewQuote] = useState(false)

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        setQuote(data.content)
        setAuthor(data.author)
      })
  }, [newQuote])

  return (
    <div className="App">
      <h1>Random Quote Machine</h1>
      <div id="quote-box">
        <div className="card-body">
          <div id="text">
            <blockquote className="blockquote mb-10">
              <h2>{quote}</h2>
            </blockquote>
          </div>

          <figcaption className="blockquote-footer" id="author">
            <cite>{author}</cite>
          </figcaption>

        </div>

        <div id="buttons">
          <button type="button" className="btn btn-success" onClick={() => setNewQuote(curr => !curr)} id="new-quote">New quote</button>

          <a href="https://twitter.com/intent/tweet" id="tweet-quote">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
            </svg> Tweet quote</a>
        </div>
      </div>

      <footer>
        <p>Created by <a href="https://github.com/pinoen">Emilio Nicolas Pino</a></p>
      </footer>
    </div>
  )
}

export default App
