// accepts fractions of a second too, though fractions aren't passed in the scope of assignment.
export const secondsToHourMinuteSecondString = (numberInput: number) => {
  const hours = Math.floor(numberInput / 3600);
  const minutes = Math.floor(numberInput / 60) % 60;
  const seconds = Math.floor(numberInput % 60);

  return `${hours ? hours : ''}:${minutes ? minutes : 0}:${seconds >= 10 ? seconds : `0${seconds}`}`;
}