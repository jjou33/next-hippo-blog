import { Typography } from 'components/common'
import { Divider, StyledImageBox } from 'components/common/StyledLayout'
import Image from 'next/image'
import Link from 'next/link'
import theme from 'styles/theme'
import * as S from './styles'
const VerticalItem = props => {
  const { title, image, excerpt, date, slug, category2depth } = props.post

  const formattedDate = new Date(date).toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/static/images/${slug}/${image}`
  const linkPath = `/posts/${category2depth}/${slug}`
  // console.log('link : ', linkPath)
  return (
    <Link href={linkPath}>
      <S.ItemContainer>
        <S.ItemContentsBox>
          <Typography variant="h3" aggressive="body_oneline_001">
            {title}
          </Typography>
          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="15px 0 20px 0"
            color={theme.colors.gray_002}
          />
          <S.TimeStamp>{formattedDate}</S.TimeStamp>
          <Typography variant="p" aggressive="body_multiline_005">
            {excerpt}
          </Typography>
        </S.ItemContentsBox>
        <StyledImageBox
          width="8rem"
          height="8rem"
          margin="1rem"
          borderRadius="20px"
        >
          <Image
            src={imagePath}
            alt="alt"
            fill
            style={{ objectFit: 'cover' }}
          />
        </StyledImageBox>
      </S.ItemContainer>
    </Link>
  )
}

export default VerticalItem
