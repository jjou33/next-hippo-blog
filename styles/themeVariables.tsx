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
  styled_badge_color: string
  badge_text: string
  point_color: string
  em_color: string
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
  logo_shadow: string
  custom_divider_color: string
}

type Theme = 'light' | 'dark'
type VariableKey = keyof ThemeVariables
type ThemedPalette = Record<VariableKey, string>

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bg_color: '#F8F9FA',
    bg_element_color: '#f6f5f8',
    text_color: '#212529',
    sub_text_color1: '#495057',
    sub_text_color2: '#6e7174',
    contrary_text_color: '#ECECEC',
    contrary_sub_text_color: '#D9D9D9',
    border_color: '#DEE2E6',
    badge_color: '#FFEBB2',
    badge_color2: '#fc5460',
    styled_badge_color: '#2d3344',
    point_color: '#f25b5b',
    em_color: '#4477CE',
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
    logo_shadow: `
    inset 10px 10px 100px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(0, 0, 0, 0.05),
    15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9)`,
    custom_divider_color: `linear-gradient(
      to right,
      transparent,
      rgb(48, 49, 51),
      transparent
    )`,
  },
  dark: {
    bg_color: '#2b303a',
    bg_element_color: '#2d3344',
    text_color: '#ECECEC',
    sub_text_color1: '#D9D9D9',
    sub_text_color2: '#d7d3d3',
    contrary_text_color: '#212529',
    contrary_sub_text_color: '#495057',
    border_color: '#4D4D4D',
    badge_color: '#fc5460',
    badge_color2: '#F9F871',
    styled_badge_color: '#e7e5e5',
    point_color: '#96F2D7',
    em_color: '#64CCC5',
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
    logo_shadow: `
    inset 10px 10px 100px rgba(0, 0, 0, 0.25),
    15px 25px 10px rgba(0, 0, 0, 0.05),
    15px 20px 20px rgba(0, 0, 0, 0.55),
    inset -10px -10px 15px rgba(0, 0, 0, 0.35)`,
    custom_divider_color: `linear-gradient(
      to right,
      transparent,
      white,
      transparent
    )`,
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
