import theme from 'styles/theme'
import Layout from 'components/common/Layout'
import isPropValid from '@emotion/is-prop-valid'
import Head from 'next/head'
import { categoryState } from 'states/categoryState'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { DefaultSeo } from 'next-seo'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import DEFAULT_SEO from '../next-seo-config'
import GlobalStyle from '../styles/GlobalStyle'

const App = ({ Component, pageProps }) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true
      }}
    >
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name={'viewport'}
            content={'initial-scale=1.0, width=device-width'}
          />
        </Head>
        <GlobalStyle />
        <RecoilRoot
          initializeState={({ set }) => set(categoryState, pageProps.category)}
        >
          <Layout pageProps={pageProps}>
            <DefaultSeo {...DEFAULT_SEO} />
            <Component {...pageProps} />
            <SpeedInsights />
            <Analytics />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default App
