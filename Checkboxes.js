import React, { useState } from 'react';

function Checkboxes() {
  const [checkedBoxes, setCheckedBoxes] = useState([false, false, false]);

  const checkCount = (index) => {
    if (checkedBoxes.filter((isChecked) => isChecked).length >= 2) {
      console.log("No more than 2 can be selected");
      setCheckedBoxes((prevCheckedBoxes) => {
        const updatedState = [...prevCheckedBoxes];
        updatedState[index] = false;
        return updatedState;
      });
    } else {
      setCheckedBoxes((prevCheckedBoxes) => {
        const updatedState = [...prevCheckedBoxes];
        updatedState[index] = !updatedState[index];
        return updatedState;
      });
    }
  };

  return (
    <form>
      <input
        type="checkbox"
        checked={checkedBoxes[0]}
        onChange={() => checkCount(0)}
        id="option1"
        name="option1"
        value="option1"
      />
      <label htmlFor="option1">Option 1</label>

      <input
        type="checkbox"
        checked={checkedBoxes[1]}
        onChange={() => checkCount(1)}
        id="option2"
        name="option2"
        value="option2"
      />
      <label htmlFor="option2">Option 2</label>

      <input
        type="checkbox"
        checked={checkedBoxes[2]}
        onChange={() => checkCount(2)} 
        id="option3"
        name="option3"
        value="option3"
      />
      <label htmlFor="option3">Option 3</label>
    </form>
  );
}

export default Checkboxes;
