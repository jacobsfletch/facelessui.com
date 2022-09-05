import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.cdnfonts.com/css/jetbrains-mono"
            crossOrigin="anonymous"
          />
          <style data-href="https://fonts.cdnfonts.com/css/jetbrains-mono&display=swap">
            {`@font-face{font-family:'JetBrains Mono';font-style:monospace;`}
          </style>
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
