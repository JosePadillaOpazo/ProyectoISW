import React from "react"
import { Button, Stack } from "@chakra-ui/react"
import { useRouter } from "next/router"

function Datepick (){
  const router = useRouter()
  return (
    <>
    <h1>Index</h1>
    <Stack>
      <Button maxWidth={"200"} colorScheme={"whatsapp"} textColor={"white"} onClick={()=>router.push("./Educadora/VistaEducadoras")}>Educadora</Button>
      <Button maxWidth={"200"} colorScheme={"whatsapp"} textColor={"white"} onClick={()=>router.push("./Rutina/VistaRutinas")}>Rutina</Button>
    </Stack>

    
    </>
  )
}

export default Datepick