import { Box, BoxProps } from '@mui/material';

export const MyBox: React.FC<BoxProps> = (props) => {
  return (
    <Box
      {...props}
      sx={{
        width: 500,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {props.children}
    </Box>
  )
};