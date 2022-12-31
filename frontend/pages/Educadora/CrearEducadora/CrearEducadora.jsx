import {useState} from 'react'
import {CrearEducadora} from '../../../data/Educadora'
import { Container, Heading, Stack, HStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import InputForm from '../../../Components/InputForm'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const Crear_Educadora = () => {
  const router = useRouter()
  
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

  const submitEducadora = async (e) =>{
    e.preventDefault()
    const response = await CrearEducadora(educadora)
      if(response.status == 200){
        Swal.fire(
          {
            icon: 'success',
            title: 'Educadora creada',
            showConfirmButton: true,
            text: 'La Educadora se ingreso correctamente'
          }).then(() =>{
            router.push('../VistaEducadoras')
          })
      }else{
        Swal.fire(
          {
            icon: 'error',
            title: 'Error',
            showConfirmButton: true,
            text: 'Error al ingresar educadora'
          }
        )
      }
  }

  return (
    <Container maxW="container.lg" my='40'>
      <Stack spacing={5} my={'15'}>
        <Heading as='h1' size={'2xl'} align='center' textColor={'black'}>Crear Educadora</Heading>
        <Container maxW='container.lg' marginTop={'40'}>
          <Stack spacing={7} >
            <InputForm label="Rut" type="text" name="rut" placeholder="Ingrese Rut" handlechange={handlechange} value={educadora.rut}/>
            <InputForm label="Nombre Completo" type="text" name="nombre" placeholder="Ingrese Nombre Completo" handlechange={handlechange} value={educadora.nombre} />
            <InputForm label="Dirección" type="text" name="direccion" placeholder="Ingrese Dirección" handlechange={handlechange} value={educadora.direccion} />
            <InputForm label="Telefono" type="number" name="telefono1" placeholder="Ingrese Telefono" handlechange={handlechange} value={educadora.telefono1} />
            <InputForm label="Correo" type="email" name="correo" placeholder="Ingrese Correo" handlechange={handlechange} value={educadora.correo} />
            <FormControl id="fecha_de_nac">
              <FormLabel>Fecha de Nacimiento</FormLabel>
             <Input variant={'filled'} type={'date'} name={"fecha_de_nac"} value='01-01-1990' onChange={obtenerfecha} value={educadora.fecha_de_nac}></Input>
           </FormControl>
          </Stack>
          <HStack>
            <Button colorScheme='whatsapp' marginTop='10' marginBottom='10' minW={'100'} marginRight='15' onClick={submitEducadora}>Crear</Button>
            <Button colorScheme='red' marginTop='10' marginBottom='10' minW={'100'} onClick={()=>router.push('../VistaEducadoras')}>Cancelar</Button>
          </HStack>
        </Container>
      </Stack>
    </Container>
  )
}

export default Crear_Educadora