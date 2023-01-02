import React, { useEffect, useState } from 'react'
import { Button, Container, Heading, Stack, Table, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {VerDiscapacidad} from '../antmedico/discapacidad'


const discapacidad = () => {
  const [discapacidades, VerDiscapacidades] = useState([{
    _id:'',
    nombre: ''
  }])
  const router = useRouter()

  const body = () => {
    return discapacidades.map((discapacidad=> (
        <Tr key={discapacidad._id}>
          <Td>{discapacidad.nombre}</Td>
          <Td>
          </Td>
        </Tr>
      )
    ))
  }
  useEffect(() => {
    VerDiscapacidad().then(res =>{
      VerDiscapacidades(res.data)
    })
  }, [])



  return (
    <>
    <Button colorScheme={"blackAlpha"} color="white" onClick={() => router.push('/')}>Regresar</Button>
    <Container maxW="container.xl" >
      <Heading as="h1" size="2xl" textAlign="center" my={20}>Discapacidades</Heading>
      <Stack spacing={7}> 
        <Table variant="simple">
          <Thead>
            <Tr>
              <Td>Nombre</Td>
            </Tr>
          </Thead>
          <Tbody>
            {body()}
          </Tbody>
        </Table>

      </Stack>
    </Container>
    </>   
  )
}
export default discapacidad