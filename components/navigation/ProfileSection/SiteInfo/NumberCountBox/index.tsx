import * as S from './styles'

import Typography from 'components/common/Typography'
import theme from 'styles/theme'

import { Divider, ColorBorderBox } from 'components/common/StyledLayout'
import { useNumberCount } from 'hooks/useNumberCount'

const NumberCountBox = ({ number, title, duration = 2000 }) => {
  console.log('number : ', number)
  return (
    <ColorBorderBox>
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
