import styled from 'styled-components'

import { Theme } from '@emotion/react'

import theme from 'styles/theme'

export interface ComponentProps {
  aggressive: AggressiveVariant
  theme?: Theme
  margin?: string
  padding?: string
  border?: string
  borderRadius?: string
  color?: string
  backgroundColor?: string
  lineHeight?: string
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap'
  boxShadow?: string
  height?: string
}

export const Component = styled.div<ComponentProps>`
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '1.5rem'};
  padding: ${({ padding }) => (padding ? padding : '5px 10px')};
  ${({ aggressive, theme }) => theme.fonts[aggressive]};
  margin: ${({ margin }) => margin && margin};
  color: ${({ color }) => color && color};
  line-height: ${({ lineHeight }) => lineHeight && lineHeight};
  text-align: ${({ align }) => align && align};
  white-space: ${({ whiteSpace }) => whiteSpace && whiteSpace};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : `${theme.color.badge_color}`};
  border: ${({ border }) => border ?? border};
  box-shadow: ${({ boxShadow }) => boxShadow ?? boxShadow};
  height: ${({ height }) => height ?? height};
`
