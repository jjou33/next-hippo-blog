import Link from 'next/link'
import * as S from './styles'

import { Badge, Typography } from 'components/common'
import theme from 'styles/theme'
import IconBox from 'components/common/IconBox'
import { NavigationIconSet } from 'public/static/icon'
import { FlexBox } from 'components/common/StyledLayout'

const NavItem2depth = ({ item, item2, count }) => {
  return (
    <S.NavItemContainer>
      {item2.map(value => (
        <S.NavItemWrapper key={value}>
          <Link href={`/posts/${value}`}>
            <S.NavItemTitle>
              <FlexBox>
                <IconBox width="20px" height="20px">
                  {NavigationIconSet['Arrow'].icon()}
                </IconBox>
                <IconBox width="23px" height="23px">
                  {NavigationIconSet[value].icon()}
                </IconBox>
              </FlexBox>

              <Typography
                variant="span"
                aggressive="headline_oneline_006"
                color={theme.colors.gray_005}
              >
                {value}
              </Typography>
              <Badge
                borderRadius="10px"
                color="red"
                aggressive="body_oneline_004"
                padding="0 5px"
                border="1px solid"
              >
                {count[value]}
              </Badge>
            </S.NavItemTitle>
          </Link>
        </S.NavItemWrapper>
      ))}
    </S.NavItemContainer>
  )
}

export default NavItem2depth
