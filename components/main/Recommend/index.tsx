import { Typography, StyledLayout } from 'components/common'
import RecommendCategory from 'components/recommand'
import theme from 'styles/theme'

const RecommendList = () => {
  return (
    <StyledLayout.FlexBox
      flexDirection="column"
      width="996px"
      margin="64px 0 0 0"
    >
      <Typography variant="h1" aggressive="headline_oneline_001">
        추천 카테고리
      </Typography>
      <StyledLayout.Divider
        direction="horizontal"
        width="996px"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.colors.gray_002}
      />
      <RecommendCategory />
    </StyledLayout.FlexBox>
  )
}

export default RecommendList
