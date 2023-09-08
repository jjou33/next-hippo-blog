import * as S from './styles'

import { LoadingCircleLottie } from '../Lottie'

const LoadingSpinner = ({ isLoading }) => {
  return (
    <S.LoadingBox isLoading={isLoading}>
      <S.LoaddingContainer>
        <S.LoaddingWrapper>
          <LoadingCircleLottie />
        </S.LoaddingWrapper>
      </S.LoaddingContainer>
    </S.LoadingBox>
  )
}

export default LoadingSpinner
