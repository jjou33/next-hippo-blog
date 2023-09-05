import * as S from './styles'

import { LoadingCircleLottie } from '../Lottie'

const LoadingSpinner = () => {
  return (
    <S.LoaddingContainer>
      <S.LoaddingWrapper>
        <LoadingCircleLottie />
      </S.LoaddingWrapper>
    </S.LoaddingContainer>
  )
}

export default LoadingSpinner
