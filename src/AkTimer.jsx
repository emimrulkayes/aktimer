import React from 'react';
import TimerHook from './TimerHook';

function AkTimer() { 

    const { timerDays, timerHours, timerMinutes, timerSeconds, start, pause, reset, isActive } = TimerHook();

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
                <button onClick={start} disabled={isActive}>
                    Start
                </button>
                <button onClick={pause} disabled={!isActive}>
                    Pause
                </button>
                <button onClick={reset} disabled={isActive}>
                    Reset
                </button>

            </section>

        </section>
    )
}

export default AkTimer;