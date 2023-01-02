import {useState} from 'react'
import {findParvulo, updateParvulo} from '../../../data/parvulo'
import { Container, Stack, Heading, FormControl, FormLabel, InputGroup, InputLeftAddon, Input, HStack, Button, useToast } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import { useRouter } from 'next/router'
import SelectForm from '../../../components/SelectForm'

export const getServerSideProps = async (context) => {
    const response = await findParvulo(context.query)
    return {
        props: {
            data: response.data
        }
    }
}

const contentSelectGrados = () => {
  return grados.map((grados => (
    <option value={grados._id} key={grados._id}>{grados.grado}</option>
  )
  ))
}



const editar = ({data}) => {
  const [parvuloc, setParvuloc] = useState(data)
  const router = useRouter()
  const toast = useToast()
  const {parvulo} = router.query

  const handleChange = (e) => {
    setParvuloc({
        ...parvuloc,
        [e.target.name]: e.target.value
    })
  }

  const submitParvulo = (e) => {
    e.preventDefault()
    updateParvulo(parvulo, parvuloc).then(res => {
      if(res.status == '200'){
        toast({
          title: 'parvulo actualizado',
          description: "El parvulo se ha actualizado correctamente.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        router.push('/parvulo')
      }
    })
  }

  return (
    <>
<Container maxW="container.sm" >
        <Heading as="h1" size="2xl" textAlign="center" my={20}>Registro de Parvulo</Heading>
        <Stack spacing={3}  my={20} justify="center">
            <InputForm name="rut" placeholder="RUT sin punto y con guion" handleChange={handleChange} label="RUT" type="text" value={parvuloc.rut}/> 
            <InputForm name="nombre" placeholder="Nombre Completo" handleChange={handleChange} label="Nombre" type="text" value={parvuloc.nombre} /> 
            <InputForm name="fecha_de_nac" handleChange={handleChange} label="Fecha de Nacimiento" type="date"  />
            <SelectForm name="grado" placeholder="Seleccione grado parvulo" handleChange={handleChange} label="Grado"/>
      </Stack>
      <HStack>
        <Button colorScheme={"green"} onClick={submitParvulo}>Guardar</Button>
        <Button colorScheme={"yellow"} onClick={() => router.push('./parvulo')}>Regresar</Button>
      </HStack>
      
    </Container>

    </>
  )
}

export default editar