import * as S from './styles'
import theme from 'styles/theme'
import Link from 'next/link'

import { Badge, Typography } from 'components/common'
import {
  Divider,
  FlexBox,
  StyledImageBox,
} from 'components/common/StyledLayout'
import { useInfiniteScroll } from 'hooks/useInfiniteScroll'
import { MainIconSet } from 'public/static/icon'

import type { PostData } from 'types/post'

interface VerticalItemProps {
  posts: PostData
  index: number
}
const VerticalItem = ({
  posts: {
    title,
    image,
    excerpt,
    date,
    slug,
    category1depth,
    category2depth,
    keywords,
  },
  index,
}: VerticalItemProps) => {
  const { ref, isInViewport } = useInfiniteScroll(index * 120)

  const formattedDate = new Date(date).toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <S.GridItemContainer ref={ref} inview={isInViewport}>
      <Link href={`/posts/${category2depth}/${slug}`}>
        <StyledImageBox height={'220px'} borderRadius={'20px 20px 0 0'}>
          <FlexBox>
            {keywords.map((keyword: string) => (
              <Badge
                borderRadius="2rem"
                backgroundColor={theme.colors.primary_003}
                aggressive="body_oneline_006"
                padding="5px 10px 5px 10px"
                margin="10px 0 0 10px"
                key={keyword}
              >
                {keyword}
              </Badge>
            ))}
          </FlexBox>
          <S.StyledImage
            src={`/static/images/${category1depth}/${category2depth}/${image}`}
            alt={title}
            fill
          />
        </StyledImageBox>
        <S.ContentsWrapper>
          <FlexBox margin={'0 0 1rem 0'} alignItems={'center'} gap={'0.6rem'}>
            <S.IconWrapper>{MainIconSet['Calander'].icon()}</S.IconWrapper>
            <Typography
              variant="span"
              aggressive="body_oneline_006"
              color={theme.colors.gray_004}
            >
              {formattedDate}
            </Typography>
          </FlexBox>
          <FlexBox margin={'0 0 1rem 0'} alignItems={'center'} gap={'0.6rem'}>
            <Typography
              variant="h3"
              aggressive="gmarketSans_bold_001"
              color={theme.colors.gray_006}
            >
              {title}
            </Typography>
          </FlexBox>
          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="1rem auto 0.5rem"
            color={theme.colors.gray_002}
          />

          <Typography variant="p" aggressive="body_multiline_005">
            {excerpt}
          </Typography>
        </S.ContentsWrapper>
      </Link>
    </S.GridItemContainer>
  )
}

export default VerticalItem
