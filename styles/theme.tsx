import { css, DefaultTheme } from 'styled-components'

import { montserratAlternates, cafe24OhsquareAir } from 'public/static/fonts'
import { themedPalette } from './themeVariables'
interface Font {
  weight: 300 | 400 | 500 | 600 | 700 | 'bold'
  size: number
  height: number
  spacing: number
  fontFamily: string
}

const fontStyleGenerator = ({
  weight,
  size,
  height,
  spacing,
  fontFamily,
}: Font) => {
  return css`
    font-family: ${fontFamily};
    font-weight: ${weight};
    font-size: ${size}px;
    line-height: ${height}px;
    letter-spacing: ${spacing}px;
    -webkit-font-smoothing: antialiased;
  `
}

const theme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    gray_000: '#F9F9FB',
    gray_001: '#F2F2F7',
    gray_002: '#E5E5EA',
    gray_003: '#C7C7CC',
    gray_004: '#8E8E93',
    gray_005: '#636366',
    gray_006: '#3A3A3C',
    gray_007: '#1C1C1E',
    primary_001: '#FFFCF1',
    primary_002: '#FFF8E1',
    primary_003: '#FFEBB2',
    primary_004: '#FFDF81',
    primary_005: '#FFD34D',
    primary_006: '#FFBF00',
    primary_007: '#FFB100',
    primary_008: '#FF9E00',
    primary_009: '#FF8D00',
    primary_010: '#FF6C00',
    subPrimary_001: '#beecd3',
    subPrimary_002: '#86CCBB',
    subPrimary_003: '#66AAA8',
    subPrimary_004: '#4E8891',
    subPrimary_005: '#3D6776',
    subPrimary_006: '#2F4858',
    error: '#F04700',
    success: '#44927F',
  },
  color: themedPalette,
  fonts: {
    headline_medium_001: fontStyleGenerator({
      weight: 500,
      size: 48,
      height: 52,
      spacing: -0.4,
      fontFamily: `${cafe24OhsquareAir.style.fontFamily}`,
    }),
    headline_medium_002: fontStyleGenerator({
      weight: 500,
      size: 32,
      height: 34,
      spacing: -0.6,
      fontFamily: `${cafe24OhsquareAir.style.fontFamily}`,
    }),
    headline_small_001: fontStyleGenerator({
      weight: 500,
      size: 22,
      height: 28,
      spacing: -0.4,
      fontFamily: ` ${cafe24OhsquareAir.style.fontFamily}`,
    }),
    headline_small_002: fontStyleGenerator({
      weight: 700,
      size: 8,
      height: 15,
      spacing: -0.4,
      fontFamily: ` ${cafe24OhsquareAir.style.fontFamily}`,
    }),
    headline_multiline_001: fontStyleGenerator({
      weight: 700,
      size: 40,
      height: 46,
      spacing: 1,
      fontFamily: ` ${cafe24OhsquareAir.style.fontFamily}`,
    }),
    body_oneline_bold_001: fontStyleGenerator({
      weight: 700,
      size: 17,
      height: 19,
      spacing: -0.4,
      fontFamily: ` ${cafe24OhsquareAir.style.fontFamily}`,
    }),
    body_oneline_001: fontStyleGenerator({
      weight: 400,
      size: 17,
      height: 19,
      spacing: -0.4,
      fontFamily: ` ${cafe24OhsquareAir.style.fontFamily}`,
    }),
    body_oneline_002: fontStyleGenerator({
      weight: 400,
      size: 15,
      height: 20,
      spacing: -0.4,
      fontFamily: ` ${cafe24OhsquareAir.style.fontFamily}`,
    }),
    body_oneline_003: fontStyleGenerator({
      weight: 400,
      size: 10,
      height: 18,
      spacing: 1,
      fontFamily: ` ${cafe24OhsquareAir.style.fontFamily}`,
    }),
    body_oneline_bold_small: fontStyleGenerator({
      weight: 700,
      size: 10,
      height: 18,
      spacing: 1,
      fontFamily: ` ${cafe24OhsquareAir.style.fontFamily}`,
    }),
    body_oneline_bold_medium: fontStyleGenerator({
      weight: 700,
      size: 18,
      height: 25,
      spacing: 1,
      fontFamily: ` ${cafe24OhsquareAir.style.fontFamily}`,
    }),
    montserratAlternates_Medium_001: fontStyleGenerator({
      weight: 500,
      size: 70,
      height: 74,
      spacing: 1,
      fontFamily: ` ${montserratAlternates.style.fontFamily}`,
    }),
    montserratAlternates_Medium_002: fontStyleGenerator({
      weight: 500,
      size: 60,
      height: 64,
      spacing: -1,
      fontFamily: ` ${montserratAlternates.style.fontFamily}`,
    }),
    montserratAlternates_Medium_003: fontStyleGenerator({
      weight: 500,
      size: 24,
      height: 28,
      spacing: -1,
      fontFamily: ` ${montserratAlternates.style.fontFamily}`,
    }),
    montserratAlternates_Regular_001: fontStyleGenerator({
      weight: 400,
      size: 15,
      height: 15,
      spacing: -1,
      fontFamily: ` ${montserratAlternates.style.fontFamily}`,
    }),
    montserratAlternates_Regular_002: fontStyleGenerator({
      weight: 400,
      size: 13,
      height: 13,
      spacing: -0.1,
      fontFamily: ` ${montserratAlternates.style.fontFamily}`,
    }),
  },
} as const

export default theme
