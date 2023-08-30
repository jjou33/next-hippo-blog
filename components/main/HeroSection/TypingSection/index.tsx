import * as S from './styles'

import theme from 'styles/theme'

import { Divider } from 'components/common/StyledLayout'
import { Typography } from 'components/common'
import { useTypingTitle } from 'hooks/useTypingTitle'
import { LandingLottie } from 'components/common/Lottie'
import MotionShowBox from 'components/common/Motion/MotionShowBox'

const TypingSection = () => {
  const currentTitle = useTypingTitle([
    'Typescript',
    'Javascript',
    'NextJS',
    'React',
    'HTML',
  ])
  return (
    <S.Container>
      <MotionShowBox showDirection={'down'}>
        <S.HeroMoveImageContainer>
          <LandingLottie />
        </S.HeroMoveImageContainer>
      </MotionShowBox>
      <S.HeroWriteContainer>
        <Typography
          variant="h2"
          aggressive="montserratAlternates_Medium_002"
          color={theme.colors.gray_001}
        >
          Favorite Language
        </Typography>
        <Divider
          direction="horizontal"
          width="100%"
          height="1px"
          margin="0.1rem 0 0.1rem 0"
          color={theme.colors.gray_002}
        />
        <Typography
          variant="h3"
          aggressive="montserratAlternates_Medium_002"
          color={theme.colors.primary_005}
        >
          : {currentTitle}
        </Typography>
      </S.HeroWriteContainer>
    </S.Container>
  )
}

export default TypingSection
