import Link from 'next/link'
import * as S from './styles'
import IconBox from 'components/common/IconBox'
import { Arrow } from 'public/static/icon'
import { Badge, Typography } from 'components/common'

const NavItem2depth = () => {
  const DUMMY_DATA = ['item', 'item', 'item', 'item', 'item']

  return (
    <S.NavItemContainer>
      {DUMMY_DATA.map(item => (
        <S.NavItemWrapper key={item}>
          <IconBox width="25px" height="25px">
            <Arrow />
          </IconBox>
          <Link href="/">
            <S.NavItemTitle>
              <Typography variant="span" aggressive="body_oneline_003">
                {item}
              </Typography>
              <Badge
                borderRadius="10px"
                color="red"
                aggressive="body_multiline_005"
                padding="0 5px"
                margin="0 0 0 10px"
                border="1px solid"
              >
                33
              </Badge>
            </S.NavItemTitle>
          </Link>
        </S.NavItemWrapper>
      ))}
    </S.NavItemContainer>
  )
}

export default NavItem2depth
