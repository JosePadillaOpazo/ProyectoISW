import { Input, InputGroup, InputLeftAddon, Stack, Card, Image, CardBody, Heading } from '@chakra-ui/react'
import React from 'react'
import {useRouter} from 'next/router'


const indexAccess = ({ruta, imagen, alt}) => {
  const router = useRouter()
  return (
    <Stack>
      <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      onClick={() => router.push(ruta)}
      >
      <Image
        borderRadius='full'
        boxSize='150px'
        src={imagen}
        alt="hey"
      />

      <Stack>
        <CardBody >
          <Heading size='md'>{alt}</Heading>
        </CardBody>

      </Stack>
      </Card>
    </Stack>
  )
}

export default indexAccess