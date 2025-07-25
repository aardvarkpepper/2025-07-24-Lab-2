import type { TextInputProps } from '../../types';

// Previously, I used 'value={ini . . .} inside textarea, and put {initialValue} as a child (that is, <textarea>{initialValue}</textarea).  Since initialValue is the state 'text', and 'setText' activated onTextChange, that worked.  But really, initial value should just be initial value, and using a child to populate gives an error message.
//What's weird now is, TextInputProps accepts an initialValue that comes from nowhere.  Nothing passes an initialValue to the parent to pass on to the child in turn, and there's no way to specify an initialValue in the parent except hard-coding it as the initial value of text through useState('whatever').  I could put an input component in the parent to accept an initial value, but then you type the initial value in yourself, which is kind of weird.  No problem to put in components and/or logic to support initialValue, but that's outside scope of assignment.
export const TextInput = ({ onTextChange, placeholder, initialValue }: TextInputProps) => {
  return (
    <>
      <textarea id="textarea-input"rows={7} cols={61} onChange={(event) => { onTextChange(event.target.value) }} placeholder={placeholder ? placeholder : ''} defaultValue={initialValue ? initialValue : ''}></textarea>
    </>
  )
}

