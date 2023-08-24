import * as S from './styles'

import { PropsWithChildren } from 'react'

import type { AggressivePropsType, VariantPropsType } from 'types/styles'

interface TypographyPropsType
  extends PropsWithChildren,
    AggressivePropsType,
    VariantPropsType {
  margin?: string
  padding?: string
  color?: string
  lineHeight?: string
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap'
  overFlow?: string
  textOverflow?: string
}

const Typography = ({
  children,
  variant,
  aggressive,
  ...props
}: TypographyPropsType) => {
  return (
    <S.Component as={variant} aggressive={aggressive} {...props}>
      {children}
    </S.Component>
  )
}

export default Typography
