import { padTime } from './padMinutes';

export const getTime = (minutes: number, seconds: number): string => {
  return `${padTime(minutes)} : ${padTime(seconds)}`;
}