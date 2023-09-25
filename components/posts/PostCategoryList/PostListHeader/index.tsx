import * as S from './styles'

import Image from 'next/image'
import theme from 'styles/theme'
import MotionShowBox from 'components/common/Motion/MotionShowBox'

import { Typography } from 'components/common'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import { GiftBoxLottie, IndicatorLottie } from 'components/common/Lottie'
import { PostData } from 'types/post'
import { useTypingTitle } from 'hooks/useIntervalAnimation'
import { FireCrackerDynamicLottie } from 'components/common/Lottie/FireCracker'

const PostListHeader = ({
  categoryId,
  postInfo,
}: {
  categoryId: string | string[]
  postInfo: PostData[]
}) => {
  const { category1depth, category2depth } = postInfo[0]
  const TYPINGLIST = {
    LIST: ['Closure', 'Javascript', 'ES6'],
  }
  const currentTitle = useTypingTitle(TYPINGLIST.LIST)
  return (
    <S.HeroImageContainer>
      <FlexBox
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        position="relative"
        width="100%"
        height="100%"
        padding={'0 2rem'}
      >
        <Image
          src={`/static/images/${category1depth}/${category2depth}/headImage.png`}
          alt={'alt'}
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.4)',
            zIndex: '-1',
          }}
        />

        <FlexBox flexDirection="column" position="absolute" margin="0 auto">
          <S.LottieContainer>
            <FireCrackerDynamicLottie />
          </S.LottieContainer>
          <MotionShowBox showDirection="down">
            <S.TextContainer>
              <Typography
                variant="h3"
                aggressive="montserratAlternates_Medium_001"
                color={theme.colors.gray_000}
                align="center"
              >
                {`You Can Find Here`}
              </Typography>
            </S.TextContainer>
            <Divider
              direction="horizontal"
              width="100%"
              height="1px"
              margin="20px 0 0 0"
              color={theme.colors.gray_002}
            />
          </MotionShowBox>
          <S.DynamicTextBox>
            <Typography
              variant="span"
              aggressive="montserratAlternates_Medium_001"
              color={theme.colors.primary_006}
            >
              {`About ${currentTitle}`}
            </Typography>
          </S.DynamicTextBox>
        </FlexBox>
        <FlexBox justifyContent="center" margin="5rem 0 0 0">
          <S.MouseIndicatorWrapper>
            <S.MouseIndicator></S.MouseIndicator>
          </S.MouseIndicatorWrapper>
        </FlexBox>
      </FlexBox>
    </S.HeroImageContainer>
  )
}

export default PostListHeader
