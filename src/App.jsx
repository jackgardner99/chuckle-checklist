import "./App.css"
import { CreateJoke } from "./components/CreateJoke"
import { ToldUntoldJokes } from "./components/ToldUntoldJokes"

export const App = () => {
  return <>
    <div className="app-container">
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <div>
        <h2>Add Joke</h2>
        <CreateJoke />
      </div>
      <div>
        <ToldUntoldJokes />
      </div>
    </div>
  </>
}
