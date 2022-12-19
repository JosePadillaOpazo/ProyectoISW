import React, { useState } from 'react'
import { Button, color, Container, FormControl, FormLabel, Heading, HStack, Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {addAsistente} from '../data/asistente'


const registroAsistente = () => {
  const [boton, setBoton] = useState(false)
  const [asistente, setAsistente] = useState({
    rut:'',
    nombre: '',
    fecha_de_nac: '',
    direccion: '',
    telefono: '',
    correo: ''
  })
  

  const mouseover = () => {
    if(boton){
      return "red"
    }else
      return "blue"
  }
  const router = useRouter()

  const handleChange = (e) => {
    setAsistente({
        ...asistente,
        [e.target.name]: e.target.value
    })
  }

  const submitAsistente = (e) => {
    e.preventDefault()
    const response = addAsistente(asistente)
    console.log(response)
  }
  return (
    <>
    <Container maxW="container.sm" >
        <Heading as="h1" size="2xl" textAlign="center" my={20} color={mouseover} onMouseOver={() => setBoton(!boton)} >Registro de Asistente</Heading>
        <Stack spacing={3}  my={20} justify="center"> 
            <FormControl>
                <FormLabel>RUT</FormLabel>
                <Input type="text" placeholder='RUT' name="rut" onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" placeholder='Nombre' name="name" onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel>Fecha de Nacimiento</FormLabel>
                <Input type="date" name="fecha de nacimiento" onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel>Direccion</FormLabel>
                <Input type="address" placeholder='Direccion' name="direccion" onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel>Telefono</FormLabel>
                <InputGroup>
                    <InputLeftAddon children="+56"/>
                    <Input type="tel" placeholder='Telefono' name="telefono" onChange={handleChange} />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Correo Electronico</FormLabel>
                <Input type="email" placeholder='Correo Electronico' name="correo" onChange={handleChange} />
            </FormControl>
      </Stack>
      <HStack>
        <Button colorScheme={"green"} onClick={submitAsistente}>Guardar</Button>
        <Button colorScheme={"yellow"} onClick={() => router.push('./asistente')}>Regresar</Button>
      </HStack>
      
    </Container>

    </>
    
    
    
  )
}

export default registroAsistente