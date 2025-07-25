import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';
import './App.css'

function App() {


  return (
    <>
      <CharacterCounter minWords={2} maxWords={4} targetReadingTime={1} />
    </>
  )
}

export default App
