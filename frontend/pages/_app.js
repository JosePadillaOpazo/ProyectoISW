import '../styles/globals.css'
import '../styles/style.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/NavBar'


export default function App({ Component, pageProps }) {
  return (
   <ChakraProvider>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </ChakraProvider>

  )
}
