import * as S from './styles'

import styled, { css, keyframes } from 'styled-components'
import Image from 'next/image'
import theme from 'styles/theme'
import ColorText from 'components/common/ColorText'
import TypingSection from './TypingSection'

import { useChangeOpacityByScroll } from 'hooks/useScrollAnimation'
import { useImageIndexSlider } from 'hooks/useIntervalAnimation'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import { FireCrackerDynamicLottie } from 'components/common/Lottie/FireCracker'

const fade = keyframes`
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`

const StyledImage = styled(Image)<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0;
  filter: brightness(50%);
  ${({ isVisible }) => {
    console.log('v', typeof isVisible)
    if (isVisible) {
      return css`
        opacity: 1;
      `
    }
  }};
  transition: opacity 3s;
`
const HeroSection = () => {
  const images = [
    '/static/images/landing.jpg',
    '/static/images/landing2.jpg',
    '/static/images/landing3.jpg',
  ]

  const currentPercentage = useChangeOpacityByScroll()
  const currentImage = useImageIndexSlider(images)

  return (
    <S.HeroImageContainer>
      {images.map((image, index) => (
        <StyledImage
          key={index}
          src={image}
          alt={'alt'}
          fill
          isVisible={index === currentImage}
        />
      ))}
      {/* <StyledImage
        src={'/static/images/landing.jpg'}
        alt={'alt'}
        fill
        isVisible={0 === currentImage}
      />
      <StyledImage
        src={'/static/images/landing2.jpg'}
        alt={'alt'}
        fill
        isVisible={1 === currentImage}
      />
      <StyledImage
        src={'/static/images/landing3.jpg'}
        alt={'alt'}
        fill
        isVisible={2 === currentImage}
      /> */}
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
