import * as S from './styles'

import { PropsWithChildren } from 'react'

import type { AggressivePropsType } from 'types/styles'

interface Props extends PropsWithChildren {
  aggressive: AggressivePropsType['aggressive']
  margin?: string
  padding?: string
  border?: string
  color?: string
  borderRadius: string
  backgroundColor?: string
  lineHeight?: string
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap'
  boxShadow?: string
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

const Badge = ({ children, aggressive, ...props }: Props) => {
  return (
    <S.Component aggressive={aggressive} {...props}>
      {children}
    </S.Component>
  )
}

export default Badge
