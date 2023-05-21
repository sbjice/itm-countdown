import { SECONDS_IN_MINUTE } from '../constants/constants';

export const getSeconds = (time: number): number => {
  return time % SECONDS_IN_MINUTE;
}