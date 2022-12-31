import {useState} from 'react'
import {BuscarRutina, UpdateRutina} from '../../../data/Rutina'
import { Container, Heading, Stack, HStack, Button, Input, FormControl, FormLabel, Textarea} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await BuscarRutina(context.query.rutina)
    return{
        props: {
            data: response.data
        }
    }
}

const Editar_Rutina = ({data}) => {
    const [rutina, setRutina] = useState(data)
    const router = useRouter()
      const handlechange = (e) =>{
        setRutina({
          ...rutina,
          [e.target.name]: e.target.value
        })
        console.log("consol log de handlechange", rutina)
      }
      
      const submitRutina = async (e) =>{
        e.preventDefault()
        const response = await UpdateRutina(rutina._id, rutina)
        if(response.status == 200){
          Swal.fire(
            {
              icon: 'success',
              title: 'Datos actualizados',
              showConfirmButton: true,
              text: 'Los datos se actualizaron correctamente'
            }).then(() =>{
              router.push('../VistaRutinas')
            })
        }else{
          Swal.fire(
            {
              icon: 'error',
              title: 'Error',
              showConfirmButton: true,
              text: 'Error al actualizar los datos'
            }
          )
        }
      }

    return (
      <Container maxW="container.lg" my='40'>
      <Stack spacing={5} my={'15'}>
        <Heading as='h1' size={'2xl'} align='center' textColor={'black'}>Editar Rutina</Heading>
        <Container maxW='container.lg' marginTop={'40'}>
          <Stack spacing={7}>
            <FormControl id="fecha">
              <FormLabel>Fecha actual</FormLabel>
              <Input variant='filled' name='fecha'value={rutina.fecha.substring(0,10)} disabled={true}/>
            </FormControl>
            <FormControl id="grado">
              <FormLabel>Grado</FormLabel>
              <Input variant='filled' name='grado' value={rutina.grado.grado} disabled={true} />
            </FormControl >
            <FormControl id="educadora">
              <FormLabel>Educadora</FormLabel>
              <Input variant='filled'name='educadora'value={rutina.educadora.nombre} disabled={true}/>
            </FormControl>
            <FormControl id="actividad">
              <FormLabel>Actividad</FormLabel>
              <Textarea variant='filled' placeholder='Ingrese Actividad' name={"actividad"} onChange={handlechange} value={rutina.actividad} />
            </FormControl>
            <FormControl id="evaluacion">
              <FormLabel>Evaluación</FormLabel>
              <Input variant='filled' placeholder='Evaluación' name={"evaluacion"} onChange={handlechange} value={rutina.evaluacion}/>
            </FormControl>
          </Stack>
          <HStack>
              <Button colorScheme='whatsapp' marginTop='10' marginBottom='10' minW={'100'} marginRight='15' onClick={submitRutina}>Guardar</Button>
              <Button colorScheme='red' marginTop='10' marginBottom='10' minW={'100'} onClick={()=>router.push('../VistaRutinas')}>Cancelar</Button>
            </HStack>
        </Container>
      </Stack>
    </Container>
    )
}

export default Editar_Rutina