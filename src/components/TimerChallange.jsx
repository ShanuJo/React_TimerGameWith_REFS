import React, { useRef, useState } from 'react'

export default function TimerChallange({ title, targetTime }) {
    const timer = useRef();
    const [isActive, setIsActive] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    function handleTimer() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
        setIsActive(true);
    }
    function handleStop() {
        clearTimeout(timer.current);
        setIsActive(false);
    }

    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && 'You lost'}
            <p className='challenge-time'>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <button onClick={isActive ? handleStop : handleTimer}>{isActive ? 'Stop' : 'Start'} Challange</button>
            <p className={isActive ? 'active' : undefined}>
                {isActive ? 'Timer is running...' : 'Timer Inactive'}
            </p>
        </section>
    )
}
