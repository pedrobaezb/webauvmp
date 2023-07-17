import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Head from  'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>AUVMP</title>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/png" href="/auvmp_icono.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </>)
}

