import { SECONDS_IN_MINUTE } from '../constants/constants';

export const getMinutes = (time: number): number => {
  return Math.floor(time / SECONDS_IN_MINUTE);
}