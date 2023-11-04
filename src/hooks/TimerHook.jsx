import { useEffect, useState, useRef } from 'react';

const TimerHook = () => {
        
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [isActive, setIsActive] = useState(false);

    const countdownDate = new Date('November 30, 2023 00:00:00').getTime()
    let interval = useRef();


    const startTimer = () => {

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                console.log('Stop the timer')
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    const start = () => {
        setIsActive(true);
        startTimer();
    };
  
    const pause = () => {
        setIsActive(true);
        // clearInterval(interval.current);
    };
  
    const reset = () => {
        setIsActive(true);
        setTimerDays('00');
        setTimerHours('00');
        setTimerMinutes('00');
        setTimerSeconds('00');
        // clearInterval(interval.current);
    };

    useEffect(() => {
        if ( isActive ) {
            startTimer();
            return () => {
                clearInterval(interval.current);
            }
        }
        
    }, [isActive]);

    return {
        timerDays,
        timerHours,
        timerMinutes,
        timerSeconds,
        start,
        pause,
        reset,
        isActive
    };
}

export default TimerHook;