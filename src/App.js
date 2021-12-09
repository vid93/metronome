import { useState } from 'react';
import './App.css';

//Components
import Range from './components/Range'
import Button from './components/Button'

function App() {

  const[bpm, setBPM] = useState(40)

  return (
    <div className="App">
      <h1>Metronome</h1>
      <Range
      bpm={bpm}
      setBPM={setBPM}
      />
      <Button
      bpm={bpm}
      />
    </div>
  );
}

export default App;
