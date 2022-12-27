import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

const SelectForm = ({label, name, placeholder, handleChange, content}) => {
  return (
    <FormControl id={name}>
        <FormLabel>{label}</FormLabel>
        <Select name={name} placeholder={placeholder} onChange={handleChange}>
            {content}
        </Select>
    </FormControl>
  )
}

export default SelectForm