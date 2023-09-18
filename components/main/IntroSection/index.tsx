import * as S from './styles'

import IntroLottie from 'components/common/Lottie/Intro'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
import ColorText from 'components/common/ColorText'

import { Typography } from 'components/common'
import { ColorBorderBox } from 'components/common/StyledLayout'
import { FireCrackerStaticLottie } from 'components/common/Lottie/FireCracker'

const IntroSection = () => {
  const INTRO_INFO = {
    TITLE: '블로그를 찾아주신 모든분께 감사합니다!',
    SUBTITLE:
      ' 즐거운 개발 라이프를 지향하며, 더욱 좋은 개발자가 되기 위해 노력합니다 🧑🏼‍💻',
  } as const

  return (
    <S.IntroBorder>
      <ColorBorderBox
        width="150px"
        height="390%"
        background="linear-gradient(#4c00ff, #36f900);"
      >
        <S.IntroContainer>
          <MotionShowBox showDirection="down">
            <S.IntroLottieWrapper>
              <IntroLottie />
            </S.IntroLottieWrapper>
          </MotionShowBox>
          <S.IntroTextContainer>
            <Typography
              variant="h2"
              aggressive="headline_medium_002"
              margin="2rem 0"
            >
              <ColorText text="HIPPO DEVLOG" />
            </Typography>
            <Typography
              variant="h2"
              aggressive="headline_small_001"
              margin="1rem 0"
            >
              {INTRO_INFO.TITLE}
            </Typography>
            <Typography variant="h2" aggressive="body_oneline_001">
              {INTRO_INFO.SUBTITLE}
            </Typography>
            <S.IntroFireLottieWrapper>
              <FireCrackerStaticLottie />
            </S.IntroFireLottieWrapper>
          </S.IntroTextContainer>
        </S.IntroContainer>
      </ColorBorderBox>
    </S.IntroBorder>
  )
}

export default IntroSection
