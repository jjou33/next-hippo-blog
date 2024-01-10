import styled from 'styled-components'

export interface ComponentProps {
  aggressive: AggressiveVariant
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

export const BadgeContainer = styled.div<ComponentProps>`
  border-radius: ${({ borderRadius }) => borderRadius || '1.5rem'};
  padding: ${({ padding }) => padding || '5px 10px'};
  ${({ aggressive, theme }) => theme.fonts[aggressive]};
  margin: ${({ margin }) => margin && margin};
  color: ${({ color }) => color && color};
  line-height: ${({ lineHeight }) => lineHeight && lineHeight};
  text-align: ${({ align }) => align && align};
  white-space: ${({ whiteSpace }) => whiteSpace && whiteSpace};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.color.badge_001};
  border: ${({ border }) => border ?? border};
  box-shadow: ${({ boxShadow }) => boxShadow ?? boxShadow};
  height: ${({ height }) => height ?? height};
`
