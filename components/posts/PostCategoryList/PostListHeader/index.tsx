import * as S from './styles'
import Image from 'next/image'
import theme from 'styles/theme'
import { Badge, Typography } from 'components/common'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import FlyingAirplaneLottie from 'components/common/Lottie/FlyingAirplane'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
import WaveAnimation from 'components/common/WaveAnimation'
import { IndicatorLottie } from 'components/common/Lottie'

const PostListHeader = props => {
  console.log('props2 : ', props.posts)
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
              aggressive="montserratAlternates_Bold_001"
              color={theme.colors.gray_000}
              align="center"
            >
              Look Arround About
            </Typography>
            <Typography
              variant="span"
              aggressive="montserratAlternates_Bold_001"
              color={theme.colors.primary_008}
            >
              Algrithm (DFS)
            </Typography>
          </MotionShowBox>
          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="20px 0 16px 0"
            color={theme.colors.gray_002}
          />
          <S.BookOpenerLottieWrapper>
            <FlyingAirplaneLottie />
          </S.BookOpenerLottieWrapper>
          {/* <FlexBox margin="0 auto" padding="5px" gap="6rem">
            <MotionShowBox showDirection="down">
              <Badge
                borderRadius="20px"
                backgroundColor={theme.colors.primary_003}
                aggressive="body_multiline_003"
                padding="10px"
                margin="15px auto"
              >
                {'DFS'}
              </Badge>
            </MotionShowBox>
            <MotionShowBox showDirection="down" delay={1}>
              <Badge
                borderRadius="20px"
                backgroundColor={theme.colors.primary_003}
                aggressive="body_multiline_003"
                padding="10px"
                margin="15px auto"
              >
                {'DFS'}
              </Badge>
            </MotionShowBox>
            <MotionShowBox showDirection="down" delay={2}>
              <Badge
                borderRadius="20px"
                backgroundColor={theme.colors.primary_003}
                aggressive="body_multiline_003"
                padding="10px"
                margin="15px auto"
              >
                {'DFS'}
              </Badge>
            </MotionShowBox>
          </FlexBox> */}
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
