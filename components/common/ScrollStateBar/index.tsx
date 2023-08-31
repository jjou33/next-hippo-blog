import * as S from './styles'
import { useScrollStateBar } from 'hooks/useScrollAnimation'

const ScrollBar = () => {
  const scroll = useScrollStateBar()
  return (
    <S.ProgressBarContainer>
      <S.ProgressBar scroll={scroll} />
    </S.ProgressBarContainer>
  )
}

export default ScrollBar
