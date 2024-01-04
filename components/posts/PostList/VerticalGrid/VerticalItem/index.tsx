import * as S from './styles'

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
import theme from 'styles/theme'

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
          <FlexBox flexWrap="wrap" margin={'1rem'} gap={'0.5rem'}>
            {keywords.map((keyword: string) => (
              <Badge
                backgroundColor={theme.color.badge_001}
                color={theme.color.badge_text_001}
                aggressive="body_oneline_bold_small"
                key={keyword}
              >
                {`# ${keyword}`}
              </Badge>
            ))}
          </FlexBox>
          <S.StyledImage
            src={`/static/images/${category1depth}/${category2depth}/${image}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </StyledImageBox>
        <S.ContentsWrapper>
          <FlexBox margin={'0 0 1rem 0'} alignItems={'center'} gap={'0.6rem'}>
            <S.IconWrapper>{MainIconSet['Calander'].icon()}</S.IconWrapper>
            <Typography
              variant="span"
              aggressive="body_oneline_bold_small"
              color={theme.color.text_001}
            >
              {formattedDate}
            </Typography>
          </FlexBox>
          <FlexBox margin={'0 0 1rem 0'} alignItems={'center'} gap={'0.6rem'}>
            <Typography
              variant="h3"
              aggressive="body_oneline_bold_medium"
              color={theme.color.text_001}
            >
              {title}
            </Typography>
          </FlexBox>
          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="1rem auto 0.5rem"
            color={theme.color.divider_002}
          />

          <Typography
            variant="p"
            aggressive="body_oneline_002"
            color={theme.color.text_002}
          >
            {excerpt}
          </Typography>
        </S.ContentsWrapper>
      </Link>
    </S.GridItemContainer>
  )
}

export default VerticalItem
