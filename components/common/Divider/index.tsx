import { MainIconSet } from 'public/static/icon'
import * as S from './styles'

const StyledDivider = () => {
  return (
    <S.Container>
      <S.Wrapper>{MainIconSet['Divider2'].icon()}</S.Wrapper>
    </S.Container>
  )
}

export default StyledDivider
