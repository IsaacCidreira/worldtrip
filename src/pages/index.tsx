import type { NextPage } from 'next';
import { Flex, Heading, Box, Divider } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Head from 'next/head';
import TravelTypes from '../components/TravelTypes/TravelTypes';
import { Slide } from '../components/Slide';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <Flex flexDirection="column" width="100%">
      <Header />
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <Banner />
      <TravelTypes />
      <Flex
        margin="0 auto"
        mt={['36px', '80px']}
        mb={['24px', '52px']}
        w={90}
        h={1}
        backgroundColor="gray.600"
      ></Flex>
      <Box>
        <Heading
          py={['6', '14']}
          fontWeight="normal"
          fontSize={['xl', '4xl']}
          textAlign="center"
          lineHeight={['30px', '3.375rem']}
        >
          Vamos nessa? <Divider as="br" /> Então escolha seu continente
        </Heading>

        <Box w="100%" h={['250', '450']}>
          <Slide />
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
