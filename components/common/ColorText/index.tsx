import * as S from './styles'

import Typography from '../Typography'

import type { AggressivePropsType } from 'types/styles'

interface ColorTextPropsType {
  text: string
  aggressive?: AggressivePropsType['aggressive']
}

const ColorText = ({ text, aggressive }: ColorTextPropsType) => {
  return (
    <S.ColorText>
      <Typography variant="span" aggressive={aggressive}>
        {text}
      </Typography>
    </S.ColorText>
  )
}

export default ColorText
