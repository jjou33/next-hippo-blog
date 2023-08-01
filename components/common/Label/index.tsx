import * as S from './styles'

interface Props {
  htmlFor: string
  width?: string
  height?: string
  borderRadius?: string
}

const Label = ({ htmlFor, width, height, borderRadius }: Props) => {
  return (
    <S.Label
      htmlFor={htmlFor}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  )
}

export default Label
