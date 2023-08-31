import * as S from './styles'

import Image from 'next/image'
import theme from 'styles/theme'
import ColorText from 'components/common/ColorText'
import TypingSection from './TypingSection'

import { useChangeOpacityByScroll } from 'hooks/useScrollAnimation'
import { useImageIndexSlider } from 'hooks/useIntervalAnimation'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import { FireCrackerDynamicLottie } from 'components/common/Lottie/FireCracker'

const HeroSection = () => {
  const images = [
    '/static/images/landing.jpg',
    '/static/images/landing2.jpg',
    '/static/images/landing3.jpg',
  ]

  const currentPercentage = useChangeOpacityByScroll()
  const { currentImage, visible } = useImageIndexSlider(images)

  return (
    <S.HeroImageContainer>
      <S.ImageContainer visible={visible}>
        <Image
          src={images[currentImage]}
          alt={'alt'}
          fill
          style={{
            objectFit: 'cover',
            zIndex: '-1',
            filter: 'brightness(50%)',
          }}
        />
      </S.ImageContainer>
      <S.FireCrackerWrapper>
        <FireCrackerDynamicLottie />
      </S.FireCrackerWrapper>
      <S.HeroInfoContainer currentPercentage={currentPercentage}>
        <FlexBox
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          textAlign="center"
          gap="1rem"
        >
          <ColorText
            text="Welcome To Hippo Dev Blog !"
            aggressive="montserratAlternates_Medium_001"
          />

          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="0px 0 16px 0"
            color={theme.colors.gray_002}
          />
          <TypingSection />
          <S.MouseIndicatorWrapper>
            <S.MouseIndicator></S.MouseIndicator>
          </S.MouseIndicatorWrapper>
        </FlexBox>
      </S.HeroInfoContainer>
    </S.HeroImageContainer>
  )
}

export default HeroSection
