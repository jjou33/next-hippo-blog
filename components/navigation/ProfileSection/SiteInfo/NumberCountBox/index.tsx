import * as S from './styles'

import Typography from 'components/common/Typography'

import { Divider, ColorBorderBox } from 'components/common/StyledLayout'
import { useNumberCount } from 'hooks/useNumberCount'
import theme from 'styles/theme'

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
            color={theme.color.text_001}
          >
            {title}
          </Typography>
        </S.CountNameBox>
        <Divider
          direction="horizontal"
          width="80%"
          height="1px"
          margin="0 0 0 0"
          color={theme.color.border_001}
        />
        <Typography
          variant="span"
          aggressive="body_oneline_003"
          color={theme.color.text_001}
        >
          {useNumberCount({ number, duration })}
        </Typography>
      </S.CountContainer>
    </ColorBorderBox>
  )
}

export default NumberCountBox
