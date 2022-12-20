import { Container, Stack, Button, Heading, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import {getAsistencias} from '../data/asistencia'


const asistencia = () => {
    const [asistencias, setAsistencias] = useState([{
      _id:'',
      titulo:'',
      comentario: '',
      fecha: '',
      asistente_d: ''
    }])
    const router = useRouter()

    const contentTable = () => {
      return asistencias.map((asistencia => (
        <Tr key={asistencia._id}>
          <Td>{asistencia.titulo}</Td>
          <Td>{asistencia.comentario}</Td>
          <Td>{asistencia.fecha}</Td>
          <Td>{asistencia.asistente_d.nombre}</Td>
          <Td>
            <Button colorScheme={"yellow"} mr="2">
              Editar
            </Button>
            <Button colorScheme={"red"}>
              Eliminar
            </Button>
          </Td>
        </Tr>
      )
      ))
      
    }

    useEffect(() => {
      getAsistencias().then(res => {
        setAsistencias(res.data.asistencia)
        //console.log(res.data.asistencia)
      })
    }, [])

  return (
    <>
    <Container maxW={"container.xl"}>
        <Button colorScheme={"blackAlpha"} color="white" onClick={() => router.push('/')}>Volver</Button>
        <Heading as="h1" size="2xl" textAlign="center" my={20}>Asistencia</Heading>
        <Button colorScheme={"green"} mt="10" mb={10}>Agregar asistencia</Button>
        <Stack spacing={5}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Td>Titulo</Td>
                <Td>Comentario</Td>
                <Td>Fecha</Td>
                <Td>Asistente</Td>
                <Td>Opciones</Td>
              </Tr>
            </Thead>
            <Tbody>
              {contentTable()}
            </Tbody>
          </Table>
        </Stack>
    </Container>
    </>
  )
}

export default asistencia