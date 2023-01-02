import '../styles/globals.css'
import '../styles/style.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../Components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps}></Component>
    </ChakraProvider>
  )
}

export default MyApp