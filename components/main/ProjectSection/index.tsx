import { Typography } from 'components/common'
import { Divider } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import ProjectGrid from './ProjectGrid'
import * as S from './styles'
const ProjectSection = () => {
  return (
    // <FlexBox flexDirection="column" width="996px" margin="10px 0 0 0">
    <S.ProjectContainer>
      <Typography
        variant="h2"
        aggressive="headline_oneline_002"
        color={theme.colors.gray_007}
      >
        ✨ 사이드 프로젝트
      </Typography>
      <Divider
        direction="horizontal"
        width="100%"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.colors.gray_002}
      />
      <ProjectGrid />
    </S.ProjectContainer>
    // </FlexBox>
  )
}

export default ProjectSection
