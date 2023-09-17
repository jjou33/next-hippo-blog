import * as S from './styles'

import Image from 'next/image'
import theme from 'styles/theme'
import MotionShowBox from 'components/common/Motion/MotionShowBox'

import { Typography } from 'components/common'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import { IndicatorLottie } from 'components/common/Lottie'
import { PostData } from 'types/post'

const PostListHeader = ({
  categoryId,
  postInfo,
}: {
  categoryId: string | string[]
  postInfo: PostData[]
}) => {
  const { category1depth, category2depth } = postInfo[0]

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
            >
              {categoryId
                ? `${category1depth} / ${categoryId} 📚`
                : `All Post 📮`}
            </Typography>
          </MotionShowBox>
          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="20px 0 10px 0"
            color={theme.colors.gray_002}
          />
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
