import React, {useState} from 'react'
import { Container, Heading, Stack, FormControl, FormLabel, Input, Select, Button, Textarea} from '@chakra-ui/react'

const CrearRutina = () => {

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const fecha = hoy.toLocaleDateString()

  const [rutina, setRutina] = useState({
    id: '',
    fecha: '',
    grado: '',
    educadora: '',
    actividad: '',
    evaluacion: ''
  })

  console.log(rutina)
  
  const handlechange = (e) =>{
    setRutina({
      ...rutina,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <>
    <Container maxW="container.lg" my='40'>
      <Stack spacing={5} my={'15'}>
        <Heading as='h1' size={'2xl'} align='center' textColor={'grey'}>Crear Rutina</Heading>
        <Container maxW='container.lg' marginTop={'40'}>
          <Stack spacing={7}>
            <FormControl id="fecha">
              <FormLabel>Fecha actual</FormLabel>
              <Input variant='filled' placeholder={fecha} value={fecha} />
            </FormControl>
            <FormControl id="grado">
              <FormLabel>Grado</FormLabel>
              <Select variant='filled' placeholder='Eligir Grado' />
            </FormControl >
            <FormControl id="educadora">
              <FormLabel>Educadora</FormLabel>
              <Select variant='filled' placeholder='Elegir Educadora' />
            </FormControl>
            <FormControl id="actividad">
              <FormLabel>Actividad</FormLabel>
              <Textarea variant='filled' placeholder='Ingrese Actividad' name={"actividad"} onChange={handlechange}/>
            </FormControl>
            <FormControl id="evaluacion">
              <FormLabel>Evaluación</FormLabel>
              <Input variant='filled' placeholder='Evaluación' isDisabled />
            </FormControl>
          </Stack>
          <Stack maxW={'full'} alignItems='center'>
            <Button colorScheme='blue' marginTop={'7'} marginBottom='15' maxW={'150'}>Crear</Button>
          </Stack>
        </Container>
      </Stack>
    </Container>
    </>
  )
}

/**/
export default CrearRutina