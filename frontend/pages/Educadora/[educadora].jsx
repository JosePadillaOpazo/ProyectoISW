import {useState} from 'react'
import {BuscarEducadora, UpdateEducadora} from '../../data/Educadora'
import { Container, Heading, Stack, Button} from '@chakra-ui/react'
import InputForm from '../../Components/InputForm'
import { useRouter } from 'next/router'


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
      
      const submitEducadora = (e) =>{
        e.preventDefault()
        console.log("consol log de submit",educadora)
        UpdateEducadora(educadora._id, educadora).then(res=>{
            router.push('../VistaEducadoras')
          })
      }

    return (
        <Container maxW="container.lg" my='40'>
        <Stack spacing={5} my={'15'}>
          <Heading as='h1' size={'2xl'} align='center' textColor={'grey'}>Editar Educadora</Heading>
          <Container maxW='container.lg' marginTop={'40'}>
            <Stack spacing={7}>
              <InputForm label="Rut" type="text" name="rut" placeholder="Ingrese Rut" handlechange={handlechange} value={educadora.rut} />
              <InputForm label="Nombre Completo" type="text" name="nombre" placeholder="Ingrese Nombre Completo" handlechange={handlechange} value={educadora.nombre} />
              <InputForm label="Dirección" type="text" name="direccion" placeholder="Ingrese Dirección" handlechange={handlechange} value={educadora.direccion} />
              <InputForm label="Telefono" type="number" name="telefono1" placeholder="Ingrese Telefono" handlechange={handlechange} value={educadora.telefono1} />
              <InputForm label="Correo" type="email" name="correo" placeholder="Ingrese Correo" handlechange={handlechange} value={educadora.correo} />

            </Stack>
            <Stack maxW={'full'} alignItems='center'>
              <Button colorScheme='blue' marginTop={'7'} marginBottom='15' maxW={'150'} onClick={submitEducadora}>Guardar Cambios</Button>
            </Stack>
          </Container>
        </Stack>
      </Container>
    )
}

export default EditarEducadora