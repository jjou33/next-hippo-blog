import * as S from './styles'

import theme from 'styles/theme'
import ColorText from 'components/common/ColorText'
import TypingSection from './TypingSection'

import { useChangeOpacityByScroll } from 'hooks/useScrollAnimation'
import { useImageIndexSlider } from 'hooks/useIntervalAnimation'
import { Divider, FlexBox } from 'components/common/StyledLayout'

const HeroSection = () => {
  const IMAGE_DATA = {
    LIST: [
      '/static/images/HeroImage/landing.jpg',
      '/static/images/HeroImage/landing2.jpg',
      '/static/images/HeroImage/landing3.jpg',
    ],
  }

  const currentPercentage = useChangeOpacityByScroll()
  const currentImage = useImageIndexSlider(IMAGE_DATA.LIST)

  return (
    <S.HeroImageContainer>
      {IMAGE_DATA.LIST.map((image, index) => (
        <S.StyledImage
          key={index}
          src={image}
          alt={'Hero Image'}
          fill
          selected={index === currentImage}
        />
      ))}
      <S.HeroInfoContainer currentPercentage={currentPercentage}>
        <FlexBox
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          textAlign="center"
          gap="1rem"
          padding={'0 2rem'}
        >
          <ColorText
            text="Have A Good Dev Trip"
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
