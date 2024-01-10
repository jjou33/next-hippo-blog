import DATA from 'constants/data'
import Link from 'next/link'
import ColorText from 'components/common/ColorText'
import * as S from './styles'

const NavRootTitle = () => {
  return (
    <S.NavRootContainer>
      <S.NavRootTextWrapper>
        <Link href={'/'}>
          <ColorText
            text={DATA.ROOT_INFO.TITLE}
            aggressive={'montserratAlternates_Regular_001'}
          />
        </Link>
      </S.NavRootTextWrapper>
    </S.NavRootContainer>
  )
}

export default NavRootTitle
