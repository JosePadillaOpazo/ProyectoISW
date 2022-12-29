import React, {useEffect, useState} from 'react'
import { Container, Table, Th, Td, Tr, Heading, Stack, Thead, Tbody, Button} from '@chakra-ui/react';
import {BuscarEducadoras} from '../data/Educadora'
import { useRouter } from 'next/router';

const VistaEducadoras = () => {
   
    const[educadoras, setEducadora] = useState([{
        _id: '',
        rut: '',
        fecha_de_nac: '',
        nombre: '',
        direccion: '',
        telefono1: '',
        correo: ''
    }])

    const router = useRouter()

   const contenido = () =>{
        return educadoras.map(educadora =>{
            return (
                <Tr key={educadora._id} fontSize='20'>
                    <Td>{educadora.rut}</Td>
                    <Td>{educadora.fecha_de_nac}</Td>
                    <Td>{educadora.nombre}</Td>
                    <Td>{educadora.direccion}</Td>
                    <Td>{educadora.telefono1}</Td>
                    <Td>{educadora.correo}</Td>
                    <Td><Button maxW={"150"} colorScheme="yellow" textColor={"white"} onClick={()=>router.push(`./Educadora/${educadora._id}`)}>Editar</Button></Td>
                    <Td><Button maxW={"150"} colorScheme="red" textColor={"white"}>Eliminar</Button></Td>
                </Tr>
            )
        })
   }
    useEffect(() => {
        BuscarEducadoras().then(res=>{
            setEducadora(res.data)
        })
    }, [])
   
    return (
    <>
    <Container maxW={'container.xl'} my="40">
        <Heading as={'h1'} size='2xl' textColor={'grey'} textAlign={'center'} mt='15'>Educadoras</Heading>
        <Stack spacing={'7'} mt='15'>
            <Button maxWidth={"200"} colorScheme={"whatsapp"} textColor={"white"} onClick={()=>router.push("./CrearEducadora")}>Crear Educadora</Button>
            <Table variant='striped' colorScheme={"cyan"}>
                <Thead >
                    <Tr fontSize={'20'}>
                        <Td>Rut</Td>
                        <Td>Fecha de Nacimiento</Td>
                        <Td>Nombre</Td>
                        <Td>Direccion</Td>
                        <Td>Telefono</Td>
                        <Td>Correo</Td>
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

export default VistaEducadoras