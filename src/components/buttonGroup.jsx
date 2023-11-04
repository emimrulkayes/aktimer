import React from 'react';
import TimerHook from '../hooks/TimerHook';

function ButtonGroup() { 

    const { start, pause, reset, isActive } = TimerHook();

    return (
        
        <section className='timer-actions'>
            <button onClick={start} disabled={isActive}> Start </button>
            <button onClick={pause} disabled={!isActive}> Pause </button>
            <button onClick={reset} disabled={isActive}> Reset </button>
        </section>
    )
}

export default ButtonGroup;