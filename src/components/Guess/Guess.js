import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  return (
    <p className='guess'>
      {range(5).map((num) => {
        const result = checkGuess(guess, answer);

        return (
          <Cell
            key={num}
            letter={result?.[num].letter}
            status={result?.[num].status}
          />
        );
      })}
    </p>
  );
}

export default Guess;
