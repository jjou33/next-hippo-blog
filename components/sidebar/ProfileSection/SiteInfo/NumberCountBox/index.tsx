import { Divider } from 'components/common/StyledLayout'
import { useNumberCount } from 'hooks/useNumberCount'
import Typography from 'components/common/Typography'
import theme from 'styles/theme'
import * as S from './styles'

const NumberCountBox = ({ number, name, duration = 2000 }) => {
  return (
    <S.CountContainer>
      <S.CountNameBox>
        <Typography variant="span" aggressive="tab_003">
          {name}
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
  )
}

export default NumberCountBox
