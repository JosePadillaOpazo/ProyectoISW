import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/style.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './layout/Navbar'


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
