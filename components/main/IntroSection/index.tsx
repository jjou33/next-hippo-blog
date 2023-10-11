import * as S from './styles'

import IntroLottie from 'components/common/Lottie/Intro'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
import ColorText from 'components/common/ColorText'

import { Typography } from 'components/common'
import { ColorBorderBox } from 'components/common/StyledLayout'
import { FireCrackerStaticLottie } from 'components/common/Lottie/FireCracker'
import { themedPalette } from 'styles/themeVariables'

const IntroSection = () => {
  const INTRO_INFO = {
    TITLE: `Don't dream, Be it`,
    AUTHOR: 'Tim curry',
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
              aggressive="montserratAlternates_Medium_003"
              margin="1rem 0"
              color={themedPalette.text_color}
            >
              {INTRO_INFO.TITLE}
            </Typography>
            <Typography
              variant="h2"
              aggressive="montserratAlternates_Regular_001"
              margin="1rem 0"
              color={themedPalette.text_color}
            >
              {`- ${INTRO_INFO.AUTHOR} -`}
            </Typography>
            <Typography
              variant="h2"
              aggressive="body_oneline_001"
              color={themedPalette.sub_text_color2}
            >
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
