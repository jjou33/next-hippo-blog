import theme from 'styles/theme'
import Layout from 'components/common/Layout'
import GlobalStyle from '../styles/GlobalStyle'
import isPropValid from '@emotion/is-prop-valid'

import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'

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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Layout pageProps={...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default App
