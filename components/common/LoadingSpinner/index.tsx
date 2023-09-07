import * as S from './styles'

import { LoadingCircleLottie } from '../Lottie'

const LoadingSpinner = () => {
  return (
    <S.LoadingBox>
      <S.LoaddingContainer>
        <S.LoaddingWrapper>
          <LoadingCircleLottie />
        </S.LoaddingWrapper>
      </S.LoaddingContainer>
    </S.LoadingBox>
  )
}

export default LoadingSpinner
