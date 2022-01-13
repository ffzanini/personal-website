import { AppProps } from 'next/app'
import Head from 'next/head'

import Theme from '@src/theme'
import { AppProvider } from '@src/context'

import '../public/fonts/fonts.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ffzanini.dev</title>
      </Head>
      <AppProvider>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </AppProvider>
    </>
  )
}

export default App
