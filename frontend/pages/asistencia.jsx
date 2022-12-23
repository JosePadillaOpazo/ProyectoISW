import { Container, Stack, Button, Heading, Table, Thead, Tr, Td, Tbody, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogBody, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import {getAsistencias, delAsistencia} from '../data/asistencia'


const asistencia = () => {
    const router = useRouter()
    const toast = useToast()
    const [asistencias, setAsistencias] = useState([{
      _id:'',
      titulo:'',
      comentario: '',
      fecha: '',
      asistente_d: ''
    }])


    const deleteAsistencia = (as) => {
      delAsistencia(as._id).then(res => {
        if(res.status == '200'){
          toast({
          title: 'Asistencia eliminada',
          description: "La asistencia se ha eliminado correctamente.",
          status: 'warning',
          duration: 2000,
          isClosable: true,
        })
      }
      
      })
      
    }

    const contentTable = () => {
      return asistencias.map((asistencia => (
        <Tr key={asistencia._id}>
          <Td>{asistencia.titulo}</Td>
          <Td>{asistencia.comentario}</Td>
          <Td>{asistencia.fecha}</Td>
          <Td>{asistencia.asistente_d.nombre}</Td>
          <Td>
            <Button colorScheme={"telegram"} mr="2">
              Parvulos
            </Button>
            <Button colorScheme={"red"} onClick={() => deleteAsistencia(asistencia)}>
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
      })
    }, [asistencias])

  return (
    <>
    <Container maxW={"container.xl"}>
        <Button colorScheme={"blackAlpha"} color="white" onClick={() => router.push('/')}>Volver</Button>
        <Heading as="h1" size="2xl" textAlign="center" my={20}>Asistencia</Heading>
        <Button colorScheme={"green"} mt="10" mb={10} onClick={() => router.push('./registroAsistencia') }>Agregar asistencia</Button>
        <Stack spacing={5}>
          <Table variant="simple">
            <Thead backgroundColor={"cyan.100"}>
              <Tr>
                <Td>Titulo</Td>
                <Td>Comentario</Td>
                <Td>Fecha</Td>
                <Td>Asistente</Td>
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

export default asistencia