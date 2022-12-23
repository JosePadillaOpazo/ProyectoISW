import React from 'react'
import { Stack } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Stack>
        <nav className='nav'>
            <a href='/' className='site-title'>
            Sala Cuna
            </a>
            <ul>
                <li>
                    <a href='../asistente'>Asistente</a>
                </li>
                <li>
                    <a href='../asistencia'>Asistencia</a>
                </li>
            </ul>
        </nav>
    </Stack>
  )
}

export default Navbar