import React, { useState, MouseEvent, useEffect } from 'react';

const Game: React.FC = () => {
  const [game, setGame] = useState(true);
  const [health, setHealth] = useState(5);
  const [score, setScore] = useState(0);
  const [style, setStyle] = useState({
    position: "absolute",
    top: "150px",
    left: "530px",
  })


  // Because Typescript doesn't have it's own event handler we take the ones react provides
  const handleHealth = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Does not let the click of the button to spread to the clickable parent div.
    event.stopPropagation();
    setScore(prevState => prevState + 100)
    
    randomGeneration();
  }
  
  const handleScore = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault;
    setHealth(prevState => prevState - 1)
    if(health <= 1) {
      setGame(false)
    }
  }

  useEffect(() => {
    setInterval(() => {
      randomGeneration();
    }, 800);

  }, [])
  

  const randomGeneration = () => {
    const x = Math.floor(Math.random() * (960 - 530) + 530);
    const y = Math.floor(Math.random() * (450 - 150) + 150);
    
    setStyle({
      position: "absolute",
      top: `${y}px`,
      left: `${x}px`,
    })
  }

  return (
    <>
      <div>
        {game ? 
        <div>

          <div className="box" onClick={handleScore}>
            <button style={style} name="ButtonClass"  className='randomCircle' onClick={handleHealth}></button>
          </div>
          <div className="scoreContain">
            <h1>Health: {health}</h1>
            <h1>Score: {score}</h1>
          </div>
        </div>
        :
        <div className="gameover">
          GAME OVER
        </div>
      }
      </div>
    </>
  )
}

export default Game;