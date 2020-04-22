import {useState, useEffect} from 'react'


const useType = (STARTING_TIME = 10) => {

  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isActiv, setIsActiv] = useState(false)

  function startGame() {
    setIsActiv(true);
    setTimeRemaining(STARTING_TIME);
    setWordCount(0);
    setText('');
  }

  function endGame() {
    setIsActiv(false)
    setWordCount(calculateWords(text))

  }

  function Reset() {
    setIsActiv(false);
    setTimeRemaining(STARTING_TIME);
    setWordCount(0);
    setText('');
  }

  function handleChange(e) {
    const {value} = e.target;
    setText(value)
  }

  function calculateWords(str) {
    const wordsArr = str.trim().split(' ');
    // console.log(wordsArr.length)
    return wordsArr.filter(word => word !== '').length
  }

  useEffect(() => {
    let timer
    if(isActiv && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(seconds => seconds - 1);
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
    return () => clearTimeout(timer);
  }, [isActiv, timeRemaining])
  
  return {
    text,
    handleChange,
    isActiv,
    timeRemaining,
    wordCount,
    startGame,
    Reset
  }
}

export default useType