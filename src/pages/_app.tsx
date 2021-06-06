import { ChakraProvider } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import { AuthProvider } from 'context/AuthContext';
import Layout from 'components/Layout';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
