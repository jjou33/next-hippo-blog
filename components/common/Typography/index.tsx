import { PropsWithChildren } from 'react'
import * as S from './styles'

interface TypographyPropsType extends PropsWithChildren {
  aggressive: AggressiveVariant
  variant: TypographyVariant
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
