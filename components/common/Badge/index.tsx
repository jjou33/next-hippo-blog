import * as S from './styles'

import { PropsWithChildren } from 'react'

interface BadgePropsType extends PropsWithChildren {
  aggressive?: AggressiveVariant
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
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  height?: string
}

const Badge = ({ children, aggressive, ...props }: BadgePropsType) => {
  return (
    <S.BadgeContainer aggressive={aggressive} {...props}>
      {children}
    </S.BadgeContainer>
  )
}

export default Badge
