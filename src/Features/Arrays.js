import React, { useState } from "react";
import "./Arrays.css";
export const Arrays = () => {
  const [gridArray, setGridArray] = useState([
    [1, 2],
    [2, 1],
  ]);
  const [isTrue, setIsTrue] = useState(
    new Array(gridArray.length)
      .fill([])
      .map(() => new Array(gridArray[0].length).fill(false))
  );
  const [firstItem, setFirstItem] = useState(null);

  function handleClick(rowIndex, itemIndex) {
    const newIsTrue = [...isTrue];
    newIsTrue[rowIndex][itemIndex] = true; // mostrando o item Clicado
    setIsTrue(newIsTrue);
    const numberClicked = gridArray[rowIndex][itemIndex]; // Numero clicado
    if (firstItem) {
      const FirstChossedNumber =
        gridArray[firstItem.rowIndex][firstItem.itemIndex];
      if (FirstChossedNumber === numberClicked) {
        // fazer algo
      } else {
        setTimeout(() => {
          newIsTrue[rowIndex][itemIndex] = false;
          newIsTrue[firstItem.rowIndex][firstItem.itemIndex] = false;
          setIsTrue([...newIsTrue]);
          console.log(isTrue);
        }, 1000);
      }
      setFirstItem(undefined);
    } else {
      setFirstItem({ rowIndex: rowIndex, itemIndex: itemIndex });
    }
  }

  return (
    <>
      <div className="grid">
        {gridArray.map((row, rowIndex) => (
          <div className="column" key={rowIndex}>
            {row.map((item, itemIndex) => (
              <div
                onClick={() => handleClick(rowIndex, itemIndex)}
                className="item"
                key={itemIndex}
              >
                {isTrue[rowIndex][itemIndex] ? item : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
