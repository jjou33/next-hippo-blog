import * as S from './styles'
import theme from 'styles/theme'
import Image from 'next/image'
import Link from 'next/link'

import { Badge, Typography } from 'components/common'
import {
  Divider,
  FlexBox,
  StyledImageBox,
} from 'components/common/StyledLayout'
import { useInfiniteScroll } from 'hooks/useInfiniteScroll'

const HorizonItem = props => {
  const { title, image, excerpt, date, slug, category2depth } = props.post
  const { ref, isInViewport } = useInfiniteScroll()
  const formattedDate = new Date(date).toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/static/images/${slug}/${image}`
  const linkPath = `/posts/${category2depth}/${slug}`

  return (
    <S.GridItemContainer ref={ref} inview={isInViewport}>
      <Link href={linkPath}>
        <StyledImageBox height={'220px'}>
          <FlexBox>
            <Badge
              borderRadius="2rem"
              backgroundColor={theme.colors.subPrimary_001}
              aggressive="body_oneline_006"
              padding="5px 10px 5px 10px"
              margin="10px 0 0 10px"
            >
              Algorithm
            </Badge>
          </FlexBox>
          <Image
            src={imagePath}
            alt={title}
            fill
            style={{
              objectFit: 'cover',
              zIndex: -1,
              borderRadius: '20px 20px 0 0',
            }}
          />
        </StyledImageBox>
        <S.ContentsWrapper>
          <Typography variant="h3" aggressive="body_oneline_002">
            {title}
          </Typography>

          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="1rem auto 0"
            color={theme.colors.gray_002}
          />

          <S.TimeStampWrapper>
            <Typography
              variant="span"
              aggressive="body_oneline_006"
              color={theme.colors.gray_004}
            >
              {formattedDate}
            </Typography>
          </S.TimeStampWrapper>
          <Typography variant="p" aggressive="body_multiline_005">
            {excerpt}
          </Typography>
        </S.ContentsWrapper>
      </Link>
    </S.GridItemContainer>
  )
}

export default HorizonItem
