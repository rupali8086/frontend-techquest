import React, {useState} from 'react'
import JsonData from '../src/data.json'

const slides = JsonData.data;
export const Slider = () => {
const [buttonIndex, setCurrentIndex] = useState(0);

  const buttonStates = slides;
    
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
        <h3> {buttonStates[buttonIndex].title}</h3>
        <img src={buttonStates[buttonIndex].url} alt="gg" height="300px"/> 
        <p> {buttonStates[buttonIndex].body}</p>
    </div>
    <div className="cardDisplay">
        <button onClick={handlePreviousButtonClick}> Back </button>
        <button onClick={handleNextButtonClick}> Next </button>
    </div>
    </>
  );
};




