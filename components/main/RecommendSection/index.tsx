import * as S from './styles'

import theme from 'styles/theme'
import RecommendCategory from 'components/main/RecommendSection/RecommendGrid'

import { Typography, StyledLayout } from 'components/common'

const RecommendSection = () => {
  return (
    <S.RecommendWrapper>
      <Typography variant="h2" aggressive="headline_medium_002">
        추천 카테고리 🎖
      </Typography>
      <Typography
        variant="h2"
        aggressive="body_oneline_003"
        color={theme.colors.gray_004}
        margin="1rem 0 0 0"
      >
        제가 많이 참고하고 좋은 내용을 담고 있는 사이트를 모아봤습니다!
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
