import React, { useState } from 'react';

const StepExercise = ({ name }) => {
  const [steps, setSteps] = useState(0);
  
  return (
    <div className="exercise-screen">
      <h2 className="exercise-header">{name}</h2>
      <div className="counter-display">{steps} steps</div>
      <div className="counter-controls">
        <button 
          className="control-button"
          onClick={() => setSteps(steps + 100)}
        >
          +100
        </button>
        <button 
          className="control-button"
          onClick={() => setSteps(steps + 1000)}
        >
          +1000
        </button>
      </div>
      <button
        className="control-button reset-button"
        onClick={() => setSteps(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default StepExercise;