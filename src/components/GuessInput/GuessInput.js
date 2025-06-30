import { useState } from 'react';

function GuessInput({ updateGuesses }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    updateGuesses(guess);
    
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        autoComplete={'off'}
        id='guess-input'
        type='text'
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
