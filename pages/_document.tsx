import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const themeInitializerScript = `
      (function () {
        document.body.dataset.theme = window.localStorage.getItem("theme") || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? "dark" : "light");
      })();
  `

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="google-site-verification"
            content="qHPW4tQItfmWapVjvbkaO_AMO3PAaSb6JOQxOfGt8fo"
          />
          <meta
            name="naver-site-verification"
            content="8507692830da6d3c7283ad90d59f48547d27223c"
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
