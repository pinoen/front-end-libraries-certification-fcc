import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!
## This is a subheading...
#### And here's some other cool stuff:

Here is some code, a function that return a string, between backticks.
\`\`\`
function someFunc() {
  return 'hello'; // return a string
}
\`\`\`

You can also make text **bold**...!
Or _italic_.
Or even both **_both!_**

There's also [links](https://www.markdownguide.org/cheat-sheet/) like this one where you can find a cheat sheet for info using Markdown languages

> Blockquotes too.
> Horizontal rules are also supported.

---

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.


---

- And there are numbered lists too.
  1. First item
  2. Second item
  3. Third item
  4. Fourth item

---

And of course, images can be inserted:
![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
`

function App() {
  const [editedText, setEditedText] = useState(defaultMarkdown)

  return (
    <>
      <h1 id='title'>Markdown Previewer</h1>

      <div id="container">
        <div id='editor-container'>
          <span><strong>EDITOR</strong> - Feel free to delete the example below and start writing your own.</span>

          <textarea name='editor' id="editor" value={editedText}
            spellCheck={false}
            onChange={e => setEditedText(e.target.value)}>
          </textarea>
        </div>

        <div id="preview-container">
          <span><strong>PREVIEWER</strong></span>

          <ReactMarkdown>
            {editedText}
          </ReactMarkdown>
        </div>
      </div>
      <footer>
        <p>Created by <a href="https://github.com/pinoen">Emilio Nicolas Pino</a></p>
      </footer>
    </>
  )
}

export default App
