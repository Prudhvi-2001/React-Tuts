import React, { useState, useMemo } from 'react';

const NumberList: React.FC = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Memoize the sum of numbers
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  return (
    <div>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Sum: {sum}</p>
      <button onClick={() => setNumbers([...numbers, Math.random() * 10])}>
        Add Random Number
      </button>
    </div>
  );
};

export default NumberList;
