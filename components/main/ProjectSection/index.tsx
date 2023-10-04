import * as S from './styles'

import ProjectGrid from './ProjectGrid'
import SectionHeader from '../SectionHeader'

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
      title: 'Vue3 차세대 프로젝트(실무)',
      keywords: ['Vue3', '공통 개발'],
      imagePath: '/static/images/Framework/Vue/headImage.png',
      linkPath: `posts/Vue?page=1`,
      content:
        '해당 프로젝트는 현재 실무에서 차세대 프로젝트에 참여하여 진행중인 프로젝트간 필요한 내용을 포스팅 합니다.',
    },
    {
      title: 'Blog By NextJS',
      keywords: ['NextJS', 'SSR', 'Blog'],
      imagePath: '/static/images/Framework/NextJS/headImage.png',
      linkPath: `posts/NextJS?page=1`,
      content:
        'NextJS 를 활용하여 개인 Blog 를 구축 기술 및 관련 내용을 기록하는 공간입니다.',
    },
  ]
  return (
    <S.ProjectWrapper>
      <SectionHeader
        title={'프로젝트 이야기 ✨'}
        subTitle={'진행했던 프로젝트들에 대한 기술 포스팅'}
      />
      <ProjectGrid projectInfo={projectInfo} />
    </S.ProjectWrapper>
  )
}

export default ProjectSection
