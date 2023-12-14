import * as S from './styles'

const Text = ({ title, textColor }) => {
  return <S.TextWrapper color={textColor}>{title}</S.TextWrapper>
}

export default Text
