import { SECONDS_IN_MINUTE } from '../constants/constants';

export const getNewTime = (minutes: number | string, seconds: number | string): number => {
  const sec = Number(seconds);
  const min = Number(minutes) * SECONDS_IN_MINUTE;
  return min + sec;
}