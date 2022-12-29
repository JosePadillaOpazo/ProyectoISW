import React, { useState } from 'react'
import { Button, Container, FormControl, FormLabel, Heading, HStack, Input, InputGroup, InputLeftAddon, Stack, useToast } from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {addAsistente} from '../data/asistente'
import InputForm from '../components/InputForm'

const registroAsistente = () => {
  const router = useRouter()
  const toast = useToast()
  const [asistente, setAsistente] = useState({
    rut:'',
    nombre: '',
    fecha_de_nac: '',
    direccion: '',
    telefono: '',
    correo: ''
  })

  const handleChange = (e) => {
    setAsistente({
        ...asistente,
        [e.target.name]: e.target.value
    })
  }

  const submitAsistente = (e) => {
    e.preventDefault()
    addAsistente(asistente).then(res => {
      if(res.status == '200'){
        toast({
        title: 'Asistente registrado',
        description: "El asistente se ha registrado correctamente.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      router.push('./asistente')
    }
    })
  }

  return (
    <>
    <Container maxW="container.sm" >
        <Heading as="h1" size="2xl" textAlign="center" my={20}>Registro de Asistente</Heading>
        <Stack spacing={3}  my={20} justify="center">
            <InputForm name="rut" placeholder="RUT sin punto y con guion" handleChange={handleChange} label="RUT" type="text"/> 
            <InputForm name="nombre" placeholder="Nombre Completo" handleChange={handleChange} label="Nombre" type="text" /> 
            <InputForm name="fecha_de_nac" handleChange={handleChange} label="Fecha de Nacimiento" type="date" />
            <InputForm name="direccion" handleChange={handleChange} label="Direccion" type="address" placeholder="Direccion" /> 
            <FormControl>
                <FormLabel>Telefono</FormLabel>
                <InputGroup>
                    <InputLeftAddon children="+56"/>
                    <Input type="tel" placeholder='Telefono' name={"telefono"} onChange={handleChange} />
                </InputGroup>
            </FormControl>
            <InputForm name="correo" placeholder="Correo Electronico" type="email" handleChange={handleChange} label="Correo Electronico"  />
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