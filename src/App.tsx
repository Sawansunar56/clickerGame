import React from 'react';
import './App.css'
import Game from './components/Game.js';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Contains the entire logic of the game */}
      <Game /> 
    </div>
  )
}

export default App
