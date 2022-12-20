import React from 'react'
import { Container, Heading, Stack } from '@chakra-ui/react'
import FormularioEducadora from '../Components/FormularioEducadora'

const CrearEducadora = () => {

  return (
    <>
    <Container maxW="container.lg" >
      <Stack spacing={5} my={'15'}>
        <Heading as='h1' size={'2xl'} align='center' textColor={'grey'}>Crear Educadora</Heading>
        <FormularioEducadora />
      </Stack>
    </Container>
    </>
  )
}

export default CrearEducadora