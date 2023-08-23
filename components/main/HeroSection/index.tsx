import Image from 'next/image'

import { useTypingTitle } from 'hooks/useTypingTitle'
import * as S from './styles'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import { Typography } from 'components/common'
import theme from 'styles/theme'
import ColorText from 'components/common/ColorText'

const HeroSection = () => {
  const imagePath = `/static/images/pixel3.gif`
  const currentTitle = useTypingTitle([
    'Typescript',
    'Javascript',
    'NextJS',
    'React',
  ])
  return (
    <S.HeroImageContainer>
      <Image
        src={imagePath}
        alt={'alt'}
        fill
        style={{
          objectFit: 'cover',
          zIndex: '-1',
          filter: 'brightness(50%)',
        }}
      />
      <S.HeroInfoContainer>
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
          <FlexBox gap="2rem">
            <S.HeroWriteContainer>
              <Typography
                variant="h3"
                aggressive="montserratAlternates_Bold_002"
                color={theme.colors.gray_001}
              >
                FAVORITE Language
                <Divider
                  direction="horizontal"
                  width="100%"
                  height="1px"
                  margin="10px 0 5px 0"
                  color={theme.colors.gray_002}
                />
                : {currentTitle}
              </Typography>{' '}
              <Typography
                variant="h3"
                aggressive="montserratAlternates_Bold_002"
                color={theme.colors.gray_001}
              >
                FAVORITE Language
                <Divider
                  direction="horizontal"
                  width="100%"
                  height="1px"
                  margin="10px 0 5px 0"
                  color={theme.colors.gray_002}
                />
                : {currentTitle}
              </Typography>
            </S.HeroWriteContainer>
            <S.HeroWriteContainer>
              <Typography
                variant="h3"
                aggressive="montserratAlternates_Bold_002"
                color={theme.colors.gray_001}
              >
                FAVORITE Language
                <Divider
                  direction="horizontal"
                  width="100%"
                  height="1px"
                  margin="10px 0 5px 0"
                  color={theme.colors.gray_002}
                />
                : {currentTitle}
              </Typography>
              <Typography
                variant="h3"
                aggressive="montserratAlternates_Bold_002"
                color={theme.colors.gray_001}
              >
                FAVORITE Language
                <Divider
                  direction="horizontal"
                  width="100%"
                  height="1px"
                  margin="10px 0 5px 0"
                  color={theme.colors.gray_002}
                />
                : {currentTitle}
              </Typography>
            </S.HeroWriteContainer>
          </FlexBox>
          {/* <Typography
            variant="h4"
            aggressive="montserratAlternates_Bold_001"
            color={theme.colors.gray_001}
          >
            WE STUDY {currentTitle}
          </Typography> */}
          <S.MouseIndicatorWrapper>
            <S.MouseIndicator></S.MouseIndicator>
          </S.MouseIndicatorWrapper>
        </FlexBox>
      </S.HeroInfoContainer>
    </S.HeroImageContainer>
  )
}

export default HeroSection
