import { MAX_SECONDS_FOR_INPUT } from '../constants/constants'; 

export const calculateSeconds = (seconds: number | string): number => {
  let value = Number(seconds);
  
  value = value > MAX_SECONDS_FOR_INPUT ? MAX_SECONDS_FOR_INPUT : value;
  // console.log('after calculating seconds: ',value);
  return value;
}