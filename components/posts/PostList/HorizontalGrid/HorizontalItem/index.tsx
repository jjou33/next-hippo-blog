import * as S from './styles'
import Image from 'next/image'
import theme from 'styles/theme'

import { Badge, Typography } from 'components/common'
import {
  Divider,
  FlexBox,
  StyledImageBox,
} from 'components/common/StyledLayout'
import { MainIconSet } from 'public/static/icon'

import type { PostData } from 'types/post'
interface HorizontalItemProps {
  posts: PostData
}

const HorizontalItem = ({
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
}: HorizontalItemProps) => {
  const formattedDate = new Date(date).toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <S.ItemContainer href={`/posts/${category2depth}/${slug}`}>
      <S.ItemContentsWrapper>
        <FlexBox margin={'0 0 0.2rem 0'}>
          {keywords.map((keyword: string) => (
            <Badge
              borderRadius="2rem"
              backgroundColor="#fc5460"
              color="white"
              aggressive="body_oneline_006"
              padding="5px 10px"
              margin="10px 10px 10px 0"
              key={keyword}
            >
              {keyword}
            </Badge>
          ))}
        </FlexBox>
        <Typography
          variant="h3"
          aggressive="gmarketSans_bold_001"
          color={theme.colors.gray_006}
        >
          {title}
        </Typography>
        <Divider
          direction="horizontal"
          width="100%"
          height="1px"
          margin="15px 0 10px 0"
          color={theme.colors.gray_002}
        />
        <FlexBox margin={'0.5rem 0'} alignItems={'center'} gap={'0.6rem'}>
          <S.IconWrapper>{MainIconSet['Calander'].icon()}</S.IconWrapper>
          <Typography
            variant="span"
            aggressive="body_oneline_006"
            color={theme.colors.gray_004}
          >
            {formattedDate}
          </Typography>
        </FlexBox>

        <Typography
          variant="p"
          aggressive="body_multiline_003"
          overFlow="hidden"
          textOverflow="ellipsis"
        >
          {`${excerpt}`}
        </Typography>
      </S.ItemContentsWrapper>

      <S.ImageWrapper>
        <Image
          src={`/static/images/${category1depth}/${category2depth}/${image}`}
          alt="alt"
          fill
          style={{ objectFit: 'cover' }}
        />
      </S.ImageWrapper>
    </S.ItemContainer>
  )
}

export default HorizontalItem
