import * as S from './styles'
import Image from 'next/image'

import { Badge, Typography } from 'components/common'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import { MainIconSet } from 'public/static/icon'

import type { PostData } from 'types/post'
import theme from 'styles/theme'
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
        <FlexBox margin={'0 1rem 1rem 0'} flexWrap={'wrap'} gap={'1rem'}>
          {keywords.map((keyword: string) => (
            <Badge
              color={theme.color.badge_text}
              aggressive="body_oneline_003"
              key={keyword}
            >
              {keyword}
            </Badge>
          ))}
        </FlexBox>
        <Typography
          variant="h3"
          aggressive="body_oneline_bold_001"
          color={theme.color.text_color}
        >
          {title}
        </Typography>
        <Divider
          direction="horizontal"
          width="100%"
          height="1px"
          margin="15px 0 10px 0"
          color={theme.color.sub_text_color1}
        />
        <FlexBox margin={'0.5rem 0'} alignItems={'center'} gap={'0.6rem'}>
          <S.IconWrapper>{MainIconSet['Calander'].icon()}</S.IconWrapper>
          <Typography
            variant="span"
            aggressive="body_oneline_003"
            color={theme.color.text_color}
          >
            {formattedDate}
          </Typography>
        </FlexBox>

        <Typography
          variant="p"
          aggressive="body_oneline_002"
          overFlow="hidden"
          textOverflow="ellipsis"
          color={theme.color.sub_text_color2}
        >
          {`${excerpt}`}
        </Typography>
      </S.ItemContentsWrapper>

      <S.ImageWrapper>
        <Image
          src={`/static/images/${category1depth}/${category2depth}/${image}`}
          alt="alt"
          fill
          style={{ objectFit: 'cover', transition: '0.5s' }}
        />
      </S.ImageWrapper>
    </S.ItemContainer>
  )
}

export default HorizontalItem
