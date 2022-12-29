import React, {useEffect, useState} from 'react'
import { Container, Table, Th, Td, Tr, Heading, Stack, Thead, Tbody, Button} from '@chakra-ui/react';
import {BuscarRutina} from "../data/Rutina"
import { useRouter } from 'next/router';

const VistaRutinas = () => {
   
    const[rutinas, setRutina] = useState([{
        id: '',
        fecha: '',
        grado: '',
        educadora: '',
        actividad: '',
        evaluacion: ''
    }])

    const router = useRouter()

   const contenido = () =>{
        return rutinas.map(rutina =>{
            return (
                <Tr key={rutina.id}>
                    <Td>{rutina.fecha}</Td>
                    <Td>{rutina.grado.grado}</Td>
                    <Td>{rutina.educadora.nombre}</Td>
                    <Td>{rutina.actividad}</Td>
                    <Td>{rutina.evaluacion}</Td>
                    <Td><Button maxW={"150"} colorScheme="yellow" textColor={"white"}>Editar</Button></Td>
                    <Td><Button maxW={"150"} colorScheme="red" textColor={"white"}>Eliminar</Button></Td>
                </Tr>
            )
        })
   }

    useEffect(() => {
        BuscarRutina().then(res => {
            setRutina(res.data)
        })
    }, [])

    return (
    <>
    <Container maxW={'container.lg'} my="40" >
        <Heading as={'h1'} size='2xl' textColor={'grey'} textAlign={'center'} >Rutinas</Heading>
        <Stack mt={"5"}>
            <Button maxWidth={"200"} colorScheme={"whatsapp"} textColor={"white"} onClick={()=>router.push("./CrearRutina")}>Crear Rutina</Button>
            <Table variant={"striped"} colorScheme="cyan" >
                <Thead bgColor={"skyblue"}>
                    <Tr>
                        <Td>Fecha</Td>
                        <Td>Grado</Td>
                        <Td>Educadora</Td>
                        <Td>Activida</Td>
                        <Td>Evaluación</Td>
                        <Td>Editar</Td>
                        <Td>Eliminar</Td>
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