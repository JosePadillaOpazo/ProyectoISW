import React from 'react'
import FormularioRutina from '../Components/FormularioRutina'
import { Container, Heading, Stack } from '@chakra-ui/react'

const CrearRutina = () => {

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const fecha = hoy.toLocaleDateString()

  return (
    <>
    <Container maxW="container.lg" my='40'>
      <Stack spacing={5} my={'15'}>
        <Heading as='h1' size={'2xl'} align='center' textColor={'grey'}>Crear Rutina</Heading>
        <FormularioRutina value={fecha} />
      </Stack>
    </Container>
    </>
  )
}

export default CrearRutina