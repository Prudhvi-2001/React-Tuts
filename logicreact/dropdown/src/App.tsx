import React, { useState } from 'react';

const App = () => {
  const [play, setPlay] = useState(["Cricket", "Badminton", "VolleyBall"]);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (itemIndex) => {
    // itemIndex=0
    const updatedCheckedItems = [...checkedItems];
    console.log(checkedItems)
    console.log(updatedCheckedItems)
    if (updatedCheckedItems.includes(itemIndex)) {
      updatedCheckedItems.splice(updatedCheckedItems.indexOf(itemIndex), 1);
    } else {
      updatedCheckedItems.push(itemIndex);
    }

    setCheckedItems(updatedCheckedItems);
 
  };

  const handleClick = (itemIndex) => {
    const updatedPlay = [...play];
    updatedPlay.splice(itemIndex, 1);
    setPlay(updatedPlay);
  };

  return (
    <ul>
      {play.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            onChange={() => handleChange(index)}
            checked={checkedItems.includes(index)}
          />
          {item}
          {checkedItems.includes(index) && (
            <button onClick={() => handleClick(index)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default App;
