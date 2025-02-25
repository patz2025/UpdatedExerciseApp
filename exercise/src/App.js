import React, { useState } from 'react';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import StepExercise from './components/StepExercise';
import './App.css';

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseType, setExerciseType] = useState(null);

  const handleReturn = () => {
    setSelectedExercise(null);
    setExerciseType(null);
  };

  // first screen
  if (!selectedExercise) {
    return (
      <div className="app-container">
        <div className="exercise-selection">
          <button className="exercise-button" onClick={() => setSelectedExercise('Plank')}>Plank</button>
          <button className="exercise-button" onClick={() => setSelectedExercise('Running')}>Running</button>
          <button className="exercise-button" onClick={() => setSelectedExercise('Push-Up')}>Push-Up</button>
        </div>
      </div>
    );
  }

  // second screen
  if (!exerciseType) {
    return (
      <div className="app-container">
        <div className="type-selection">
          <button className="return-button" onClick={handleReturn}>Return</button>
          <h2 className="exercise-header">{selectedExercise}</h2>
          <button className="exercise-button" onClick={() => setExerciseType('duration')}>Duration</button>
          <button className="exercise-button" onClick={() => setExerciseType('repetition')}>Repetition</button>
          <button className="exercise-button" onClick={() => setExerciseType('steps')}>Steps</button>
        </div>
      </div>
    );
  }

  // third screen
  return (
    <div className="app-container">
      <button className="return-button" onClick={handleReturn}>Return</button>
      {exerciseType === 'duration' ? (
        <DurationExercise name={selectedExercise} />
      ) : exerciseType === 'repetition' ? (
        <RepetitionExercise name={selectedExercise} />
      ) : (
        <StepExercise name={selectedExercise} />
      )}
    </div>
  );
};

export default App;