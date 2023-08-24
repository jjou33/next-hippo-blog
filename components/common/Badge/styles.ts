import styled from 'styled-components'

import { Theme } from '@emotion/react'

import type { AggressivePropsType } from 'types/styles'

export interface ComponentProps {
  aggressive: AggressivePropsType['aggressive']
  theme?: Theme
  margin?: string
  padding?: string
  border?: string
  color?: string
  borderRadius: string
  backgroundColor?: string
  lineHeight?: string
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap'
}

export const Component = styled.div<ComponentProps>`
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
  ${({ aggressive, theme }) => theme.fonts[aggressive]};
  color: ${({ color }) => color && color};
  line-height: ${({ lineHeight }) => lineHeight && lineHeight};
  text-align: ${({ align }) => align && align};
  white-space: ${({ whiteSpace }) => whiteSpace && whiteSpace};
  border-radius: ${({ borderRadius }) => borderRadius ?? borderRadius};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? backgroundColor};
  text-align: center;
  border: ${({ border }) => border ?? border};
`
