import { StandardTextFieldProps, TextField } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { TimerStates } from '../../assets/enums/TimerStates';

interface MyTextFieldProps extends StandardTextFieldProps {
  onUpdate?: (value: string) => void;
  timerState: TimerStates;
}

export const MyTextField: React.FC<MyTextFieldProps> = (props) => {

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.value = String(Number(e.target.value));
    if (props.onUpdate) {
      props.onUpdate(e.target.value);
    }
  }

  return (
    <TextField
      type="number"
      sx={{
        input: {
          color: blueGrey[50],
        },
        width: '48%',
      }}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      onChange={changeHandler}
      disabled={props.timerState === TimerStates.ONGOING}
      >
    </TextField>
  )
}