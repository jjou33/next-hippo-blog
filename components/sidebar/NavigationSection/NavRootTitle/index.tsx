import ColorText from 'components/common/ColorText'
import Link from 'next/link'
import * as S from './styles'

const NavRootTitle = () => {
  return (
    <S.NavRootContainer>
      <S.NavRootTextWrapper>
        <Link href="/">
          <ColorText text="Total Contents" />
        </Link>
      </S.NavRootTextWrapper>
    </S.NavRootContainer>
  )
}

export default NavRootTitle
