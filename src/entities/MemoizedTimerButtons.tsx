import { memo } from 'react';
import { Wrapper } from '../components/Wrapper';
import { MyButton } from '../components/MyButton/MyButton';
import { TimerStates } from '../assets/enums/TimerStates';

interface ButtonsProps {
  timerState: TimerStates;
  buttonsHandler: (buttonType: string) => void;
}

export const TimerButtons: React.FC<ButtonsProps> = (props) => {
  console.log('buttons created');

  const startHandler = () => {
    props.buttonsHandler('start')
  }

  const resetHandler = () => {
    props.buttonsHandler('reset')
  }

  return (
    <Wrapper>
      <MyButton
        onClick={startHandler}
        buttonStateSelector={props.timerState}
      />
      <MyButton
        onClick={resetHandler}
        buttonText={'Сброс'}
      />
    </Wrapper>
  )
}

export const MemoizedTimerButtons = memo(TimerButtons);