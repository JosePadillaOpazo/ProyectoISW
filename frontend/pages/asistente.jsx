import React, { useEffect, useState } from 'react'
import { Button, Container, Heading, Stack, Table, Tbody, Td, Thead, Tr, useToast } from '@chakra-ui/react'
import {getAsistentes, delAsistente} from '../data/asistente'
import {useRouter} from 'next/router'

const asistente = () => {
  const router = useRouter()
  const toast = useToast()
  const [asistentes, setAsistentes] = useState([{
    _id:'',
    rut:'',
    nombre: '',
    fecha_de_nac: '',
    direccion: '',
    telefono: '',
    correo: ''

  }])

  const deleteAsistente = (as) => {
    delAsistente(as._id).then(res => {
      if(res.status == '200'){
        toast({
        title: 'Asistente eliminado',
        description: "El Asistente se ha eliminado correctamente.",
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    }
    })
  }

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
            <Button colorScheme={"yellow"} mr="2" onClick={() => router.push(`./asistentes/${asistente._id}`)}>
              Editar
            </Button>
            <Button colorScheme={"red"} onClick={() => deleteAsistente(asistente)} >
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
  }, [asistentes])

  return (
    <>
    
    <Container maxW="container.xl" >
      <Heading as="h1" size="2xl" textAlign="center" my={20}>Asistentes</Heading>
      <Button colorScheme={"green"} mt="10" mb={10} onClick={() => router.push('./registroAsistente')}>Agregar asistente</Button>
      <Stack spacing={7}> 
        <Table variant="simple">
          <Thead backgroundColor={"cyan.100"}>
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
          <Tbody backgroundColor={"yellow.100"}>
            {contentTable()}
          </Tbody>
        </Table>

      </Stack>
    </Container>

    </>
    
    
    
  )
}

export default asistente