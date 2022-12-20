import React,{useState} from 'react'
import{Button, Stack, Input, Container} from '@chakra-ui/react'

const FormularioEducadora = () => {
  const [date, setDate]=useState()
  return (
    <Container maxW='container.lg' >
      <Stack spacing={5}>
        <label>Rut</label>
        <Input variant='filled' placeholder='Ingrese su Rut'/>
        <label>Nombre</label>
        <Input variant='filled' placeholder='Ingrese su Nombre' />
        <label>Dirección</label>
        <Input variant='filled' placeholder='Ingrese su Dirección' />
        <label>Teléfono</label>
        <Input variant='filled' placeholder='Ingrese su Teléfono' />
        <label>Correo</label>
        <Input variant='filled' placeholder='Ingrese su Correo' />
        <label>Fecha de Nacimiento</label>
        <Input variant={'filled'} type={'date'} onChange={e=>setDate(e.target.value)}></Input>
      </Stack>
      <Stack maxW={'full'} alignItems='center'>
      <Button colorScheme='blue' marginTop={'7'} marginBottom='15' maxW={'150'}>Crear</Button>
      </Stack>
    </Container>
  )
}

export default FormularioEducadora