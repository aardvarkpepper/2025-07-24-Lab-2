import type { TextInputProps } from '../../types';

// export interface TextInputProps {
//   onTextChange: (text: string) => void;
//   placeholder?: string;
//   initialValue?: string;
// }
export const TextInput = ({onTextChange, placeholder, initialValue}: TextInputProps) => {
  return (
    <>
    <input type='text' onChange={(event) => {onTextChange(event.target.value)}} placeholder={placeholder ? placeholder : ''} value={initialValue ? initialValue : ''}/>
    </>
  )
}

