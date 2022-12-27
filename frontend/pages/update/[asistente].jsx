import React from 'react'
import {findAsistente} from '../../data/asistente'

export const getServerSideProps = async (context) => {
    const response = await findAsistente(context.query)
    return {
        props: {
            asistente: response.data
        }
    }
}

const editar = ({asistente}) => {
    console.log(asistente)


  return (
    <div>Nombre: {asistente.nombre}</div>
  )
}

export default editar