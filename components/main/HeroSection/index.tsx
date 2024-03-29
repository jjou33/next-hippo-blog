import DATA from 'constants/data'
import ColorText from 'components/common/ColorText'
import ComputerLottie from 'components/common/Lottie/computer'
import MotionShowBox from 'components/common/Motion/MotionShowBox'

import { useChangeOpacityByScroll } from 'hooks/useScrollAnimation'
import { useImageIndexSlider } from 'hooks/useIntervalAnimation'
import { FlexBox } from 'components/common/StyledLayout'
import * as S from './styles'

const HeroSection = () => {
  const currentPercentage = useChangeOpacityByScroll()
  const currentImage = useImageIndexSlider(DATA.IMAGES.HERO_IMAGES)

  return (
    <S.HeroImageContainer>
      {DATA.IMAGES.HERO_IMAGES.map((image, index) => (
        <S.StyledImage
          key={image}
          src={image}
          alt={'Hero Image'}
          fill
          sizes={'(max-width: 1300px) 100vw, 80vw'}
          selected={index === currentImage}
          priority
        />
      ))}
      <S.HeroInfoContainer currentPercentage={currentPercentage}>
        <FlexBox
          flexDirection={'column'}
          alignItems={'center'}
          justifyItems={'center'}
          textAlign={'center'}
          gap={'1rem'}
          padding={'0 2rem'}
        >
          <S.HeroContentsWrapper>
            <S.HeroTextWrapper>
              <ColorText
                text={"HIPPO'S DEV DIARY"}
                aggressive={'montserratAlternates_Medium_002'}
              />
            </S.HeroTextWrapper>
            <S.LottieWrapper>
              <MotionShowBox showDirection={'down'}>
                <ComputerLottie />
              </MotionShowBox>
            </S.LottieWrapper>
          </S.HeroContentsWrapper>

          <S.MouseIndicatorWrapper>
            <S.MouseIndicator />
          </S.MouseIndicatorWrapper>
        </FlexBox>
      </S.HeroInfoContainer>
    </S.HeroImageContainer>
  )
}

export default HeroSection
