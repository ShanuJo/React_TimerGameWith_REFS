import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

export default function TimerChallange({ title, targetTime }) {
    const timer = useRef();
    const dialogRef = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialogRef.current.showModal();
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    function handleTimer() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemailning => prevTimeRemailning - 10)
        }, 10)
    }
    function handleStop() {
        clearInterval(timer.current);
        dialogRef.current.showModal();
    }

    return (
        <>
            <ResultModal ref={dialogRef} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <button onClick={timerIsActive ? handleStop : handleTimer}>{timerIsActive ? 'Stop' : 'Start'} Challange</button>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Timer is running...' : 'Timer Inactive'}
                </p>
            </section>
        </>
    )
}
