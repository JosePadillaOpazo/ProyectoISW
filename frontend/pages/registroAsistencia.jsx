import React, { useEffect, useState } from 'react'
import { Button, Container, Heading, HStack, useToast, Stack } from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {getAsistentes} from '../data/asistente'
import {addAsistencia} from '../data/asistencia'
import InputForm from '../components/InputForm'
import TextareaForm from '../components/TextareaForm'
import SelectForm from '../components/SelectForm'

const registroAsistencia = () => {
  const router = useRouter()
  const toast = useToast()
  const [asistentes, setAsistentes] = useState([])
  const [asistencia, setAsistencia] = useState({
    titulo:'',
    idAsistente: '',
    comentario: ''
  })

  const contentSelect = () => {
    return asistentes.map((asistentes => (
      <option value={asistentes._id} key={asistentes._id}>{asistentes.nombre}</option>
    )
    ))
  }

  const handleChange = (e) => {
    setAsistencia({
        ...asistencia,
        [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    getAsistentes().then(res =>{
      setAsistentes(res.data)
    })
  }, [])

  const submitAsistencia = (e) => {
    e.preventDefault()
    console.log(asistencia)
    addAsistencia(asistencia).then(res => {
      if(res.status == '200'){
          toast({
          title: 'Asistencia registrada',
          description: "La asistencia se ha registrado correctamente.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        router.push('./asistencia')
      }
    })
  }


  return (
    <>
    <Container maxW="container.sm" >
      <Heading as="h1" size="2xl" textAlign="center" my={20} >Registro de Asistencia</Heading>
      <Stack spacing={3}  my={20} justify="center"> 
          <InputForm name="titulo" type="text" placeholder="Nombre de la Clase" handleChange={handleChange} label="Titulo"/>
          <SelectForm name="idAsistente" placeholder="Seleccione a una asistente..." handleChange={handleChange} content={contentSelect()}/>
          <TextareaForm name="comentario" placeholder="Comentario" handleChange={handleChange} label="Comentario"/>
      </Stack>
      <HStack>
        <Button colorScheme={"green"} onClick={submitAsistencia} >Guardar</Button>
        <Button colorScheme={"yellow"} onClick={() => router.push('./asistencia')}>Regresar</Button>
      </HStack>
    </Container>
    </>
  )
}

export default registroAsistencia