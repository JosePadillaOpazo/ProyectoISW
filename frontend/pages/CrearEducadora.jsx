import React, {useState} from 'react'
import { Container, Heading, Stack, FormControl, FormLabel, Input,  Button, } from '@chakra-ui/react'
import {CrearEducadora} from '../data/Educadora'
import { useRouter } from 'next/router'
import InputForm from '../Components/InputForm'


const Crear_Educadora = () => {
  const router = useRouter()

  const [date, setDate]=useState()
  
  const [educadora, setEducadora] = useState({
    rut: '',
    fecha_de_nac: '',
    nombre: '',
    direccion: '',
    telefono1: '',
    correo: ''
  })

  const obtenerfecha =(e) =>{
    setEducadora({
      ...educadora,
      fecha_de_nac: e.target.value
    })
    }

  const handlechange = (e) =>{
    setEducadora({
      ...educadora,
      [e.target.name]: e.target.value
    })
  }

  const submitEducadora = (e) =>{
    e.preventDefault()
    CrearEducadora(educadora).then(res=>{
      router.push('./VistaEducadoras')
    })
  }

  return (
    <Container maxW="container.lg" my='40'>
      <Stack spacing={5} my={'15'}>
        <Heading as='h1' size={'2xl'} align='center' textColor={'grey'}>Crear Educadora</Heading>
        <Container maxW='container.lg' marginTop={'40'}>
          <Stack spacing={7}>
            <InputForm label="Rut" type="text" name="rut" placeholder="Ingrese Rut" handlechange={handlechange} value={educadora.rut} />
            <InputForm label="Nombre Completo" type="text" name="nombre" placeholder="Ingrese Nombre Completo" handlechange={handlechange} value={educadora.nombre} />
            <InputForm label="Dirección" type="number" name="telefono1" placeholder="Ingrese Dirección" handlechange={handlechange} value={educadora.direccion} />
            <InputForm label="Telefono" type="text" name="rut" placeholder="Ingrese Telefono" handlechange={handlechange} value={educadora.telefono1} />
            <InputForm label="Correo" type="email" name="correo" placeholder="Ingrese Correo" handlechange={handlechange} value={educadora.correo} />
            <FormControl id="fecha_de_nac">
              <FormLabel>Fecha de Nacimiento</FormLabel>
             <Input variant={'filled'} type={'date'} name={"fecha_de_nac"} onChange={obtenerfecha} value={educadora.fecha_de_nac}></Input>
           </FormControl>
          </Stack>
          <Stack maxW={'full'} alignItems='center'>
            <Button colorScheme='blue' marginTop={'7'} marginBottom='15' maxW={'150'} onClick={submitEducadora}>Crear</Button>
          </Stack>
        </Container>
      </Stack>
    </Container>
  )
}




export default Crear_Educadora