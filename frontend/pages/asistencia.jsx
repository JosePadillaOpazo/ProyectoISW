import { Container, Stack, Button, Heading, Table, Thead, Tr, Td, Tbody} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import {getAsistencias, delAsistencia} from '../data/asistencia'
import Swal from 'sweetalert2'

const asistencia = () => {
    const router = useRouter()
    const [asistencias, setAsistencias] = useState([{
      _id:'',
      titulo:'',
      comentario: '',
      fecha: '',
      asistente_d: ''
    }])

    const deleteAsistencia = (as) => {
      Swal.fire({
        title: 'Estas seguro de eliminar la asistencia?',
        text: "Si la borras no es posible recuperarla",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          delAsistencia(as._id).then(res => {
            Swal.fire(
              'Borrado!',
              'Se elimino con exito la asistencia.',
              'success'
            )
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
            <Button colorScheme={"telegram"} mr="2" onClick={() => router.push(`./view/${asistencia._id}`)}>
              Asistencia
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
        <Heading as="h1" size="2xl" textAlign="center" my={20}>Asistencia de la Sala Cuna</Heading>
        <Button colorScheme={"green"} mb={10} onClick={() => router.push('./registroAsistencia') }>Agregar asistencia</Button>
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