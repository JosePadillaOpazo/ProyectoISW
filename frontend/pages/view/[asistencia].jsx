import { Container, Heading, Stack, Table, Thead, Tr, Td, Tbody, Button } from '@chakra-ui/react'
import React from 'react'
import {findAsistencia, findAsistenciaParvulo} from '../../data/asistencia'

export const getServerSideProps = async (context) => {
    const response = await findAsistencia(context.query)
    const response2 = await findAsistenciaParvulo()
    return {
        props: {
            asistencia: response.data,
            asistenciaParvulo: response2.data
        }
    }
}


const mostrar = ({asistencia, asistenciaParvulo }) => {
    console.log(asistencia)
    //console.log(asistenciaParvulo.asistenciaParvulo[0].asistencia)
    
  
    const contentAsistencia = () => {
      return asistenciaParvulo.asistenciaParvulo.map((asistencia => (
        console.log(asistencia.asistencia._id)
        /*<Tr key={asistencia._id}>
            <Td>{asistencia.asistenciaParvulo.asistencia}</Td>
        </Tr>*/
      )))
    }

  return (
    <Container maxW={"container.xl"}>
      <Heading as={"h1"} textAlign="center" mt={20}>Asistencia de la {asistencia.titulo}</Heading>
      <Heading as="h6" textAlign="center" mb={20} fontSize={17}>
        Asistente a cargo: {asistencia.asistente_d.nombre}
      </Heading>
      <Button colorScheme={"green"} mb="10" >Registrar asistencia</Button>
      <Stack>
        <Table>
          <Thead backgroundColor={"cyan.100"}>
            <Tr>
              <Td>Parvulo</Td>
              <Td>Opciones</Td>
            </Tr>
          </Thead>
          <Tbody>
          {contentAsistencia()}
          </Tbody>
        </Table>
      </Stack>
    </Container>
  )
}

export default mostrar