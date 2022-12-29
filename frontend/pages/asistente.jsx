import React, { useEffect, useState } from 'react'
import { Button, Container, Heading, Stack, Table, Tbody, Td, Thead, Tr, useToast } from '@chakra-ui/react'
import {getAsistentes, delAsistente} from '../data/asistente'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'

const asistente = () => {
  const router = useRouter()
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
    Swal.fire({
      title: 'Estas seguro de eliminar la asistente?',
      text: "Si la borras no es posible recuperar la informacion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        delAsistente(as._id).then(res => {
          Swal.fire(
            'Borrado!',
            'Se elimino con exito la asistente.',
            'success'
          )
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
            <Button colorScheme={"yellow"} mr="2" onClick={() => router.push(`./update/${asistente._id}`)}>
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
      <Button colorScheme={"green"} mt="10" mb={10} onClick={() => router.replace('./registroAsistente')}>Agregar asistente</Button>
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