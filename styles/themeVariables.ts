type ThemeVariables = {
  bg_page1: string
  bg_page2: string
  bg_element1: string
  bg_element2: string
  bg_element3: string
  bg_element4: string
  text1: string
  text2: string
  text3: string
  text4: string
  contrary_text1: string
  contrary_text2: string
  border1: string
  border2: string
  border3: string
  border4: string
  indicator_color: string
  button_color: string
  button_text: string
  badge_color: string
  badge_text: string
  deep_white: string
  deep_black: string
  scroll_color: string
  hover_color: string
  code_text_color: string
  strong_text_color: string
}

type Theme = 'light' | 'dark'
type VariableKey = keyof ThemeVariables
type ThemedPalette = Record<VariableKey, string>

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bg_page1: '#F8F9FA',
    bg_page2: '#FFFFFF',
    bg_element1: '#FFF',
    bg_element2: '#F8F9FA',
    bg_element3: '#FFFFFF',
    bg_element4: '#fcfcfc',
    text1: '#212529',
    text2: '#495057',
    text3: '#868E96',
    text4: '#CED4DA',
    contrary_text1: '#ECECEC',
    contrary_text2: '#D9D9D9',
    border1: '#343A40',
    border2: '#ADB5BD',
    border3: '#DEE2E6',
    border4: '#F1F3F5',
    indicator_color: '#3e54ac',
    button_color: '#ff5353',
    button_text: '#fff',
    badge_color: '#ffd381',
    badge_text: '#000',
    deep_white: '#fff',
    deep_black: '#000',
    scroll_color: '#3981f3',
    hover_color: '#fcf8eb',
    code_text_color: '#519D9E',
    strong_text_color: '#ea5263',
  },
  dark: {
    bg_page1: '#232323',
    bg_page2: '#121212',
    bg_element1: '#333333',
    bg_element2: '#303030',
    bg_element3: '#252525',
    bg_element4: '#2E2E2E',
    text1: '#ECECEC',
    text2: '#D9D9D9',
    text3: '#ACACAC',
    text4: '#595959',
    contrary_text1: '#212529',
    contrary_text2: '#495057',
    border1: '#E0E0E0',
    border2: '#A0A0A0',
    border3: '#4D4D4D',
    border4: '#2A2A2A',
    indicator_color: '#dfee6e',
    button_color: '#394867',
    button_text: '#fff',
    badge_color: '#ff5353',
    badge_text: '#fff',
    deep_white: '#fff',
    deep_black: '#000',
    scroll_color: '#ff5353',
    hover_color: '#131313',
    code_text_color: '#A593E0',
    strong_text_color: '#ffd381',
  },
}

const buildCssVariables = (variables: ThemeVariables) => {
  const keys = Object.keys(variables) as (keyof ThemeVariables)[]
  return keys.reduce(
    (acc, key) =>
      acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
    '',
  )
}

export const themes = {
  light: buildCssVariables(themeVariableSets.light),
  dark: buildCssVariables(themeVariableSets.dark),
}

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`

const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[]

export const themedPalette: Record<VariableKey, string> = variableKeys.reduce(
  (acc, current) => {
    acc[current] = cssVar(current)
    return acc
  },
  {} as ThemedPalette,
)
