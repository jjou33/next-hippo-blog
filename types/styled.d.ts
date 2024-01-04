import { CSSProperties } from 'react'
import 'styled-components'
import { ThemeVariables } from 'styles/themeVariables'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ThemeVariables
    fonts: {
      headline_medium_001: FlattenSimpleInterpolation
      headline_medium_002: FlattenSimpleInterpolation
      headline_small_001: FlattenSimpleInterpolation
      headline_small_002: FlattenSimpleInterpolation
      headline_multiline_001: FlattenSimpleInterpolation
      body_oneline_bold_001: FlattenSimpleInterpolation
      body_oneline_001: FlattenSimpleInterpolation
      body_oneline_002: FlattenSimpleInterpolation
      body_oneline_003: FlattenSimpleInterpolation
      body_oneline_bold_small: FlattenSimpleInterpolation
      body_oneline_bold_medium: FlattenSimpleInterpolation
      montserratAlternates_Medium_001: FlattenSimpleInterpolation
      montserratAlternates_Medium_002: FlattenSimpleInterpolation
      montserratAlternates_Medium_003: FlattenSimpleInterpolation
      montserratAlternates_Regular_001: FlattenSimpleInterpolation
      montserratAlternates_Regular_002: FlattenSimpleInterpolation
    }
  }
  export interface Styles {
    btnStyle: {
      white_btn: CSSProperties
      black_btn: CSSProperties
      primary_btn_001: CSSProperties
      primary_btn_002: CSSProperties
    }
  }
}
