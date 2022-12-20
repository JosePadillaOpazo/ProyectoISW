import React, { useEffect, useState } from 'react'
import { Button, Container, Heading, Stack, Table, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import {getAsistentes} from '../data/asistente'
import {useRouter} from 'next/router'

const asistente = () => {
  const [asistentes, setAsistentes] = useState([{
    _id:'',
    rut:'',
    nombre: '',
    fecha_de_nac: '',
    direccion: '',
    telefono: '',
    correo: ''

  }])
  const router = useRouter()

  const contentTable = () => {
    return asistentes.map((asistente => (
        <Tr key={asistente._id}>
          <Td>{asistente.rut}</Td>
          <Td>{asistente.nombre}</Td>
          <Td>{asistente.fecha_de_nac}</Td>
          <Td>{asistente.direccion}</Td>
          <Td>{asistente.telefono}</Td>
          <Td>{asistente.correo}</Td>
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
    getAsistentes().then(res =>{
      setAsistentes(res.data)
    })
  }, [])

  return (
    <>
    
    <Container maxW="container.xl" >
      <Button colorScheme={"blackAlpha"} color="white" onClick={() => router.push('/')}>Volver</Button>
      <Heading as="h1" size="2xl" textAlign="center" my={20}>Asistentes</Heading>
      <Button colorScheme={"green"} mt="10" mb={10} onClick={() => router.push('./registroAsistente')}>Agregar asistente</Button>
      <Stack spacing={7}> 
        <Table variant="simple">
          <Thead>
            <Tr>
              <Td>RUT</Td>
              <Td>Nombre</Td>
              <Td>Fecha de Nacimiento</Td>
              <Td>Direccion</Td>
              <Td>Telefono</Td>
              <Td>Correo Electronico</Td>
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

export default asistente