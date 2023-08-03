import { Typography } from 'components/common'
import { Divider } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

const PostItem = props => {
  const { title, image, excerpt, date, slug } = props.post

  const formattedDate = new Date(date).toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/static/images/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return (
    <S.GridItemContainer>
      <Link href={linkPath}>
        <S.ImageWrapper>
          <Image src={imagePath} alt={title} layout="fill" />
        </S.ImageWrapper>
        <S.ContentsWrapper>
          <Typography variant="h3" aggressive="headline_oneline_003">
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
        </S.ContentsWrapper>
      </Link>
    </S.GridItemContainer>
  )
}

export default PostItem
