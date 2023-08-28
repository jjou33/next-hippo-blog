import * as S from './styles'

import Image from 'next/image'
import theme from 'styles/theme'
import ColorText from 'components/common/ColorText'
import TypingSection from './TypingSection'

import { Divider, FlexBox } from 'components/common/StyledLayout'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const imagePath = `/static/images/heroBackground.gif`
  const [currentPercentage, setCurrentPercentage] = useState(1)
  useEffect(() => {
    const handleScroll = () => {
      const scroll = 1 - window.scrollY / window.innerHeight
      if (scroll <= 1 && scroll >= 0) {
        setCurrentPercentage(scroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <S.HeroImageContainer>
      <Image
        src={imagePath}
        alt={'alt'}
        fill
        style={{
          // objectFit: 'cover',
          zIndex: '-1',
          filter: 'brightness(50%)',
        }}
      />
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
            aggressive="montserratAlternates_Bold_001"
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
