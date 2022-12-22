import { Container, Stack, Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, Button, Box } from '@chakra-ui/react'
import React from 'react'
import IndexAccessTemp from '../components/IndexAccessTemp'

const index = () => {
  return (
    <>
    <Container maxW={"container.xl"}>
    <IndexAccessTemp alt="Registo de Asistentes" ruta={'./asistente'} imagen='https://blog.nimblr.ai/hubfs/Holly-Desk.png'/>
    <IndexAccessTemp alt="Asistencia" ruta={'./asistencia'} imagen='https://oportunidadenlinea.cl/wp-content/uploads/2021/07/fundacion-oportunidad_logo-asistencia-2021.png' />
    </Container>
    </>
    
    
    
  )
}

export default index