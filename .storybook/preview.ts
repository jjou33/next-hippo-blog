import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import GlobalStyles from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: { theme },
      defaultTheme: 'dark',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
}

export default preview
