import * as S from './styles'

import DATA from 'constants/data'
import ProjectItem from '../ProjectItem'

const ProjectGrid = () => {
  return (
    <S.GridContainer>
      {DATA.PROJECT_INFO.LIST.map((projectItem, index) => (
        <ProjectItem {...projectItem} key={index} />
      ))}
    </S.GridContainer>
  )
}

export default ProjectGrid
