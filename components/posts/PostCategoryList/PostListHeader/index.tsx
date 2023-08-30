import * as S from './styles'
import Image from 'next/image'
import theme from 'styles/theme'
import { Typography } from 'components/common'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import FlyingAirplaneLottie from 'components/common/Lottie/FlyingAirplane'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
import { IndicatorLottie } from 'components/common/Lottie'

const PostListHeader = ({ categoryId, mainCategory }) => {
  console.log('props2 : ', categoryId)
  const imagePath = `/static/images/next1.jpg`

  return (
    <S.HeroImageContainer>
      <FlexBox
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        position="relative"
        width="100%"
        height="100%"
      >
        <Image
          src={imagePath}
          alt={'alt'}
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.5)',
            zIndex: '-1',
          }}
        />

        <FlexBox flexDirection="column" position="absolute" margin="0 auto">
          <MotionShowBox showDirection="down">
            <Typography
              variant="h3"
              aggressive="montserratAlternates_Medium_001"
              color={theme.colors.gray_000}
            >
              Look Arround
            </Typography>
            <Typography
              variant="span"
              aggressive="montserratAlternates_Medium_001"
              color={theme.colors.primary_008}
              // align="center"
            >
              {`${mainCategory} / ${categoryId}`}
            </Typography>
            {/* <FlexBox gap="1rem">
              <Typography
                variant="span"
                aggressive="montserratAlternates_Medium_001"
                color={theme.colors.gray_000}
                // align="center"
              >
                About
              </Typography>
              <Typography
                variant="span"
                aggressive="montserratAlternates_Medium_001"
                color={theme.colors.primary_008}
                // align="center"
              >
                {`${mainCategory} / ${categoryId}`}
              </Typography>
            </FlexBox> */}
          </MotionShowBox>
          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="20px 0 10px 0"
            color={theme.colors.gray_002}
          />
          <S.BookOpenerLottieWrapper>
            <FlyingAirplaneLottie />
          </S.BookOpenerLottieWrapper>
        </FlexBox>
        <FlexBox justifyContent="center" margin="5rem 0 0 0">
          <S.IndicatorWrapper>
            <IndicatorLottie />
          </S.IndicatorWrapper>
        </FlexBox>
      </FlexBox>
    </S.HeroImageContainer>
  )
}

export default PostListHeader
