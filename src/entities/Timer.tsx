import React, { useCallback, useRef, useState } from 'react'
import { getMinutes, getSeconds, getTime } from '../helpers';
import { MemoizedInputGroup } from './MemoizedInputGroup';
import { MemoizedTimerButtons } from './MemoizedTimerButtons';
import alarm from '../assets/audio/audio.mp3';
import { MyLinearProgress } from '../components/MyLinearProgress/MyLinearProgress';
import { TimerStates } from '../assets/enums/TimerStates';
const audio = new Audio(alarm);

export const Timer: React.FC = () => {
  // time setpoint
  const [totalTime, setTotalTime] = useState<number>(0);
  // time left - updated every second
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const progress = totalTime !== 0 ? (1 - timeLeft / totalTime) * 100 : 0;

  // const [inputsDisabled, setInputsDisabled] = useState<boolean>(false);

  // ref value for time setpoint
  const totalTimeRef = useRef(0);

  // shows if timer is started
  const timerStartedRef = useRef(false);

  // timer id - used for clearInterval
  const intRef = useRef(-1);
  const [timerStatus, setTimerStatus] = useState<TimerStates>(TimerStates.INITIAL);


  let minutes = getMinutes(timeLeft);
  let seconds = getSeconds(timeLeft);

  const updateTimeSetpoint = useCallback((time: number): void => {
    if (time > 43200) {
      setTotalTime(43200);
      setTimeLeft(43200);
      totalTimeRef.current = 43200;
    } else {
      setTotalTime(time);
      setTimeLeft(time);
      totalTimeRef.current = time;
    }
  }, [])

  const changeTime = () => {
    setTimeLeft(prev => prev - 1);
    totalTimeRef.current = totalTimeRef.current - 1;
  };


  const pauseTimer = () => {
    window.clearInterval(intRef.current);
    intRef.current = -1;
    // setInputsDisabled(false);
  };

  const buttonsHandler = useCallback((buttonType: string) => {
    switch (timerStatus) {
      case TimerStates.INITIAL:
        if (totalTimeRef.current === 0) return;
        if (buttonType === 'reset') return;
        if (intRef.current === -1) {
          // setInputsDisabled(true);
          timerStartedRef.current = true;
          intRef.current = window.setInterval(() => {
            changeTime();
            if (totalTimeRef.current === 0) {
              pauseTimer();
              audio.play();
              timerStartedRef.current = false;
              setTimerStatus(TimerStates.INITIAL);
              return;
            }
          }, 1000);
          setTimerStatus(TimerStates.ONGOING);
        }
        break;
      case TimerStates.ONGOING:
        if (buttonType === 'reset') {
          pauseTimer();
          setTimeLeft(totalTime);
          totalTimeRef.current = totalTime;
          timerStartedRef.current = false;
          setTimerStatus(TimerStates.INITIAL);
        } else {
          pauseTimer();
          setTimerStatus(TimerStates.PAUSED);
        }
        break;
      case TimerStates.PAUSED:
        if (buttonType === 'reset') {
          setTimeLeft(totalTime);
          totalTimeRef.current = totalTime;
          timerStartedRef.current = false;
          setTimerStatus(TimerStates.INITIAL);
        } else {
          if (totalTimeRef.current === 0) return;
          if (intRef.current === -1) {
            // setInputsDisabled(true);
            timerStartedRef.current = true;
            intRef.current = window.setInterval(() => {
              changeTime();
              if (totalTimeRef.current === 0) {
                pauseTimer();
                audio.play();
                timerStartedRef.current = false;
                setTimerStatus(TimerStates.INITIAL);
                return;
              }
            }, 1000);
            setTimerStatus(TimerStates.ONGOING);
          }
        }
        break;
    }
  }, [timerStatus, totalTime]);

  return (
    <div>
      <MemoizedInputGroup
        time={totalTime}
        timerState={timerStatus}
        changeTime={updateTimeSetpoint}
      />
      <div>
        {getTime(minutes, seconds)}
      </div>
      <MyLinearProgress 
        progress={progress}/>
      <MemoizedTimerButtons
        timerState={timerStatus}
        buttonsHandler={buttonsHandler}
      />
    </div>
  )
}