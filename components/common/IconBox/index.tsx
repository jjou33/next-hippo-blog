import * as S from './styles'

import { PropsWithChildren } from 'react'

interface IconBoxProps extends PropsWithChildren {
  width?: string
  height?: string
}
const IconBox = ({ children, width, height }: IconBoxProps) => {
  return (
    <S.IconBoxContainer width={width} height={height}>
      {children}
    </S.IconBoxContainer>
  )
}

export default IconBox
