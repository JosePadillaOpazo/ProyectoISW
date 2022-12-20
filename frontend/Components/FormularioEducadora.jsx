import React from 'react'
import{Button, Stack, Input, Container} from '@chakra-ui/react'

const FormularioEducadora = () => {

  return (
    <Container maxW='container.lg' marginTop={'40'}>
      <Stack spacing={7}>
        <Input variant='filled' placeholder='Rut'/>
        <Input variant='filled' placeholder='Nombre' />
        <Input variant='filled' placeholder='Fecha de nacimiento' />
        <Input variant='filled' placeholder='Direccion' />
        <Input variant='filled' placeholder='Telefono' />
        <Input variant='filled' placeholder='Correo' />
      </Stack>
      <Stack maxW={'full'} alignItems='center'>
      <Button colorScheme='blue' marginTop={'7'} marginBottom='15' maxW={'150'}>Crear</Button>
      </Stack>
    </Container>
  )
}

export default FormularioEducadora