import type { StatsDisplayProps } from '../../types';
// Why export TextStats when it's contained within StatsDisplayProps?  Eh.  I don't have to import it even if it is exported.
// Example shows color change if words less than min or more than max.  That doesn't happen locally; min and max information isn't passed through props.  So it goes in through parent element.
// That is, I can use characterCount, wordCount, readingTime as minimums, but then no maximums.
// As it is, I'm really just using operations on text.

export const StatsDisplay = ({stats, showReadingTime}: StatsDisplayProps) => {
  return (
    <>
    <div>CHARACTER COUNT: {stats.characterCount}, WORD COUNT: {stats.wordCount}, {showReadingTime ? `READING TIME (IN MINUTES): ${stats.readingTime}` : ''}</div>
    </>
  )
}