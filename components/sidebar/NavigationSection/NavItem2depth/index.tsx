import Link from 'next/link'
import * as S from './styles'

const NavItem2depth = () => {
  const DUMMY_DATA = ['item', 'item', 'item', 'item', 'item']

  return (
    <S.NavItemContainer>
      {DUMMY_DATA.map(item => (
        <S.NavItemWrapper key={item}>
          <S.NavItem2depthArrorw isOpen={true} />
          <Link href="/">
            <S.NavItemTitle>{item}</S.NavItemTitle>
          </Link>
        </S.NavItemWrapper>
      ))}
    </S.NavItemContainer>
  )
}

export default NavItem2depth
