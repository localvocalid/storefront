import { MEDUSA_BACKEND_URL } from '@lib/config'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const uri = MEDUSA_BACKEND_URL
    const { hostname } = new URL(uri)

    return (
      <Html lang="en">
        <Head>
          <link crossOrigin="true" href={`//${hostname}`} rel="preconnect" />
          <link href={`//${hostname}`} rel="dns-prefetch" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
