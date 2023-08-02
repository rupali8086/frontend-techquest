import React, {useState} from 'react'
import JsonData from '../src/data.json'

const buttonStates = JsonData.data;
export const Slider = () => {
const [currentIndex, setCurrentIndex] = useState(0);

  
  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % buttonStates.length);
  };

  const handlePreviousButtonClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? buttonStates.length - 1 : prevIndex - 1
    );
  };
    return (
    <>
    <div className='cardDisplay'>
        <h3> {buttonStates[currentIndex].title}</h3>
        <img src={buttonStates[currentIndex].url} alt="gg" height="300px"/> 
        <p> {buttonStates[currentIndex].body}</p>
    </div>
    <div className="cardDisplay">
        <button onClick={handlePreviousButtonClick}> Back </button>
        <button onClick={handleNextButtonClick}> Next </button>
    </div>
    </>
  );
};




