import NumberCountBox from './NumberCountBox'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import LinkStyleBox from './LinkedIcon'

import * as S from './styles'

const SideInfo = () => {
  return (
    <FlexBox flexDirection="column">
      <FlexBox alignItems="center" justifyContent="center" margin="auto">
        <S.CounterContainer>
          <NumberCountBox number={33} name="총 게시글" />
          <NumberCountBox number={53} name="총 카테고리" />
        </S.CounterContainer>
      </FlexBox>
      <FlexBox margin="1rem auto">
        <LinkStyleBox />
      </FlexBox>
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

export default SideInfo
