type ButtonShapeVariant = 'round' | 'square'
type ButtonThemeVariant = 'light'

declare type ButtonVariant =
  | ButtonShapeVariant
  | ButtonThemeVariant
  | `${ButtonShapeVariant} ${ButtonThemeVariant}`
  | 'plain'

declare type AggressiveVariant =
  | 'headline_medium_001'
  | 'headline_medium_002'
  | 'headline_small_001'
  | 'headline_small_002'
  | 'headline_multiline_001'
  | 'body_oneline_bold_001'
  | 'body_oneline_001'
  | 'body_oneline_002'
  | 'body_oneline_003'
  | 'montserratAlternates_Medium_001'
  | 'montserratAlternates_Medium_002'
  | 'montserratAlternates_Medium_003'
  | 'montserratAlternates_Regular_001'
  | 'montserratAlternates_Regular_002'

declare type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'caption'
  | 'span'
  | 'div'
