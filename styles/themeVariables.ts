type ThemeVariables = {
  bg_color: string
  bg_element_color: string
  text_color: string
  sub_text_color1: string
  sub_text_color2: string
  contrary_text_color: string
  contrary_sub_text_color: string
  border_color: string
  badge_color: string
  badge_color2: string
  badge_text: string
  point_color: string
  point_bg_color: string
  deep_white: string
  deep_black: string
  hover_color: string
  code_text_color: string
  strong_text_color: string
  arrow_color: string
  navIcon_color: string
  wave_primary1: string
  wave_primary2: string
  wave_primary3: string
}

type Theme = 'light' | 'dark'
type VariableKey = keyof ThemeVariables
type ThemedPalette = Record<VariableKey, string>

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bg_color: '#F8F9FA',
    bg_element_color: '#FFF',
    text_color: '#212529',
    sub_text_color1: '#495057',
    sub_text_color2: '#868E96',
    contrary_text_color: '#ECECEC',
    contrary_sub_text_color: '#D9D9D9',
    border_color: '#DEE2E6',
    badge_color: '#FFEBB2',
    badge_color2: '#fc5460',
    point_color: '#f25b5b',
    point_bg_color: '#fce8e8',
    badge_text: '#000',
    deep_white: '#fff',
    deep_black: '#000',
    hover_color: '#fcf8eb',
    code_text_color: '#519D9E',
    strong_text_color: '#ea5263',
    arrow_color: '#212529',
    navIcon_color: '#93a1ae',
    wave_primary1: '#3461c1',
    wave_primary2: '#4579e2',
    wave_primary3: '#f461c1',
  },
  dark: {
    bg_color: '#2b303a',
    bg_element_color: '#2d3344',
    text_color: '#ECECEC',
    sub_text_color1: '#D9D9D9',
    sub_text_color2: '#ACACAC',
    contrary_text_color: '#212529',
    contrary_sub_text_color: '#495057',
    border_color: '#4D4D4D',
    badge_color: '#fc5460',
    badge_color2: '#F9F871',
    point_color: '#00C6BB',
    point_bg_color: '#00848d',
    badge_text: '#fff',
    deep_white: '#fff',
    deep_black: '#000',
    hover_color: '#131313',
    code_text_color: '#A593E0',
    strong_text_color: '#ffd381',
    arrow_color: '#ECECEC',
    navIcon_color: '#93a1ae',
    wave_primary1: '#29586C',
    wave_primary2: '#00848D',
    wave_primary3: '#2EB193',
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
