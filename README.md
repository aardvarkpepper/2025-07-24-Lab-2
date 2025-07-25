## Reflection Questions

1.  How did you handle state updates when the text changed?

useState was used in CharacterCounter for 'text'.  'setText' was used in a function that was passed from CharacterCounter to the 'TextInput' child component.  When text changed in the child component 'TextInput', the function was set to invoke; when the function invoked, setText changed state of 'text' in the parent component (CharacterCounter).  When state changes in a component, it and its child elements re-render unless some exception was made (no exception made here).  The child component 'StatsDisplay' then re-rendered with updated data based on the 'text' state.

2.  What considerations did you make when calculating reading time?

Testing values in assignment example indicated reading time = Math.floor(wordcount / 3).  Probably I changed reading time to convert seconds over 60 into minutes, etc.

3.  How did you ensure the UI remained responsive during rapid text input?

I made no specific accommodation for rapid text entry.  DOM operations are expensive, but neither those nor the calculations required use much time.  I saw no delay in processing when copying and pasting a Wikipedia article (2936 words).  I copied and pasted the entire American King James version of the Bible, seeing perhaps a third of second or less of delay (4,509,524 character count, 796,876 word count, 265625 reading time).  That is, UI responsiveness for rapid text input seems not to be an issue for most expected situations.

4.  What challenges did you face when implementing the statistics calculations?

No challenges.

## Comment

Assignment required handling edge cases (empty and long inputs) through state management.  There wasn't really an edge case for long inputs.  There was no specified behavior of how to handle long inputs, and long inputs weren't really an issue (character count output, word count output, and reading time output weren't impacted, textarea allows plenty of user control and the user even has control over the size of the textarea to boot).  Could have popped a maxlength in the textarea to prevent lengthy inputs, but that's not state management.  Could have declared a new state to specify maxlength, but handling maxlength with a separate state is odd.  I just left it.

## Resources

https://www.geeksforgeeks.org/reactjs/react-onchange-event/
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/placeholder
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea
https://react.dev/learn/render-and-commit
https://openbible.com/textfiles/akjv.txt
https://www.geeksforgeeks.org/reactjs/how-to-set-text-color-in-reactjs/
https://www.typescriptlang.org/docs/handbook/dom-manipulation.html