export type ThemeVariables = {
  primary_001: string
  primary_002: string
  primary_003: string
  primary_004: string
  primary_005: string
  primary_006: string
  primary_007: string
  primary_008: string
  primary_009: string
  deep_white: string
  deep_black: string
  text_001: string
  text_002: string
  text_003: string
  text_004: string
  text_005: string
  wave_001: string
  wave_002: string
  wave_003: string
  code_001: string
  badge_001: string
  badge_002: string
  badge_003: string
  badge_text_001: string
  hover_001: string
  hover_002: string
  background_001: string
  background_002: string
  border_001: string
  point_color_001: string
  point_color_002: string
  point_color_003: string
  shadow_001: string
  shadow_002: string
  shadow_003: string
  divider_001: string
  divider_002: string
  divider_003: string
  nav_icon_001: string
}

type Theme = 'light' | 'dark'
type VariableKey = keyof ThemeVariables
type ThemedPalette = Record<VariableKey, string>

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    primary_001: '#FFFCF1',
    primary_002: '#FFF8E1',
    primary_003: '#FFEBB2',
    primary_004: '#FFDF81',
    primary_005: '#FFD34D',
    primary_006: '#FFBF00',
    primary_007: '#FFB100',
    primary_008: '#FF9E00',
    primary_009: '#FF8D00',
    deep_white: '#ffffff',
    deep_black: '#000',
    text_001: '#131313',
    text_002: '#262626',
    text_003: '#6e7174',
    text_004: '#DEDCDC',
    text_005: '#DEDCDC',
    wave_001: '#3461C1',
    wave_002: '#4579E2',
    wave_003: '#F461C1',
    code_001: '#519D9E',
    badge_001: '#FC5460',
    badge_002: '#FFEBB2',
    badge_003: '#2d3344',
    badge_text_001: '#ffffff',
    border_001: '#DEE2E6',
    hover_001: '#fcf8eb',
    hover_002: '#4579e2',
    background_001: '#F8F9FA',
    background_002: '#ffffff',
    point_color_001: '#4477CE',
    point_color_002: '#93a1ae',
    point_color_003: '#EA5263',
    nav_icon_001: '#93a1ae',
    shadow_001: `
    inset 10px 10px 100px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(0, 0, 0, 0.05),
    15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9)`,
    shadow_002: `8px 8px 12px rgba(0, 0, 0, 0.2)`,
    shadow_003: `0px 20px 20px rgba(0, 0, 0, 0.2)`,
    divider_001: `linear-gradient(
      to right,
      transparent,
      rgb(48, 49, 51),
      transparent
    )`,
    divider_002: '#E5E5EA',
    divider_003: '#a5a5b8',
  },
  dark: {
    primary_001: '#EBFEF1',
    primary_002: '#D7FDE7',
    primary_003: '#C1FBDF',
    primary_004: '#B0F7DB',
    primary_005: '#96F2D7',
    primary_006: '#6DD0BC',
    primary_007: '#4BAEA4',
    primary_008: '#2F8C8C',
    primary_009: '#1C6B74',
    deep_white: '#ffffff',
    deep_black: '#000',
    text_001: '#ECECEC',
    text_002: '#D9D9D9',
    text_003: '#d7d3d3',
    text_004: '#212529',
    text_005: '#495057',
    wave_001: '#29586C',
    wave_002: '#00848D',
    wave_003: '#2EB193',
    code_001: '#519D9E',
    badge_001: '#FFEBB2',
    badge_002: '#FC5460',
    badge_003: '#C1FBDF',
    badge_text_001: '#000',
    border_001: '#4D4D4D',
    hover_001: '#4a514eda',
    hover_002: '#4579e2',
    background_001: '#2b303a',
    background_002: '#2d3344',
    point_color_001: '#96F2D7',
    point_color_002: '#93a1ae',
    point_color_003: '#f7d998',
    nav_icon_001: '#93a1ae',
    shadow_001: `
    inset 10px 10px 10px rgba(0, 0, 0, 0.25),
    15px 25px 10px rgb(0, 0, 0, 0.2),
    15px 20px 20px rgba(0, 0, 0, 0.3),
    inset -10px -10px 15px rgba(0, 0, 0, 0.35)`,
    shadow_002: `8px 8px 12px rgba(0, 0, 0, 0.3)`,
    shadow_003: `0px 20px 20px rgba(0, 0, 0, 0.2)`,
    divider_001: `linear-gradient(
      to right,
      transparent,
      white,
      transparent
    )`,
    divider_002: '#E5E5EA',
    divider_003: '#a5a5b8',
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
