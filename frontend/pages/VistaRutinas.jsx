import React, {useEffect, useState} from 'react'
import { Container, Table, Th, Td, Tr, Heading, Stack, Thead, Tbody} from '@chakra-ui/react';
import axios from 'axios';


const VistaRutinas = () => {
   
    const[rutinas, setRutina] = useState([{
        id: '',
        fecha: '',
        grado: '',
        educadora: '',
        actividad: '',
        evaluacion: ''
    }])

    const BuscarRutina = async () => {
        const response = await axios.get(`${process.env.SERVIDOR}/Rutinas`)
        setRutina(response.data)
        console.log(response)
   }

   const contenido = () =>{
        return rutinas.map(rutina =>{
            return (
                <Tr key={rutina.id}>
                    <Td>{rutina.fecha}</Td>
                    <Td>{rutina.grado.grado}</Td>
                    <Td>{rutina.educadora.nombre}</Td>
                    <Td>{rutina.actividad}</Td>
                    <Td>{rutina.evaluacion}</Td>
                </Tr>
            )
        })
   }

    useEffect(() => {
        BuscarRutina()
    }, [])

    return (
    <>
    <Container maxW={'container.lg'} my="40">
        <Heading as={'h1'} size='2xl' textColor={'grey'} textAlign={'center'} mt='15'>Rutinas</Heading>
        <Stack spacing={'7'} mt='15'>
            <Table variant='striped' colorScheme='cyan'>
                <Thead>
                    <Tr>
                        <Td>Fecha</Td>
                        <Td>Grado</Td>
                        <Td>Educadora</Td>
                        <Td>Activida</Td>
                        <Td>Evaluación</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {contenido()}
                </Tbody>
            </Table>
        </Stack>
    </Container>
    </>
  )
}

export default VistaRutinas