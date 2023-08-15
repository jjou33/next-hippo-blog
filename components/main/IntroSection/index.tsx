import { Typography } from 'components/common'
import * as S from './styles'
import { Divider } from 'components/common/StyledLayout'
import theme from 'styles/theme'

const IntroSection = () => {
  return (
    <S.IntroSectionContainer>
      <Typography variant="h2" aggressive="headline_oneline_002">
        인트로
      </Typography>
      <Divider
        direction="horizontal"
        width="100%"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.colors.gray_002}
      />
    </S.IntroSectionContainer>
  )
}

export default IntroSection
