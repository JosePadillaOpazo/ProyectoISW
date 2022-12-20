import React, { useEffect, useState } from 'react'
import { Button, Container, FormControl, FormLabel, Heading, HStack, Input, Select, Stack, Textarea, option } from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {getAsistentes} from '../data/asistente'
import {addAsistencia} from '../data/asistencia'

const registroAsistencia = () => {
  const router = useRouter()
  const [asistentes, setAsistentes] = useState([])
  const [asistencias, setAsistencias] = useState({
    titulo:'',
    idAsistente: '',
    comentario: '',
    fecha: ''
  })

  const contentSelect = () => {
    return asistentes.map((asistentes => (
      <option value={asistentes.nombre} key={asistentes._id}>{asistentes.nombre}</option>
    )
    ))
  }

  const handleChange = (e) => {
    setAsistencias({
        ...asistencias,
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
    addAsistencia(asistencias).then(res => {
      console.log(res)
    })
  }


  return (
    <>
    <Container maxW="container.sm" >
        <Heading as="h1" size="2xl" textAlign="center" my={20} >Registro de Asistencia</Heading>
        <Stack spacing={3}  my={20} justify="center"> 
            <FormControl>
                <FormLabel>Titulo</FormLabel>
                <Input type="text" placeholder='Titulo' name={"titulo"} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel>Asistente</FormLabel>
                <Select placeholder='Seleccione a una asistente...' name={'idAsistente'}>
                  {contentSelect()}
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel></FormLabel>
                <Textarea type="date" placeholder='Comentario' name={"fecha_de_nac"} onChange={handleChange} />
            </FormControl>
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