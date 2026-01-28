import { useEffect, useState } from "react"
import "./App.css"
import { addJoke, getJokes, updateToldJoke, updateUntoldJoke } from "./services/jokeService"

export const App = () => {
  const [jokes, setJokes] = useState([])
  const [newJoke, setNewJoke] = useState({ text: "", told: false })
  const [toldJokes, setToldJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  
  useEffect(() => {
    getJokes().then(setJokes)
  }, [])
  
  const handleJokeSubmission = (e) => {
      e.preventDefault()
      if (newJoke.text) {
          const createdJoke = {
              text: newJoke.text,
              told: false
          }

          addJoke(createdJoke).then(() => {
            getJokes().then(setJokes)
          })
          setNewJoke({text: "", told: false})
      } else {
          window.alert("Please enter a joke")
      }

  }

  const handleToldJokeUpdate = (joke) => {
    const updateJoke = {
      id: joke.id,
      text: joke.text,
      told: true
    }

    updateToldJoke(updateJoke).then(() => {
      getJokes().then(setJokes)
    })
  }

  const handleUntoldJokeUpdate = (joke) => {
    const updateJoke = {
      id: joke.id,
      text: joke.text,
      told: false
    }

    updateUntoldJoke(updateJoke).then(() => {
      getJokes().then(setJokes)
    })
  }

  useEffect(() => {
        const filteredToldJokes = jokes.filter(joke => joke.told === true)
        setToldJokes(filteredToldJokes)
    }, [jokes])

  useEffect(() => {
        const filteredUntoldJokes = jokes.filter(joke => joke.told === false)
        setUntoldJokes(filteredUntoldJokes)
    }, [jokes])


  return <>
    <div className="app-container">
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <div>
        <h2>Add Joke</h2>
        <div className="joke-add-form">
          <input type="text"
          placeholder="New One Liner"
          className="joke-input"
          onChange={(event) => {
              const copyJoke = {...newJoke}
              copyJoke.text = event.target.value
              setNewJoke(copyJoke)
          }}
          value={newJoke.text}
          />
        <button className="joke-input-submit" onClick={handleJokeSubmission}>Submit Joke</button>
    </div>
      </div>
      <div>
        <div className="joke-lists-container">
          <div className="joke-list-container">
              <h2>Told<span className="told-count">{toldJokes.length}</span></h2>
              {toldJokes.map((joke) => {
                  return <li className="joke-list-item" key={joke.id}>
                      {joke.text}
                      <div>
                        <button className="joke-list-action-toggle" onClick={() => {
                          handleUntoldJokeUpdate(joke)
                        }}><i className="fa-regular fa-face-meh" /></button>
                      </div>
                  </li>
              })}
          </div>
          <div className="joke-list-container">
              <h2>Untold<span className="untold-count">{untoldJokes.length}</span></h2>
              {untoldJokes.map((joke) => {
                  return <li className="joke-list-item" key={joke.id}>
                      {joke.text}
                      <div>
                        <button className="joke-list-action-toggle" onClick={() => {
                          handleToldJokeUpdate(joke)
                        }}><i className="fa-regular fa-face-laugh" /></button>
                      </div>
                  </li>
              })}
          </div>
        </div>
      </div>
    </div>
  </>
}
