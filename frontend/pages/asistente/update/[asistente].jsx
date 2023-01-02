import {useState} from 'react'
import {findAsistente, updateAsistente} from '../../../data/asistente'
import { Container, Stack, Heading, FormControl, FormLabel, InputGroup, InputLeftAddon, Input, HStack, Button, useToast } from '@chakra-ui/react'
import InputForm from '../../../components/InputFormEx'
import { useRouter } from 'next/router'

export const getServerSideProps = async (context) => {
    const response = await findAsistente(context.query)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({data}) => {
  const [asistentec, setAsistentec] = useState(data)
  const router = useRouter()
  const toast = useToast()
  const { asistente } = router.query

  const handleChange = (e) => {
    setAsistentec({
        ...asistentec,
        [e.target.name]: e.target.value
    })
  }

  const submitAsistente = (e) => {
    e.preventDefault()
    updateAsistente(asistente, asistentec).then(res => {
      if(res.status == '200'){
        toast({
          title: 'Asistente actualizado',
          description: "El asistente se ha actualizado correctamente.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        router.push('/asistente')
      }
    })
  }

  return (
    <>
    <Container maxW="container.sm" >
        <Heading as="h1" size="2xl" textAlign="center" my={20}>Actualizacion de Asistente: {data.nombre}</Heading>
        <Stack spacing={3}  my={20} justify="center">
            <InputForm name="rut" placeholder="RUT sin punto y con guion" handleChange={handleChange} label="RUT" type="text" value={asistentec.rut} /> 
            <InputForm name="nombre" placeholder="Nombre Completo" handleChange={handleChange} label="Nombre" type="text" value={asistentec.nombre} /> 
            <InputForm name="fecha_de_nac" handleChange={handleChange} label="Fecha de Nacimiento" type="date" value={asistentec.fecha_de_nac.substring(0,10)}/>
            <InputForm name="direccion" handleChange={handleChange} label="Direccion" type="address" placeholder="Direccion" value={asistentec.direccion} /> 
            <FormControl>
                <FormLabel>Telefono</FormLabel>
                <InputGroup>
                    <InputLeftAddon children="+56"/>
                    <Input type="tel" placeholder='Telefono' name={"telefono"} onChange={handleChange} value={asistentec.telefono}/>
                </InputGroup>
            </FormControl>
            <InputForm name="correo" placeholder="Correo Electronico" type="email" handleChange={handleChange} label="Correo Electronico"  value={asistentec.correo}/>
      </Stack>
      <HStack>
        <Button colorScheme={"whatsapp"} onClick={submitAsistente}>Confirmar</Button>
        <Button colorScheme={"red"} onClick={() => router.back()}>Cancelar</Button>
      </HStack>
      
    </Container>

    </>
  )
}

export default editar