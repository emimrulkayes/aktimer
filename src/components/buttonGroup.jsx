import React from 'react';
import TimerHook from '../hooks/TimerHook';

function ButtonGroup() { 

    const { start, pause, reset, isActive } = TimerHook();

    return (
        
        <section className='timer-actions'>
            <button onClick={start}> Start </button>
            <button onClick={pause}> Pause </button>
            <button onClick={reset}> Reset </button>
        </section>
    )
}

export default ButtonGroup;