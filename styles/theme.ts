import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
    },
  },
  styles: {
    colors: {
      gray: {
        '600': '#47585B',
      },
    },
    global: {
      body: {
        bg: 'gray.100',
        color: '#47585B',
        fontFamily: 'Poppins',
      },
    },
  },
});
