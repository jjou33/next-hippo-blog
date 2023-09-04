import * as S from './styles'

import Typography from 'components/common/Typography'
import theme from 'styles/theme'

import { Divider, ColorBorderBox } from 'components/common/StyledLayout'
import { useNumberCount } from 'hooks/useNumberCount'

const NumberCountBox = ({ number, title, duration = 2000 }) => {
  return (
    <ColorBorderBox
      width="50px"
      height="150%"
      background="linear-gradient(#00ccff, #d500f9);"
    >
      <S.CountContainer>
        <S.CountNameBox>
          <Typography variant="span" aggressive="tab_003">
            {title}
          </Typography>
        </S.CountNameBox>
        <Divider
          direction="horizontal"
          width="100%"
          height="1px"
          margin="0 0 0 0"
          color={theme.colors.gray_002}
        />
        {useNumberCount({ number, duration })}
      </S.CountContainer>
    </ColorBorderBox>
  )
}

export default NumberCountBox
