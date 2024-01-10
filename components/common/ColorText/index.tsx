import * as S from './styles'

import Typography from '../Typography'

interface ColorTextPropsType {
  text: string
  aggressive?: AggressiveVariant
}

const ColorText = ({ text, aggressive }: ColorTextPropsType) => {
  return (
    <S.ColorText>
      <Typography variant={'span'} aggressive={aggressive}>
        {text}
      </Typography>
    </S.ColorText>
  )
}

export default ColorText
