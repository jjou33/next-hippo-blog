import ColorText from 'components/common/ColorText'
import Link from 'next/link'
import * as S from './styles'

const NavRootTitle = () => {
  return (
    <S.NavRootContainer>
      <S.NavRootTextWrapper>
        <Link href="/">
          <ColorText
            text="TOTAL CONTENTS"
            aggressive="montserratAlternates_Regular_001"
          />
        </Link>
      </S.NavRootTextWrapper>
    </S.NavRootContainer>
  )
}

export default NavRootTitle