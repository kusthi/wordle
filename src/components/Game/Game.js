import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import WordleGrid from '../WordleGrid';
import GuessInput from '../GuessInput';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState(() => sample(WORDS).toUpperCase());

  console.log({ answer });

  function updateGuesses(guess) {
    setGuesses([...guesses, guess]);
  }

  function resetGuesses() {
    setAnswer(sample(WORDS).toUpperCase());
    setGuesses([]);
  }

  const numOfGuesses = guesses.length;
  const isWon = guesses.at(-1) === answer;
  const isLost = NUM_OF_GUESSES_ALLOWED === numOfGuesses;
  const status = isWon ? 'won' : isLost ? 'lost' : 'running';

  return (
    <>
      <WordleGrid guesses={guesses} answer={answer} />
      <GuessInput updateGuesses={updateGuesses} />

      {status === 'won' && (
        <WonBanner numOfGuesses={numOfGuesses} handleRestart={resetGuesses} />
      )}
      {status === 'lost' && (
        <LostBanner answer={answer} handleRestart={resetGuesses} />
      )}
    </>
  );
}

export default Game;
