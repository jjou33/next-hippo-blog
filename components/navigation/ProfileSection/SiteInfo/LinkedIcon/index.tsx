import * as S from './styles'

import IconBox from 'components/common/IconBox'

import { ProfileIconSet } from 'public/static/icon'

interface LinkStyleBoxProps {
  color1: string
  color2: string
  iconName: string
  title: string
}

const LinkedIcon = ({ color1, color2, iconName, title }: LinkStyleBoxProps) => {
  return (
    <S.LinkItemContainer>
      <S.LinkItemWrapper
        background={`linear-gradient(45deg, ${color1}, ${color2})`}
      >
        <S.LinkItemIcon>
          <IconBox width="30px" height="30px">
            {ProfileIconSet[iconName].icon()}
          </IconBox>
        </S.LinkItemIcon>
        <S.LinkItemTitle>{title}</S.LinkItemTitle>
      </S.LinkItemWrapper>
    </S.LinkItemContainer>
  )
}

export default LinkedIcon
