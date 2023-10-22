import * as S from './styles'

import DATA from 'constants/data'
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
  return (
    <S.ProjectWrapper>
      <SectionHeader
        title={DATA.PROJECT_INFO.HEADER.TITLE}
        subTitle={DATA.PROJECT_INFO.HEADER.SUB_TITLE}
      />
      <ProjectGrid />
    </S.ProjectWrapper>
  )
}

export default ProjectSection
