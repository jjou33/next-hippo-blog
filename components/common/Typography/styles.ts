import styled, { DefaultTheme } from 'styled-components'

import type { AggressivePropsType } from 'types/styles'

export interface ComponentProps extends AggressivePropsType {
  theme?: DefaultTheme
  margin?: string
  padding?: string
  color?: string
  lineHeight?: string
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap'
  overFlow?: string
  textOverflow?: string
}

export const Component = styled.div<ComponentProps>`
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
  ${({ aggressive, theme }) => theme.fonts[aggressive]};
  color: ${({ color }) => color && color};
  line-height: ${({ lineHeight }) => lineHeight && lineHeight};
  text-align: ${({ align }) => align && align};
  white-space: ${({ whiteSpace }) => whiteSpace && whiteSpace};
  overflow: ${({ overFlow }) => overFlow && overFlow};
  text-overflow: ${({ textOverflow }) => textOverflow && textOverflow};
`
