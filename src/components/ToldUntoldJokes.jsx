import { useEffect, useState } from "react"
import { getJokes } from "../services/jokeService"

export const ToldUntoldJokes = () => {
    const [jokes, setJokes] = useState([])
    const [toldJokes, setToldJokes] = useState([])
    const [untoldJokes, setUntoldJokes] = useState([])

    useEffect(() => {
        getJokes().then(setJokes)
    }, [])
    
    useEffect(() => {
        const filteredToldJokes = jokes.filter(joke => joke.told === true)
        setToldJokes(filteredToldJokes)
    }, [jokes])

    useEffect(() => {
        const filteredUntoldJokes = jokes.filter(joke => joke.told === false)
        setUntoldJokes(filteredUntoldJokes)
    }, [jokes])


    return <>
        
    </>
}