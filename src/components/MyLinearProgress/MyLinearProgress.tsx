import { LinearProgress, LinearProgressProps } from '@mui/material';
interface MyLinearProgressProps extends LinearProgressProps {
  progress: number;
}

export const MyLinearProgress: React.FC<MyLinearProgressProps> = (props) => {
  return (
    <LinearProgress variant="determinate" value={props.progress}
    sx={{
      marginTop: '20px',
      marginBottom: '20px',
    }} 
    {...props}/>
  )
}