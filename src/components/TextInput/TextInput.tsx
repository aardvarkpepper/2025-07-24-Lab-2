import type { TextInputProps } from '../../types';

export const TextInput = ({ onTextChange, placeholder, initialValue }: TextInputProps) => {
  return (
    <>
      <textarea rows={7} cols={61} onChange={(event) => { onTextChange(event.target.value) }} placeholder={placeholder ? placeholder : ''} value={initialValue ? initialValue : ''}>{initialValue ? initialValue : null}</textarea>
    </>
  )
}

