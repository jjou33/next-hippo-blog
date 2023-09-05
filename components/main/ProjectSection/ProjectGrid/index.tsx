import * as S from './styles'

import ProjectItem from '../ProjectItem'

import type { ProjectInfoProps } from '../index'

const ProjectGrid = ({ projectInfo }: { projectInfo: ProjectInfoProps[] }) => {
  return (
    <S.GridContainer>
      {projectInfo.map((projectItem, index) => (
        <ProjectItem {...projectItem} key={index} />
      ))}
    </S.GridContainer>
  )
}

export default ProjectGrid
