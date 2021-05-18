import { ChakraProvider } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import Layout from 'components/Layout';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
