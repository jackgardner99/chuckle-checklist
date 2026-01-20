export const getJokes = () => {
    return fetch("http://localhost:3000/jokes").then(res => res.json())
}

export const addJoke = (joke) => {
    return fetch("http://localhost:3000/jokes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(joke)
    })
}