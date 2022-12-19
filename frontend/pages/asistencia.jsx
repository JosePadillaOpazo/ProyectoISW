import { Container, Stack, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import {useRouter} from 'next/router'

const asistencia = () => {
    const router = useRouter()
  return (
    <>
    <Container maxW={"container.xl"}>
        <Button colorScheme={"blackAlpha"} color="white" onClick={() => router.push('/')}>Volver</Button>
        <Stack>
        <Heading as="h1" size="2xl" textAlign="center" my={20}>Asistencia</Heading>
        </Stack>
    </Container>
    </>
  )
}

export default asistencia