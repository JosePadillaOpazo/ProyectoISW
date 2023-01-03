import React, { useState,useEffect } from 'react'
import { Button, Container, FormControl, FormLabel, Heading, HStack, Input, InputGroup, InputLeftAddon, Stack, useToast } from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {addParvulo} from '../data/parvulo'
import SelectForm from '../components/SelectForm'
import InputForm from '../components/InputForm'
import {BuscarGrados} from '../data/Grado'


const registroParvulo = () => {
  const router = useRouter()
  const toast = useToast()
  const [grados, setGrados] = useState([])
  const [parvulo, setParvulos] = useState([])

  const handleChange = (e) => {
    setParvulos({
        ...parvulo,
        [e.target.name]: e.target.value
    })
  }



  const contentSelectGrados = () => {
    return grados.map((grado => (
      <option value={grado._id} key={grado._id}>{grado.grado}</option>
    )
    ))
  }

  const submitParvulo = (e) => {
    e.preventDefault()
    addParvulo(parvulo).then(res => {
      if(res.status == '200'){
        toast({
        title: 'Parvulo registrado',
        description: "El Parvulo se ha registrado correctamente.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      router.push('./parvulo')
    }
    })
  }


  useEffect(() => {
    BuscarGrados().then(res =>{

      setGrados(res.data)

  
      
    })   
  }, [])

  return (
    <>
    <Container maxW="container.sm" >
        <Heading as="h1" size="2xl" textAlign="center" my={20}>Registro de Parvulo</Heading>
        <Stack spacing={3}  my={20} justify="center">
            <InputForm name="rut" isRequired={"True"}  placeholder="RUT sin punto y con guion" handleChange={handleChange} label="RUT" type="text"/> 
            <InputForm name="nombre" isRequired={"True"} placeholder="Nombre Completo" handleChange={handleChange} label="Nombre" type="text" /> 
            <InputForm name="fecha_de_nac" isRequired={"True"} handleChange={handleChange} label="Fecha de Nacimiento" type="date" />
            <SelectForm name="grado" isRequired={"True"} placeholder="Seleccione grado parvulo" handleChange={handleChange} label="Grado" content={contentSelectGrados()}/>
      </Stack>
      <HStack>
        <Button colorScheme={"green"} onClick={submitParvulo}>Guardar</Button>
        <Button colorScheme={"yellow"} onClick={() => router.push('./parvulo')}>Regresar</Button>
      </HStack>
      
    </Container>

    </>

  )
}

export default registroParvulo