import {useState} from 'react'
import {BuscarEducadora, UpdateEducadora} from '../../../data/Educadora'
import { Container, Heading, Stack, HStack, Button} from '@chakra-ui/react'
import InputForm from '../../../Components/InputForm'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await BuscarEducadora(context.query.educadora)
    return{
        props: {
            data: response.data
        }
    }
}

const EditarEducadora = ({data}) => {
    const [educadora, setEducadora] = useState(data)
    const router = useRouter()
      const handlechange = (e) =>{
        setEducadora({
          ...educadora,
          [e.target.name]: e.target.value
        })
        console.log("consol log de handlechange", educadora)
      }
      
      const submitEducadora = async (e) =>{
        e.preventDefault()
        const response = await UpdateEducadora(educadora._id, educadora)
        if(response.status == 200){
          Swal.fire(
            {
              icon: 'success',
              title: 'Datos actualizados',
              showConfirmButton: true,
              text: 'Los datos se actualizaron correctamente'
            }).then(() =>{
              router.push('../VistaEducadoras')
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
        <Stack spacing={'5'} my={'15'}>
          <Heading as='h1' size={'2xl'} align='center' textColor={'black'}>Editar Educadora</Heading>
          <Container maxW='container.lg' marginTop={'40'}>
            <Stack spacing={7}>
              <InputForm label="Rut" type="text" name="rut" placeholder="Ingrese Rut" handlechange={handlechange} value={educadora.rut} />
              <InputForm label="Nombre Completo" type="text" name="nombre" placeholder="Ingrese Nombre Completo" handlechange={handlechange} value={educadora.nombre} />
              <InputForm label="Dirección" type="text" name="direccion" placeholder="Ingrese Dirección" handlechange={handlechange} value={educadora.direccion} />
              <InputForm label="Telefono" type="number" name="telefono1" placeholder="Ingrese Telefono" handlechange={handlechange} value={educadora.telefono1} />
              <InputForm label="Correo" type="email" name="correo" placeholder="Ingrese Correo" handlechange={handlechange} value={educadora.correo} />
              <InputForm label="Fecha" type="date" name="fecha"  handlechange={handlechange} value={educadora.fecha_de_nac.substring(0,10)} />
            </Stack>
            <HStack>
              <Button colorScheme='blue' marginTop='10' marginBottom='10' minW={'100'} marginRight='15' onClick={submitEducadora}>Guardar</Button>
              <Button colorScheme='red' marginTop='10' marginBottom='10' minW={'100'} onClick={()=>router.push('../VistaEducadoras')}>Cancelar</Button>
            </HStack>
          </Container>
        </Stack>
      </Container>
    )
}

export default EditarEducadora