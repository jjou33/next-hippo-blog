import * as S from './styles'

import theme from 'styles/theme'
import ProjectGrid from './ProjectGrid'

import { Typography } from 'components/common'
import { Divider } from 'components/common/StyledLayout'

export interface ProjectInfoProps {
  title: string
  keywords: Array<string>
  imagePath: string
  linkPath: string
  content: string
}
const ProjectSection = () => {
  const projectInfo: ProjectInfoProps[] = [
    {
      title: 'Blog By GatsbyJS',
      keywords: ['Gatsby', 'Pnpm', 'Typescript', 'EmotionJS'],
      imagePath: '/static/images/Algorithm/dfs1.png',
      linkPath: `posts/dfs`,
      content:
        '해당 프로젝트는 현재 실무에서 차세대 프로젝트에 참여하여 진행중인 프로젝트간 필요한 내용을 포스팅 합니다.',
    },
    {
      title: 'Blog By NextJS',
      keywords: ['Gatsby', 'Pnpm', 'Typescript', 'EmotionJS'],
      imagePath: '/static/images/Algorithm/dfs1.png',
      linkPath: `posts/css`,
      content:
        '해당 프로젝트는 현재 실무에서 차세대 프로젝트에 참여하여 진행중인 프로젝트간 필요한 내용을 포스팅 합니다.',
    },
  ]
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
      <ProjectGrid projectInfo={projectInfo} />
    </S.ProjectWrapper>
  )
}

export default ProjectSection
