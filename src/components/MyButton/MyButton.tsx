import { Button, ButtonProps } from '@mui/material';
import { blue } from '@mui/material/colors';
import { TimerStates } from '../../assets/enums/TimerStates';
import { TextsForStartButton } from '../../assets/enums/TextsForStartButton';

interface MyButtonProps extends ButtonProps {
  buttonText?: string;
  onClick?: () => void;
  buttonStateSelector?: TimerStates;
}

export const MyButton: React.FC<MyButtonProps> = (props) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick();
    }
  }

  const getStartButtonText = () => {
    if (props.buttonStateSelector === TimerStates.INITIAL) return TextsForStartButton.START;
    if (props.buttonStateSelector === TimerStates.ONGOING) return TextsForStartButton.PAUSE;
    return TextsForStartButton.CONTINUE;
  };

  return (
    <Button
      sx={{
        width: 200,
        backgroundColor: blue[400],
      }}
      onClick={clickHandler}
      {...props}
    >{props.buttonText ? props.buttonText : getStartButtonText()}</Button>
  )
}