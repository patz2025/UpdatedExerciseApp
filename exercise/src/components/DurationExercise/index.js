import React, { useState, useEffect, useCallback } from 'react';

const DurationExercise = ({ name }) => {
    let [curTime, setCurTime] = useState(0);
    let [running, setRunning] = useState(false);
    let [timer, setTimer] = useState(null);

    useEffect(() => {
        if (running) {
            let newTimer = setInterval(() => {
                setCurTime(prev => prev + 1);
            }, 1000);
            setTimer(newTimer);
            return () => clearInterval(newTimer);
        }
    }, [running]);

    let click = useCallback(() => {
        console.log("Click " + running);
        if (running) {
            console.log("Clearing time");
            clearInterval(timer);
            setRunning(false);
        } else {
            console.log("Starting time");
            setRunning(true);
        }
    }, [running, timer]);

    let reset = useCallback(() => {
        console.log("Resetting timer");
        clearInterval(timer);
        setRunning(false);
        setCurTime(0);
    }, [timer]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="exercise-screen">
            <h2 className="exercise-header">{name}</h2>
            <div className="timer-display">{formatTime(curTime)}</div>
            <div className="controls">
            <button className="control-button reset-button" onClick={reset}>Reset</button>

                <button className="control-button start-button" onClick={click}>{running ? "Stop" : "Start"}</button>
                
            </div>
        </div>
    );
};

export default DurationExercise;
