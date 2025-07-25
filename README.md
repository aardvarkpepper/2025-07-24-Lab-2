## Comment

Assignment required handling edge cases (empty and long inputs) through state management.  Could say calculations of outputs required edge case for empty input.  But there wasn't really an edge case for long inputs.  There was no specified behavior of how to handle long inputs, and long inputs weren't really an issue (character count output, word count output, and reading time output weren't impacted, textarea allows plenty of user control and the user even has control over the size of the textarea to boot).  Could have popped a maxlength in the textarea to prevent lengthy inputs, but that's not state management.  Could have declared a new state to specify maxlength, but handling maxlength with a separate state is odd.  I just left it.

## Resources

https://www.geeksforgeeks.org/reactjs/react-onchange-event/
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/placeholder
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea