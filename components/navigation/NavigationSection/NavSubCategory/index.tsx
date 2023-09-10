import Link from 'next/link'
import * as S from './styles'

import { Badge, Typography } from 'components/common'
import theme from 'styles/theme'
import IconBox from 'components/common/IconBox'
import { NavigationIconSet } from 'public/static/icon'
import { FlexBox } from 'components/common/StyledLayout'

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
                  {NavigationIconSet['Arrow'].icon()}
                </IconBox>
                <IconBox width="23px" height="23px">
                  {NavigationIconSet[value].icon()}
                </IconBox>
              </FlexBox>

              <Typography
                variant="span"
                aggressive="montserratAlternates_Regular_003"
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
            </S.NavSubItemTitle>
          </Link>
        </S.NavSubItemWrapper>
      ))}
    </S.NavSubItemContainer>
  )
}

export default NavSubCategory
