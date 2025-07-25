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

//note: targetReadingTime is in minutes.
export const CharacterCounter = ({ minWords, maxWords, targetReadingTime }: CharacterCounterProps) => {
  const [text, setText] = useState('');

  //event: React.ChangeEvent<HTMLInputElement>
  const handleTextChange = (stringInput: string) => {
    const maxLength=2000;
    if (stringInput.length >= maxLength) {
      stringInput = stringInput.slice(-maxLength);
      //console.log(stringInput);
    }
    // when this changes, get character count, wordcount, reading time. (Math.floor(words/3))
    // character count = stringInput.length; wordCount = stringInput.split(" ").length;
    // reading time = Math.floor(wordCount/3)
    const wordCountElement = document.getElementById('word-count');
    // note:  wordCountElement outside handleTextChange attempts to detect the element before it is created.  Inside, it always detects as by the time the element exists that triggers this function, so does the element with id 'word-count'.
    // also yes, it is sort of weird to handle it this way but the props are set so I'm not passing state 'text' down to the child element.  Might as well do it this way; it's not like it has to be done through passing info to the child element.
    const wordCount = stringInput.length ? stringInput.trim().split(" ").length : 0;
    const timeCountElement = document.getElementById('time-count');

    if (typeof (minWords) === 'number' && typeof (maxWords) === 'number') {
      if (wordCount >= minWords && wordCount <= maxWords) {
        (wordCountElement as HTMLElement).style.color = "green";
      } else {
        (wordCountElement as HTMLElement).style.color = "red";
      }
    }

    if (typeof (targetReadingTime) === 'number') {
      const timeSeconds = Math.floor(stringInput.split(" ").length / 3)
      const reqTimeSeconds = 60 * targetReadingTime;
      if (timeSeconds >= reqTimeSeconds) {
        (timeCountElement as HTMLElement).style.color = "green";
      } else {
        (timeCountElement as HTMLElement).style.color = "red";
      }
    }
    const textAreaInput = document.getElementById('textarea-input');

    setText(stringInput);
    (textAreaInput as HTMLTextAreaElement).value = stringInput;
  }


  // placeholder 'Start typing your content here...'
  return (
    <>
      <TextInput onTextChange={handleTextChange} placeholder='Start typing your content here' initialValue={text}></TextInput>
      <StatsDisplay stats={{ characterCount: text.length, wordCount: (text.length ? text.trim().split(" ").length : 0), readingTime: Math.floor(text.split(" ").length / 3) }} showReadingTime={true}></StatsDisplay>
      <div>MIN WORDS: {minWords ? minWords : 'Not specified'}, MAX WORDS: {maxWords ? maxWords : 'Not specified'}, TARGET READING TIME (IN MINUTES): {targetReadingTime ? targetReadingTime : 'Not specified'} </div>
    </>
  )
}