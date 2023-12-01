import { useEffect, useState, useRef } from 'react';

const useAkTimer = () => {
        
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [isActive, setIsActive] = useState(false);

    const countdownDate = new Date('December 30, 2023 00:00:00').getTime()
    let interval = useRef();


    const startTimer = () => {
        setIsActive(true);

        interval.current = setInterval(() => {

            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
                setIsActive(false);
                console.log('Stop the timer')
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };
    
  
    const pauseTimer = () => {
        clearInterval(interval.current);
        setIsActive(false);
    };
  
    const resetTimer = () => {
        setTimerDays('00');
        setTimerHours('00');
        setTimerMinutes('00');
        setTimerSeconds('00');
        clearInterval(interval.current);
        setIsActive(false);
    };
    
    const handleStartButton = () => {
        console.log('Start button clicked');
        startTimer();
    };

    const handlePauseButton = () => {
        console.log('Pause button clicked');
        pauseTimer();
    };

    const handleResetButton = () => {
        console.log('Reset button clicked');
        resetTimer();
    };

    useEffect(() => {
        if(isActive) {
            startTimer();
        }

        return () => {
            clearInterval(interval.current);
        }
        
    }, [isActive]);

    return {
        timerDays,
        timerHours,
        timerMinutes,
        timerSeconds,
        startTimer,
        resetTimer,
        pauseTimer,
        handleStartButton,
        handlePauseButton,
        handleResetButton
    };
};

export default useAkTimer;