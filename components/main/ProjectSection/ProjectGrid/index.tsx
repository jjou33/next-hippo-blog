import ProjectItem from '../ProjectItem'
import * as S from './styles'
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
