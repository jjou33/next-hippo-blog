import { Typography, StyledLayout } from 'components/common'
import RecommendCategory from 'components/main/RecommendSection/RecommendGrid'
import theme from 'styles/theme'
import * as S from './styles'

const RecommendList = () => {
  return (
    <S.RecommendContainer>
      <Typography variant="h2" aggressive="headline_oneline_002">
        🎖 추천 카테고리
      </Typography>
      <StyledLayout.Divider
        direction="horizontal"
        width="100%"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.colors.gray_002}
      />
      <RecommendCategory />
    </S.RecommendContainer>
  )
}

export default RecommendList
