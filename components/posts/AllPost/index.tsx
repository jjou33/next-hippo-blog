import { Typography } from 'components/common'
import { Divider } from 'components/common/StyledLayout'
import PostGrid from '../PostGrid'
import AllPostGrid from './AllPostGrid'
import * as S from './styles'
import theme from 'styles/theme'
const AllPost = props => {
  return (
    <S.AllPostContainer>
      <Typography variant="h1" aggressive="headline_oneline_001">
        AllPost
      </Typography>
      <Divider
        direction="horizontal"
        width="100%"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.colors.gray_002}
      />
      <AllPostGrid posts={props.posts} />
    </S.AllPostContainer>
  )
}

export default AllPost
