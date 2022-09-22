import NextDocument, { Html, Head, Main, NextScript, } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '../../styles/theme'
export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="eng">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}