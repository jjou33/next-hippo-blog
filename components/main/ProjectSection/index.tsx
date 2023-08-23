import { Typography } from 'components/common'
import { Divider } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import ProjectGrid from './ProjectGrid'
import * as S from './styles'
const ProjectSection = () => {
  return (
    <S.ProjectWrapper>
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
    </S.ProjectWrapper>
  )
}

export default ProjectSection
