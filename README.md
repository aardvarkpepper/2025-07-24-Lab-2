## Reflection Questions

1.  How did you handle state updates when the text changed?

useState was used in CharacterCounter for 'text'.  'setText' was used in a function that was passed from CharacterCounter to the 'TextInput' child component.  When text changed in the child component 'TextInput', the function was set to invoke; when the function invoked, setText changed state of 'text' in the parent component (CharacterCounter).  When state changes in a component, it and its child elements re-render unless some exception was made (no exception made here).  The child component 'StatsDisplay' then re-rendered with updated data based on the 'text' state.

2.  What considerations did you make when calculating reading time?

Testing values in assignment example indicated reading time in seconds = Math.floor(wordcount / 3).  Following assignment example to show hour/minute/seconds, I passed time in seconds despite assignment comment stating property time passed is in minutes.  No sense in converting twice.

3.  How did you ensure the UI remained responsive during rapid text input?

I made no specific accommodation for rapid text entry.  DOM operations are expensive, but not so expensive that rapid text entry is an issue, even accounting for calculation time.  I saw no delay in processing when copying and pasting a Wikipedia article (2936 words).  I copied and pasted the entire American King James version of the Bible, seeing perhaps a third of second or less of delay (4,509,524 character count, 796,876 word count, 265625 reading time).  UI responsiveness for rapid text input seems not to be an issue for most expected situations.

4.  What challenges did you face when implementing the statistics calculations?

No challenges.

## Comment

Handling long inputs through state management is, I think, not intuitive, and might as well just set maxlength.  At any rate, it is done.  In CharacterCounter, handleTextChange, maxLength = 2000.  Exceeding that length removes characters from the beginning of the input so new characters can be accommodated.

Changing maxLength or removing it and the conditional using maxLength removes the character limit.

## Resources

https://www.geeksforgeeks.org/reactjs/react-onchange-event/
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/placeholder
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea
https://react.dev/learn/render-and-commit
https://openbible.com/textfiles/akjv.txt
https://www.geeksforgeeks.org/reactjs/how-to-set-text-color-in-reactjs/
https://www.typescriptlang.org/docs/handbook/dom-manipulation.html
https://react.dev/reference/react-dom/components/textarea
https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement