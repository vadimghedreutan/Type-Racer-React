import React from 'react'
import useType from './Utils/useType'

const TypeGame = () => {

  const {
    text,
    handleChange,
    isActiv,
    timeRemaining,
    wordCount,
    startGame,
    Reset
  } = useType(10)


  return (
    <>
      <h1>Type Racer</h1>
      <div className="box_text">
        <textarea 
          value={text}
          onChange={handleChange}
          disabled={!isActiv}
         />
        <div className="box_text-result">
          <p>Time remaining: {timeRemaining}s</p>
          <p>Word Count: {wordCount}</p>
        </div>
      </div>
      <div className="box_btn">
        <button onClick={startGame} disabled={isActiv} className="learn-more">Start</button>
        <button onClick={Reset} className="learn-more">Reset</button>
      </div>
    </>
  )
}

export default TypeGame
