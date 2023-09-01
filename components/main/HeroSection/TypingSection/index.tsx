import * as S from './styles'

import theme from 'styles/theme'

import { Typography } from 'components/common'
import { useTypingTitle } from 'hooks/useTypingTitle'

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
      {/* <MotionShowBox showDirection={'down'}>
        <S.HeroMoveImageContainer>
          <LandingLottie />
        </S.HeroMoveImageContainer>
      </MotionShowBox> */}
      <S.HeroWriteContainer>
        <Typography
          variant="h2"
          aggressive="montserratAlternates_Medium_002"
          color={theme.colors.gray_001}
        >
          Favorite Language
        </Typography>
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
