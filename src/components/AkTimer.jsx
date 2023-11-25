import React from 'react';
import useAkTimer from '../hooks/TimerHook';

function AkTimer() { 

    const { timerDays, timerHours, timerMinutes, timerSeconds, startTimer, pauseTimer, resetTimer } = useAkTimer();

    const handleStartClick = () => {
    console.log('Start button clicked');
        startTimer();
    };

    const handlePauseClick = () => {
        console.log('Pause button clicked');
        pauseTimer();
    };

    const handleResetClick = () => {
        console.log('Reset button clicked');
        resetTimer();
    };

    return (
        <section className='timer-container'> 
            <section className='timer'> 
                <div>
                <span className="mdi mdi-calendar-clock timer-icon"></span>
                <h2>AK Timer</h2>
                <p>Timer to a really special date. One you could or would never amagine.</p>
                </div>
                <div className='timer-box'>
                <section>
                    <p>{timerDays}</p>
                    <p><small>Days</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{timerHours}</p>
                    <p><small>Hours</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{timerMinutes}</p>
                    <p><small>Minutes</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{timerSeconds}</p>
                    <p><small>Scounds</small></p>
                </section>
                </div>

            </section>

            <section className='timer-actions'>
                <button type="button" onClick={handleStartClick}> Start </button>
                <button type="button" onClick={handlePauseClick}> Pause </button>
                <button type="button" onClick={handleResetClick}> Reset </button>
            </section>
            
        </section>
    )
}

export default AkTimer;