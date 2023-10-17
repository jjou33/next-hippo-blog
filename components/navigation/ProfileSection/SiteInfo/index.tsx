import * as S from './styles'

import NumberCountBox from './NumberCountBox'
import LinkStyleBox from './LinkedIcon'

import { FlexBox } from 'components/common/StyledLayout'

interface NavItemType {
  linkItems: {
    color1: string
    color2: string
    iconName: string
    title: string
    href: string
  }[]
  numberItems: {
    number: number
    title: string
  }[]
}
const SideInfo = ({ linkItems, numberItems }: NavItemType) => {
  return (
    <FlexBox flexDirection="column">
      <FlexBox alignItems="center" justifyContent="center" margin="auto">
        <S.CounterContainer>
          {numberItems.map(numberItem => (
            <NumberCountBox {...numberItem} key={numberItem.title} />
          ))}
        </S.CounterContainer>
      </FlexBox>
      <FlexBox margin="1rem auto" gap="1.5rem">
        {linkItems.map((linkItem, index) => (
          <LinkStyleBox {...linkItem} key={index} />
        ))}
      </FlexBox>
    </FlexBox>
  )
}

export default SideInfo
