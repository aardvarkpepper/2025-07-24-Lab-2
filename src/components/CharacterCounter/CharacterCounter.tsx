import { useState } from 'react';
import type { CharacterCounterProps } from '../../types';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import { TextInput } from '../TextInput/TextInput';

/**
 * Create a TextInput component that handles user input and communicates changes to its parent.
 * Create a StatsDisplay component that shows various statistics about the text.
 * State Management:

Track the current text input.
Calculate and update statistics when text changes.
Handle edge cases (empty input, very long text).
User Interface:

Create a responsive layout.
Show visual feedback for statistics.
Implement progress indicators for word count goals.
Component Communication:

Use callbacks to pass data between components.
Ensure proper prop typing.
Handle optional props appropriately.
 * 
 */

// export interface CharacterCounterProps {
//   minWords?: number;
//   maxWords?: number;
//   targetReadingTime?: number; // in minutes
// }

/**
 * 
  TextInput
      <input type='text' onChange={(event) => { onTextChange(event.target.value) }} placeholder={placeholder ? placeholder : ''} value={initialValue ? initialValue : ''} />
  StatsDisplay
      <div>CHARACTER COUNT: {stats.characterCount}, WORD COUNT: {stats.wordCount}, {showReadingTime ? `READING TIME (IN MINUTES): ${stats.readingTime}` : ''}</div>
 */

// note:  assignment example shows textarea, but textarea does not have value.
// Property 'value' does not exist on type 'IntrinsicAttributes & TextInputProps
// Takes in arguments about minwords, maxwords, targetReadingTime, passes to. . . 
export const CharacterCounter = ({ minWords, maxWords, targetReadingTime }: CharacterCounterProps) => {
  const [text, setText] = useState('');

  //event: React.ChangeEvent<HTMLInputElement>
  const handleTextChange = (stringInput: string) => {
    // when this changes, get character count, wordcount, reading time. (Math.floor(words/3))
    // character count = stringInput.length; wordCount = stringInput.split(" ").length;
    // reading time = Math.floor(wordCount/3)
    setText(stringInput);
  }
  // placeholder 'Start typing your content here...'
  return (
    <>
      <TextInput onTextChange={handleTextChange} placeholder='Start typing your content here' initialValue={text}></TextInput>
      <StatsDisplay stats={{characterCount: text.length, wordCount: (text.length ? text.trim().split(" ").length : 0), readingTime: Math.floor(text.split(" ").length / 3)}} showReadingTime={true}></StatsDisplay>
      <div>MIN WORDS: {minWords}, MAX WORDS: {maxWords}, TARGET READING TIME: {targetReadingTime} </div>
    </>
  )
}