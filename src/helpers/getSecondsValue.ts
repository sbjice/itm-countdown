export const getSecondsValue = (minutes: number, seconds: number): number|string => {
  return minutes !== 0 && seconds === 0 ? '0' : minutes === 0 && seconds === 0 ? '0' : seconds;
}