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
