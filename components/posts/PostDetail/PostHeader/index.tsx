import Image from 'next/image'
import theme from 'styles/theme'

import * as S from './styles'

import { Badge } from 'components/common'
import { FlexBox } from 'components/common/StyledLayout'
import { Typography } from 'components/common'
import { IndicatorLottie } from 'components/common/Lottie'

import type { PostData } from 'types/post'
import { themedPalette } from 'styles/themeVariables'

const PostHeader = ({
  postDetailInfo: {
    category1depth,
    category2depth,
    date,
    image,
    title,
    keywords,
  },
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
            filter: 'brightness(0.4)',
            zIndex: '-1',
          }}
          priority
        />

        <FlexBox flexDirection="column" position="absolute" margin="0 auto">
          <FlexBox
            margin="1rem auto"
            padding="5px"
            flexWrap={'wrap'}
            justifyContent={'center'}
          >
            {keywords.map(item => {
              return (
                <Badge
                  borderRadius="50px"
                  backgroundColor={themedPalette.badge_color}
                  aggressive="body_multiline_005"
                  padding="0.5rem 1rem"
                  margin="5px"
                  key={item}
                >
                  <Typography
                    variant="span"
                    aggressive="body_oneline_004"
                    color={themedPalette.badge_text}
                  >
                    {`# ${item}`}
                  </Typography>
                </Badge>
              )
            })}
          </FlexBox>
          <S.HeroTitleWrapper
            variant="h2"
            aggressive="headline_multiline_002"
            color={theme.colors.primary_003}
            align="center"
            padding={'0 2rem'}
          >
            {title}
          </S.HeroTitleWrapper>
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
