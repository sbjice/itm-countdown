import { MyTextField } from '../components/MyTextField/MyTextField';
import { MySlider } from '../components/MySlider/MySlider';
import { MyBox } from '../components/MyBox/MyBox';
import { memo, useMemo } from 'react';
import { calculateSeconds, getMinutes, getNewTime, getSeconds } from '../helpers';
import { MAX_SLIDER_VALUE } from '../constants/constants';
import { getSecondsValue } from '../helpers/getSecondsValue';
import { getMinutesValue } from '../helpers/getMinutesValue';
import { TimerStates } from '../assets/enums/TimerStates';

interface InputGroupProps {
  time: number;
  timerState: TimerStates;
  changeTime: (time: number) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ time, timerState, changeTime }) => {
  const minutes = getMinutes(time);
  const seconds = getSeconds(time);

  const minutesChangeHandler = (value: string) => {
    changeTime(getNewTime(value, seconds));
  };

  const secondsChangeHandler = (value: string) => {
    changeTime(getNewTime(minutes, calculateSeconds(value)));
  };

  const sliderValue = useMemo(() => {
    return time > MAX_SLIDER_VALUE 
      ? MAX_SLIDER_VALUE
      : time;
  }, [time]);

  return (
    <div>
      <MyBox>
        <MyTextField
          label="Минуты"
          value={getMinutesValue(minutes)}
          timerState={timerState}
          onUpdate={minutesChangeHandler}
        />
        <MyTextField
          label="Секунды"
          value={getSecondsValue(minutes,seconds)}
          timerState={timerState}
          onUpdate={secondsChangeHandler}
        />
      </MyBox>
      <MySlider
        value={sliderValue}
        onUpdate={changeTime}
        timerState={timerState}
      />
      
    </div>
  );
}

export const MemoizedInputGroup = memo(InputGroup);