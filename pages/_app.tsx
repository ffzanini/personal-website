import { AppProps } from 'next/app'
import Head from 'next/head'

import { Theme } from '@common/theme'

import '../public/fonts/fonts.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ffzanini.dev</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default App