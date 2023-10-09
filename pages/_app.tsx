import theme from 'styles/theme'
import Layout from 'components/common/Layout'
import GlobalStyle from '../styles/GlobalStyle'
import isPropValid from '@emotion/is-prop-valid'
import { themedPalette } from 'styles/themeVariables'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import useTheme from 'hooks/useTheme'

const App = ({ Component, pageProps }) => {
  console.log(themedPalette)
  const { toggleTheme } = useTheme()
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
        <GlobalStyle />
        <RecoilRoot>
          <Layout pageProps={...pageProps} toggle={toggleTheme}>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default App
