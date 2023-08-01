import { CacheProvider, ThemeProvider } from '@emotion/react'

import theme from 'styles/theme'
import Layout from 'components/common/Layout'
import createCache from '@emotion/cache'
import GlobalStyle from '../styles/GlobalStyle'

const cache = createCache({ key: 'next' })

const App = ({ Component, pageProps }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
