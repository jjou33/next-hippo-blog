import { Badge } from 'components/common'
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
      <Badge
        borderRadius="5px"
        color="red"
        aggressive="body_multiline_003"
        padding="0 3px"
        border="1px solid"
      >
        33
      </Badge>
    </S.NavRootContainer>
  )
}

export default NavRootTitle
