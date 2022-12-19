import { Container, Stack, Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, Button, Box } from '@chakra-ui/react'
import React from 'react'
import {useRouter} from 'next/router'


const index = () => {
  console.log(process.env.SERVIDOR)
  const router = useRouter()
  return (
    <>
    <Container maxW={"container.xl"}>
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    onClick={() => router.push('./asistente')}
    >
    <Image
      borderRadius='full'
      boxSize='150px'
      src='https://blog.nimblr.ai/hubfs/Holly-Desk.png'
      alt='Asistente'
    />

    <Stack>
      <CardBody >
        <Heading size='md'>Registro de las Asistentes</Heading>
      </CardBody>

    </Stack>
  </Card>
  <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    onClick={() => router.push('./asistencia')}
    >
    <Image
      boxSize='150px'
      src='https://oportunidadenlinea.cl/wp-content/uploads/2021/07/fundacion-oportunidad_logo-asistencia-2021.png'
      alt='Asistencia'
    />

    <Stack>
      <CardBody >
        <Heading size='md'>Asistencia</Heading>
      </CardBody>

    </Stack>
  </Card>
    </Container>

    </>
    
    
    
  )
}

export default index