import { Typography } from 'components/common'
import { filterProps } from 'framer-motion'
import PostGrid from '../PostGrid'
import * as S from './styles'

const AllPost = props => {
  return (
    <S.AllPostContainer>
      <Typography variant="h1" aggressive="headline_oneline_001">
        AllPost
      </Typography>
      <PostGrid posts={props.posts} />
    </S.AllPostContainer>
  )
}

export default AllPost
