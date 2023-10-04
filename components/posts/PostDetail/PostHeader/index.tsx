import Image from 'next/image'
import theme from 'styles/theme'

import * as S from './styles'

import { Badge } from 'components/common'
import { FlexBox } from 'components/common/StyledLayout'
import { Typography } from 'components/common'
import { IndicatorLottie } from 'components/common/Lottie'

import type { PostData } from 'types/post'

const PostHeader = ({
  postDetailInfo: { category1depth, category2depth, date, image, title },
}: {
  postDetailInfo: PostData
}) => {
  const formattedDate = new Date(date).toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <S.StyledImageContainer>
      <FlexBox
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        position="relative"
        width="100%"
        height="100%"
      >
        <Image
          src={`/static/images/${category1depth}/${category2depth}/${image}`}
          alt={title}
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.3)',
            zIndex: '-1',
          }}
        />
        <FlexBox
          flexDirection="column"
          position="absolute"
          margin="0 auto"
          padding={'0 5rem'}
        >
          <FlexBox margin="0 auto" padding="5px">
            <Badge
              borderRadius="10px"
              backgroundColor={theme.colors.primary_003}
              aggressive="body_multiline_003"
              padding="10px"
              margin="15px auto"
            >
              {title}
            </Badge>
          </FlexBox>
          <Typography
            variant="h2"
            aggressive="headline_multiline_001"
            color={theme.colors.primary_005}
            align="center"
          >
            {title}
          </Typography>
          <Typography
            variant="span"
            aggressive="body_multiline_000"
            color={theme.colors.gray_001}
            align="center"
            padding="20px 0 0 0"
          >
            {formattedDate} BY HIPPO DEV
          </Typography>
        </FlexBox>
        <FlexBox justifyContent="center" margin="5rem 0 0 0">
          <S.IndicatorWrapper>
            <IndicatorLottie />
          </S.IndicatorWrapper>
        </FlexBox>
      </FlexBox>
    </S.StyledImageContainer>
  )
}

export default PostHeader
