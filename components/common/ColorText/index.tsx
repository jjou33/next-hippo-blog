import Typography from '../Typography'
import * as S from './styles'

interface ColorTextPropsType {
  text: string
  fontSize?: number
  aggressive?: string
}

const ColorText = ({ text, fontSize = 0, aggressive }: ColorTextPropsType) => {
  return (
    <S.ColorText fontSize={fontSize}>
      <Typography variant="span" aggressive={aggressive}>
        {text}
      </Typography>
    </S.ColorText>
  )
}

export default ColorText
