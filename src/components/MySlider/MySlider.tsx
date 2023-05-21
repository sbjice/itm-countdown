import { Slider, SliderProps } from '@mui/material';
import { MAX_SLIDER_VALUE } from '../../constants/constants';
import { TimerStates } from '../../assets/enums/TimerStates';

interface MySliderProps extends SliderProps {
  sliderValue?: number;
  onUpdate?: (time: number) => void;
  timerState: TimerStates;
}


export const MySlider: React.FC<MySliderProps> = (props) => {
  const changeHandler = (e: Event, v: number | Array<number>) => {
    if (props.onUpdate) {
      props.onUpdate(v instanceof Array ? v[0] : v);
    }
  }

  return (
    <Slider
      value={props.sliderValue ? props.sliderValue : 0}
      step={15}
      marks
      min={0}
      max={MAX_SLIDER_VALUE}
      onChange={changeHandler}
      disabled={props.timerState === TimerStates.ONGOING}
      {...props}
    />
  );
}