import { Typography } from 'components/common'
import Image from 'next/image'
import * as S from './styles'
const PostHeader = props => {
  const { title, image } = props
  return (
    <S.HeaderContainer>
      <Typography variant="h1" aggressive="headline_oneline_005">
        {title}
      </Typography>
      <Image src={image} alt={title} width={200} height={150} />
    </S.HeaderContainer>
  )
}

export default PostHeader
