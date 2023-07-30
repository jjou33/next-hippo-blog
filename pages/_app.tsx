import { useEffect, useState } from 'react'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { darkTheme, lightTheme } from 'styles/theme'
import Layout from 'components/layout/layout'
import createCache from '@emotion/cache'
import GlobalStyle from '../styles/GlobalStyle'
const cache = createCache({ key: 'next' })

const App = ({ Component, pageProps }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {}, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle isDarkMode={isDarkMode} />
        <Layout>
          <Component
            {...pageProps}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
