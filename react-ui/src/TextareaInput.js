import React from 'react';
import { TextareaField } from 'evergreen-ui'

const TextareaInput = (props) => {
  const {required, label, description, placeholder, value, onChange} = props
  return (
    <TextareaField
      label={label}
      required={required ? required : null}
      description={description}
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
    />
  )
}

export default TextareaInput;
