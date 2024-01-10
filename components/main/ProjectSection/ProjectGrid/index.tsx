import DATA from 'constants/data'
import * as S from './styles'

import ProjectItem from '../ProjectItem'

const ProjectGrid = () => {
  return (
    <S.GridContainer>
      {DATA.PROJECT_INFO.LIST.map(projectItem => (
        <ProjectItem {...projectItem} key={projectItem.title} />
      ))}
    </S.GridContainer>
  )
}

export default ProjectGrid
