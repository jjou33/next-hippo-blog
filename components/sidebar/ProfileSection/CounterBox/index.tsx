import NumberCount from 'components/common/NumberCount'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import * as S from './styles'

const CounterBox = () => {
  return (
    <FlexBox flexDirection="column">
      <S.CounterContainer>
        <NumberCount number={33} name="총 게시글" />
        <NumberCount number={53} name="총 카테고리" />
      </S.CounterContainer>
      <Divider
        direction="horizontal"
        width="100%"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.colors.gray_002}
      />
    </FlexBox>
  )
}

export default CounterBox
