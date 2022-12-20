import React from 'react'
import{Button, Stack, Input, Container} from '@chakra-ui/react'

const FormularioRutina = ({value}) => {

  return (
    <Container maxW='container.lg' marginTop={'40'}>
      <Stack spacing={7}>
        <Input variant='filled' placeholder={value} value={value}/>
        <Input variant='filled' placeholder='Actividad' type={'texr'}/>
        <Input variant='filled' placeholder='Evaluación' type={'text'}/>
      </Stack>
      <Stack maxW={'full'} alignItems='center'>
      <Button colorScheme='blue' marginTop={'7'} marginBottom='15' maxW={'150'}>Crear</Button>
      </Stack>
    </Container>
  )
}

export default FormularioRutina