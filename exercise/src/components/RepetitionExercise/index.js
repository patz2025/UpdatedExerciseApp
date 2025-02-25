import React, { useState } from 'react';

const RepetitionExercise = ({ name }) => {
    const [count, setCount] = useState(0);
  
    return (
      <div className="exercise-screen">
        <h2 className="exercise-header">{name}</h2>
        <div className="counter-controls">
          <button 
            className="control-button"
            onClick={() => setCount(Math.max(0, count - 1))}
          >
            -
          </button>
          <span className="counter-display">{count}</span>
          <button 
            className="control-button"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button 
          className="control-button reset-button"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    );
  };

export default RepetitionExercise;