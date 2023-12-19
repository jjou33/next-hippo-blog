import * as S from './styles'
import Link from 'next/link'

import { IconBox } from 'components/common'
import { Badge, Typography } from 'components/common'
import { NavigationIconSet } from 'public/static/icon'
import { FlexBox } from 'components/common/StyledLayout'
import { convertUpperToPrefix } from 'utils/stringUtils'
import theme from 'styles/theme'

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
                <IconBox width="20px" height="20px">
                  {NavigationIconSet['Arrow'].icon(theme.color.arrow_color)}
                </IconBox>
                <IconBox width="23px" height="23px">
                  {NavigationIconSet[value].icon()}
                </IconBox>
              </FlexBox>

              <Typography
                variant="span"
                aggressive="montserratAlternates_Regular_002"
                color={theme.color.sub_text_color1}
              >
                {convertUpperToPrefix(value)}
              </Typography>
              <Badge
                borderRadius="20px"
                color={theme.color.badge_color2}
                aggressive="headline_small_002"
                padding="0 8px"
                border="0.1px solid"
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
