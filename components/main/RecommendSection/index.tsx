import * as S from './styles'

import theme from 'styles/theme'
import RecommendCategory from 'components/main/RecommendSection/RecommendGrid'

import { Typography, StyledLayout } from 'components/common'

const RecommendSection = () => {
  return (
    <S.RecommendWrapper>
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
    </S.RecommendWrapper>
  )
}

export default RecommendSection
