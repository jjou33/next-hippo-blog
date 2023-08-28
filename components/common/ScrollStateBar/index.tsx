import * as S from './styles'
import { useScrollStateBar } from 'hooks/useScrollStateBar'

const ScrollBar = () => {
  const scroll = useScrollStateBar()
  return (
    <S.ProgressBarContainer>
      <S.ProgressBar scroll={scroll} />
    </S.ProgressBarContainer>
  )
}

export default ScrollBar
