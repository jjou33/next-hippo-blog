import * as S from './styles'

import ProjectItem from '../ProjectItem'

const ProjectGrid = () => {
  const imagePath = `/static/images/dfs/dfs.png`

  return (
    <S.GridContainer>
      <ProjectItem imagePath={imagePath} title="title" />
      <ProjectItem imagePath={imagePath} title="title" />
    </S.GridContainer>
  )
}

export default ProjectGrid
