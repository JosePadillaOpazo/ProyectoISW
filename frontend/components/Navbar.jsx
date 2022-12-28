import React from 'react'
import { Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
  return (
    <Stack>
        <nav className='nav'>
            <a onClick={() => router.replace('/')} className='site-title'>
            Sala Cuna
            </a>
            <ul>
                <li>
                    <a onClick={() => router.replace('../asistente')}>Asistente</a>
                </li>
                <li>
                    <a onClick={() => router.replace('../asistencia')}>Asistencia</a>
                </li>
            </ul>
        </nav>
    </Stack>
  )
}

export default Navbar