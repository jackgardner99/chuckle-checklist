import { useEffect, useState } from "react"
import { addJoke, getJokes } from "../services/jokeService"

export const CreateJoke = () => {
    const [jokes, setJokes] = useState([])
    const [newJoke, setNewJoke] = useState({ text: "", told: false })

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

            addJoke(createdJoke)
            setNewJoke({text: "", told: false})
        } else {
            window.alert("Please enter a joke")
        }

    }
    
    return <div className="joke-add-form">
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
}