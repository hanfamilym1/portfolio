import React, {useState, useEffect, useRef} from 'react';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import ogWords from './ogWords'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
const useStyles = makeStyles({
  startContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Rubik, sans-serif",
    width: '70%',
    margin: '0 auto',
    position: 'relative',
    color: '#e76f51',
    [theme.breakpoints.down('md')]: {
      margin: '30px auto'
    }
  },
  gameContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Rubik, sans-serif",
    width: '50%',
    margin: '20px auto',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      margin: '100px auto'
    }
  },
  startHeader: {
    fontSize: '30px',
    fontFamily: 'inherit',
    color: '#e76f51',
    padding: '20px'
  },
  infoContainer: {
    width: "80%",
    padding: '10px'
  },
  infoHeader: {
    fontSize: '20px',
    paddingBottom: '10px'
  },
  mainBtn: {
      backgroundColor: '#e76f51',
      color: '#fff' 
  },
  timer: {
    position: 'absolute',
    top: '0',
    right: '0',
    fontSize: '25px',
    color: '#e76f51'
  },
  wordHeader: {
    fontSize: '30px',
    fontFamily: 'inherit',
    color: '#e76f51',
    padding: '20px'
  },
  typedInput: {
    color: '#e76f51',
    '&:hover': {
      border: '1px solid #e76f51'
    } 
  },
  countNumber: {
    fontSize: '20px',
    color: "#e76f51",
    padding: '20px'
  }
})

const TypingTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#e76f51',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#e76f51',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e76f51',
      },
      '&:hover fieldset': {
        borderColor: '#e76f51',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#e76f51',
      },
    },
  },
})(TextField);

const Typing = () => {
  const inputRef = useRef();

  const classes = useStyles();
  const [count, setCount] = useState(()=> 0)
  const [usedWords, setUsedWords] = useState([])
  const [word, setWord] = useState('')
  const [typedWord, setTypedWord] = useState('')
  const [finished, setFinished] = useState(false)
  const [initiatedGame, setInitiatedGame] = useState(false)
  const [timer, setTimer] = useState(60)

  const chooseNewWord = ()=> {
    // newWords are words filtered with the usedWords in order to take them out
    let newWords = ogWords.filter(word => !usedWords.includes(word))
    let randomNum = Math.floor(Math.random() * newWords.length)
    // chosen word after this;
    let newWord = newWords[randomNum]
    if(newWords.length === 0){
      setFinished(true)
    }
    setUsedWords(usedWords => [...usedWords, newWord])
    wordsPerMin() 
    return newWord
  }

  const wordsPerMin = () => {
    console.log(usedWords)
    setCount(usedWords.length)
  }

  // play Game needs to have the logic between the content.
  useEffect(()=> {
    if(initiatedGame){
        inputRef.current.focus();
        var countdown = setInterval(()=> {
          setTimer(timer => {
            const updatedTimer = timer-1;
            if(timer === 0 ) {
              setFinished(true)
              return 60
            }
            return updatedTimer
          })
      }, 1000)
      return ()=> clearInterval(countdown)
    }
  }, [initiatedGame])

  const playGame = () => {
    let newWord = chooseNewWord()
    setWord(newWord)
    setInitiatedGame(true)
    setFinished(false)
  }

 

  const handleChange = (event) => {
    if(usedWords.length === 0) {
      setInitiatedGame(true)
    }
    setTypedWord(event.target.value)
    if(typedWord === word){
      let newWord = chooseNewWord()
      setWord(newWord)
      setTypedWord('')
    } 
  }

  const tryAgain = () => {
    setInitiatedGame(false)
    setTimer(60)
    setFinished(false)
    setUsedWords([])
  }



  return (
    <div className="App">
      {!initiatedGame ?
        <div className={classes.startContainer}>
          <h1 className={classes.startHeader}>Typing Test </h1> 
          <div className={classes.infoContainer}>
            <h3 className={classes.infoHeader}>Current Project:</h3>
            <p>In this current iteration, I was able to implement the basic functions of the game.  The words are in a word bank (currently from A - C) that after you get a correct word will randomly pick up the next one.  Additionally, the timer will stop at 60 seconds allowing for you to see how many words per minute you type at the end of the game.  My next iteration, I'm hoping to create sessions and allow the user to create a game and give whoever the code to access that game and go against their friends.</p>
          </div>
          <div className={classes.infoContainer}>
              <h3 className={classes.infoHeader}>How To Play:</h3>
              <p>Type the word in the input and then press space to go to the next word.</p>
          </div>
          <Button onClick={playGame} variant="contained" className={classes.mainBtn}>Start</Button>
        </div>
        :
        [
          finished ? 
            <div className={classes.startContainer}>
            <h1 className={classes.wordHeader}>COMPLETED</h1>
            <h3 className={classes.countNumber}>{count} WPM</h3>
            <Button onClick={tryAgain} variant="contained" className={classes.mainBtn}>Try Again</Button>
            </div>
        :  
          <div className={classes.gameContainer}>        
            <h4 className={classes.timer}>{timer}</h4> 
            <h1 className={classes.wordHeader}>{word}</h1>
            <TypingTextField classname={classes.typedInput} variant="outlined" value={typedWord} inputRef={inputRef} onChange={handleChange}/>
            <h3 className={classes.countNumber}>Words Typed Correctly: {count}</h3>
          </div>
        ]      
      }
    </div>
  );
}

export default Typing
