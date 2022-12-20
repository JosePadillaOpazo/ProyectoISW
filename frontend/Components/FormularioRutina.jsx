import React from 'react'
import{Button, Stack, Input, Container, Select} from '@chakra-ui/react'

const FormularioRutina = ({value}) => {

  return (
    <Container maxW='container.lg' marginTop={'40'}>
      <Stack spacing={7}>
        <label>Fecha actual</label>
        <Input variant='filled' placeholder={value} value={value}/>
        <label>Grado</label>
        <Select variant='filled' placeholder='Eligir Grado' />
        <label>Educadora</label>
        <Select variant='filled' placeholder='Elegir Educadora' />
        <label>Actividad</label>
        <Input variant='filled' placeholder='Ingrese Actividad' />
        <label>Evaluación</label>
        <Input variant='filled' placeholder='Evaluación' />
      </Stack>
      <Stack maxW={'full'} alignItems='center'>
      <Button colorScheme='blue' marginTop={'7'} marginBottom='15' maxW={'150'}>Crear</Button>
      </Stack>
    </Container>
  )
}

export default FormularioRutina