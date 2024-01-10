import { useScrollStateBar } from 'hooks/useScrollAnimation'
import * as S from './styles'

const ScrollBar = () => {
  const scroll = useScrollStateBar()
  return (
    <S.ProgressBarContainer>
      <S.ProgressBar scroll={scroll} />
    </S.ProgressBarContainer>
  )
}

export default ScrollBar
