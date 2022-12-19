import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'
import React from 'react'

const inputgroupStack = ({chil, type, placeholder}) => {
  return (
    <Stack>
        <InputGroup>
            <InputLeftAddon children={chil}/>
            <Input type={type} placeholder={placeholder} />
        </InputGroup>
    </Stack>
  )
}

export default inputgroupStack