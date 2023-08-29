import { MainIconSet } from 'public/static/icon'
import * as S from './styles'

const WaveAnimation = () => {
  return (
    <S.WaveAnimationContainer>
      <S.WaveAnimationBox>{MainIconSet['Wave'].icon()}</S.WaveAnimationBox>
    </S.WaveAnimationContainer>
  )
}

export default WaveAnimation
