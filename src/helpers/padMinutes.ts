export const padTime = (minutes: number): string => {
  return String(minutes).padStart(2, '0');
}