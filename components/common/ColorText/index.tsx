import Typography from '../Typography'
import * as S from './styles'

interface ColorTextPropsType {
  text: string
  fontSize?: number
}

const ColorText = ({ text, fontSize = 0 }: ColorTextPropsType) => {
  return (
    <S.ColorText fontSize={fontSize}>
      <Typography variant="span" aggressive="headline_oneline_005">
        Total Contents
      </Typography>
    </S.ColorText>
  )
}

export default ColorText
