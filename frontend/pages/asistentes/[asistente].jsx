import React from 'react'
import {editAsistente} from '../../data/asistente'

export const getServerStaticProps = async (context) => {
    const response = editAsistente(context.query).then(res => {
        return {
            props: {
                asistente: response.data
            }
        }
    })
    console.log(response)

}

const editar = ({asistente}) => {
    //const router = useRouter()
    //const {asistente} = router.query
    console.log(asistente)


  return (
    <div>Nombre: {asistente}</div>
  )
}

export default editar