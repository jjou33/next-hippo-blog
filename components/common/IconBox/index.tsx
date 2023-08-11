import { PropsWithChildren } from 'react'
import * as S from './styles'

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
