import * as S from './styles'

import Typography from 'components/common/Typography'

import { Divider, ColorBorderBox } from 'components/common/StyledLayout'
import { useNumberCount } from 'hooks/useNumberCount'
import { themedPalette } from 'styles/themeVariables'

const NumberCountBox = ({ number, title, duration = 2000 }) => {
  return (
    <ColorBorderBox
      width="50px"
      height="150%"
      background="linear-gradient(#00ccff, #d500f9);"
    >
      <S.CountContainer>
        <S.CountNameBox>
          <Typography
            variant="span"
            aggressive="body_oneline_003"
            color={themedPalette.text_color}
          >
            {title}
          </Typography>
        </S.CountNameBox>
        <Divider
          direction="horizontal"
          width="80%"
          height="1px"
          margin="0 0 0 0"
          color={themedPalette.border_color}
        />
        <Typography
          variant="span"
          aggressive="body_oneline_003"
          color={themedPalette.text_color}
        >
          {useNumberCount({ number, duration })}
        </Typography>
      </S.CountContainer>
    </ColorBorderBox>
  )
}

export default NumberCountBox
