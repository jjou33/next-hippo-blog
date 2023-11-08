import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import React from 'react'
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
            content="ea8ce58875b2480e4acaea056f536e92c1500ee5"
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
