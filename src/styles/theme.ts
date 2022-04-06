import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: {
    sm: '375px',
    md: '768px',
    lg: '960px',
    xl: '1440px',
    '2xl': '1536px',
  },
  colors: {
    white: '#ffffff',
    light: '#F5F8FA',
    highlight: '#FFBA08',
    darkText: '#47585B',
    darkBlack: '#000000',
    gray: '#999999',
    lightGray: '#DADADA',
  }
  ,
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: 'light',
        color: 'darkText'
      }
    }
  }
})