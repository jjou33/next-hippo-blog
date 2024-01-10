import Link from 'next/link'

import { IconBox, Badge, Typography } from 'components/common'
import { NavigationIconSet } from 'public/static/icon'
import { FlexBox } from 'components/common/StyledLayout'
import { convertUpperToPrefix } from 'utils/stringUtils'
import theme from 'styles/theme'
import * as S from './styles'

interface NavSubCategoryProps {
  items: string[]
  count: {
    [key: string]: number
  }
}
const NavSubCategory = ({ items, count }: NavSubCategoryProps) => {
  return (
    <S.NavSubItemContainer>
      {items.map(value => (
        <S.NavSubItemWrapper key={value}>
          <Link href={{ pathname: `/posts/${value}`, query: { page: 1 } }}>
            <S.NavSubItemTitle>
              <FlexBox>
                <IconBox width={'20px'} height={'20px'}>
                  {NavigationIconSet.Arrow.icon(theme.color.nav_icon_001)}
                </IconBox>
                <IconBox width={'23px'} height={'23px'}>
                  {NavigationIconSet[value].icon()}
                </IconBox>
              </FlexBox>

              <Typography
                variant={'span'}
                aggressive={'montserratAlternates_Regular_002'}
                color={theme.color.text_001}
              >
                {convertUpperToPrefix(value)}
              </Typography>
              <Badge
                borderRadius={'20px'}
                color={theme.color.badge_001}
                backgroundColor={'transparent'}
                aggressive={'headline_small_002'}
                padding={'0 8px'}
                border={'0.1px solid'}
              >
                {count[value]}
              </Badge>
            </S.NavSubItemTitle>
          </Link>
        </S.NavSubItemWrapper>
      ))}
    </S.NavSubItemContainer>
  )
}

export default NavSubCategory
