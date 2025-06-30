import Guess from '../Guess';

import { range } from '../../utils';

function WordleGrid({ guesses, answer}) {
  return (
    <div className='guess-results'>
      {range(6).map((num) => (
        <Guess key={num} guess={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default WordleGrid;
