import type { StatsDisplayProps } from '../../types';
// Why export TextStats when it's contained within StatsDisplayProps?  Eh.  I don't have to import it even if it is exported.

export const StatsDisplay = ({stats, showReadingTime}: StatsDisplayProps) => {
  return (
    <>
    <div>CHARACTER COUNT: {stats.characterCount}, WORD COUNT: {stats.wordCount}, {showReadingTime ? `READING TIME (IN MINUTES): ${stats.readingTime}` : ''}</div>
    </>
  )
}