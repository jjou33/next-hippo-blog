import * as S from './styles'
import IconBox from 'components/common/IconBox'
import { ProfileIconSet } from 'public/static/icon'
const LinkStyleBox = () => {
  return (
    <S.LinkItemContainer>
      <S.LinkItemWrapper color1="#f97253" color2="#f7cb80">
        <S.LinkItemIcon>
          <IconBox width="30px" height="30px">
            {ProfileIconSet['Git'].icon()}
          </IconBox>
        </S.LinkItemIcon>
        <S.LinkItemTitle>GITHUB</S.LinkItemTitle>
      </S.LinkItemWrapper>
      <S.LinkItemWrapper color1="#8a7240" color2="#e68e66">
        <S.LinkItemIcon>
          <IconBox width="30px" height="30px">
            {ProfileIconSet['Email'].icon()}
          </IconBox>
        </S.LinkItemIcon>
        <S.LinkItemTitle>CONTACT</S.LinkItemTitle>
      </S.LinkItemWrapper>
    </S.LinkItemContainer>
  )
}

export default LinkStyleBox
