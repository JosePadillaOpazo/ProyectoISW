import React, {useEffect, useState} from 'react'
import { Container, Table, Th, Td, Tr, Heading, Stack, Thead, Tbody} from '@chakra-ui/react';
import axios from 'axios';


const VistaEducadoras = () => {
   
    const[educadoras, setEducadora] = useState([{
        id: '',
        rut: '',
        fecha_de_nac: '',
        nombre: '',
        direccion: '',
        telefono1: '',
        correo: ''
    }])

    const BuscarEducadora = async () => {
        const response = await axios.get(`${process.env.SERVIDOR}/Educadoras`)
        setEducadora(response.data)
        console.log(response)
   }

   const contenido = () =>{
        return educadoras.map(educadora =>{
            return (
                <Tr key={educadora.id} fontSize='13'>
                    <Td>{educadora.rut}</Td>
                    <Td>{educadora.fecha_de_nac}</Td>
                    <Td>{educadora.nombre}</Td>
                    <Td>{educadora.direccion}</Td>
                    <Td>{educadora.telefono1}</Td>
                    <Td>{educadora.correo}</Td>
                </Tr>
            )
        })
   }
    useEffect(() => {
        BuscarEducadora()
    }, [])
   
    return (
    <>
    <Container maxW={'container.xl'} my="40">
        <Heading as={'h1'} size='2xl' textColor={'grey'} textAlign={'center'} mt='15'>Educadoras</Heading>
        <Stack spacing={'7'} mt='15'>
            <Table variant='striped' colorScheme={"cyan"}>
                <Thead >
                    <Tr fontSize={'20'}>
                        <Td>Rut</Td>
                        <Td>Fecha de Nacimiento</Td>
                        <Td>Nombre</Td>
                        <Td>Direccion</Td>
                        <Td>Telefono</Td>
                        <Td>Correo</Td>
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