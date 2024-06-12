import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onRest},ref) {
    const userLost = (remainingTime/1000) <= 0;
    const timeLeft = (remainingTime/1000).toFixed(2);
    const score = Math.round((1- remainingTime/(targetTime*1000))*100);
  return createPortal(
   <dialog ref={ref} className='result-modal'>
    {userLost && <h2>You Lost!</h2>}
    {!userLost && <h2>Your score = {score}</h2>}
    <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong>.</p>
    <p>You stopped the timer with <strong>{timeLeft} seconds</strong> left. </p>
    <form method='dialogue' onSubmit={onRest}>
        <button>Close</button>
    </form>
   </dialog>,
   document.getElementById('modal')
  );
})

export default ResultModal;