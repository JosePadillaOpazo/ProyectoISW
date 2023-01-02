import { Container, Heading, useToast, Stack, HStack, Button, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {findAsistencia, updateAsistencia} from '../../../data/asistencia'
import InputForm from '../../../components/InputFormEx'
import TextareaForm from '../../../components/TextareaFormEx'
import {getAsistentes} from '../../../data/asistente'

export const getServerSideProps = async (context) => {
    const response = await findAsistencia(context.query)
    return {
        props: {
            data: response.data
        }
    }
}

const update = ({data}) => {
    const router = useRouter()
    const toast = useToast()
    const [asistentes, setAsistentes] = useState([])
    const [asistencias, setAsistencias] = useState(data)
    const {asistencia} = router.query

    const handleChange = (e) => {
        setAsistencias({
            ...asistencias,
            [e.target.name]: e.target.value
        })
    }

    const contentSelect = () => {
        return asistentes.map((asistentes => (
          <option value={asistentes._id} key={asistentes._id}>{asistentes.nombre}</option>
        )
        ))
    }

    const submitAsistencia = (e) => {
        e.preventDefault()
        updateAsistencia(asistencia, asistencias).then(res => {
          if(res.status == '200'){
              toast({
              title: 'Asistencia actualizada',
              description: "La asistencia se ha actualizado correctamente.",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
            router.push('/asistencia')
          }
        })
      }
      

    useEffect(() => {
        getAsistentes().then(res =>{
            setAsistentes(res.data)
        })
    },[])


    const stateAsistente = (asistencias) => {
      if(asistencias.asistente_d!=null){
        return asistencias.asistente_d.nombre
      }else {
        return ("La asistente no se encuentra en el sistema")
      }
    }

  return (
    <Container>
      <Heading as="h1" size="2xl" textAlign="center" my={20} >Actualizacion de la Asistencia </Heading>
      <form id='form' onSubmit={submitAsistencia}>
        <Stack spacing={3}  my={20} justify="center"> 
            <InputForm name="titulo" type="text" placeholder="Nombre de la Clase" handleChange={handleChange} label="Titulo" value={asistencias.titulo} />
            <Input label="Asistente" name="asistente_d" handleChange={handleChange} value={stateAsistente(asistencias)} isDisabled/>
            <TextareaForm name="comentario" placeholder="Comentario" handleChange={handleChange} label="Comentario" value={asistencias.comentario}/>
        </Stack>
        <HStack>
          <Button colorScheme="whatsapp" type={"submit"} >Confirmar</Button>
          <Button colorScheme={"red"} onClick={() => router.back()}>Regresar</Button>
        </HStack>
      </form>
    </Container>
  )
}

export default update