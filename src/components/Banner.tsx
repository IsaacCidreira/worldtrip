import { Flex, Box, Stack, Heading, Image, Text } from '@chakra-ui/react'

const Banner = () => {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/background.png')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      justify="space-around"
      align="center"
      p={4}
    >
      <Box ml={4}>
        <Stack >
          <Heading color="gray.100" fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]} fontWeight="bold">
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text color="gray.400" fontSize={["md", "md", 'xl']}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
      </Box>
      <Box>
        <Image
          w={["300px", "200px", "300px", "430px"]}
          display={['none', 'none',
            'block']}
          src="airplane.svg"
          alt="Avião amarelo voando com algumas nuvens ao redor."
          transform="translateY(48px)"
          ml={["0", "0", "0", "8"]}
        />
      </Box>
    </Flex>
  )
}

export default Banner