import type { TextStats, StatsDisplayProps } from '../../types';
// 'TextStats' is declared but never used.  This is odd too.

export const StatsDisplay = ({stats, showReadingTime}: StatsDisplayProps) => {
  return (
    <>
    <div>CHARACTER COUNT: {stats.characterCount}, WORD COUNT: {stats.wordCount}, {showReadingTime ? `READING TIME (IN MINUTES): ${stats.readingTime}` : ''}</div>
    </>
  )
}