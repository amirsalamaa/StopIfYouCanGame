import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const timerRef = useRef();
    const dialogRef = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    function handleStart() {
        timerRef.current = setTimeout(() => {
            setTimerExpired(true);
            setModalOpen(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timerRef.current);
        setTimerStarted(false);
    }

    function handleCloseModal() {
        setModalOpen(false);
        setTimerExpired(false);
        setTimerStarted(false);
    }

    return (
        <>
            <ResultModal ref={dialogRef} targetTime={targetTime} result="lost" open={modalOpen} onClose={handleCloseModal} />

            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}
