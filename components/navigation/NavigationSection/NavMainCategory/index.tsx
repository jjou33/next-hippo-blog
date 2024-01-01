import * as S from './styles'

import { IconBox } from 'components/common'
import { Typography } from 'components/common'
import { Fragment, PropsWithChildren, useState } from 'react'
import { NavigationIconSet } from 'public/static/icon'
import theme from 'styles/theme'

interface MainCategoryProps extends PropsWithChildren {
  item: string
  count: number
}
const NavMainCategory = ({ children, item, count }: MainCategoryProps) => {
  const [openState, setOpenState] = useState(false)

  const stateHandler = () => {
    setOpenState(!openState)
  }
  return (
    <Fragment>
      <S.NavMainCategoryItem
        key={item}
        onClick={stateHandler}
        openState={openState}
      >
        <S.NavIconBoxWrapper>
          <IconBox width="25px" height="25px">
            {NavigationIconSet[item].icon(theme.color.nav_icon_001)}
          </IconBox>
        </S.NavIconBoxWrapper>

        <Typography
          variant="span"
          aggressive="montserratAlternates_Regular_001"
          color={theme.color.text_001}
        >
          {item}
        </Typography>
        <S.NavItemArrowWrapper isOpen={openState}>
          {NavigationIconSet['Arrow'].icon(theme.color.nav_icon_001)}
        </S.NavItemArrowWrapper>
      </S.NavMainCategoryItem>

      <S.DropdownWrapper isOpen={openState} categoryItemCount={count}>
        {children}
      </S.DropdownWrapper>
    </Fragment>
  )
}

export default NavMainCategory
