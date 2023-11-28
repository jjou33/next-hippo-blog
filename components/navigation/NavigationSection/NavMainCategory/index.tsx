import * as S from './styles'

import { IconBox } from 'components/common'
import { Typography } from 'components/common'
import { Fragment, PropsWithChildren, useState } from 'react'
import { NavigationIconSet } from 'public/static/icon'
import { themedPalette } from 'styles/themeVariables'

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
            {NavigationIconSet[item].icon(themedPalette.navIcon_color)}
          </IconBox>
        </S.NavIconBoxWrapper>

        <Typography
          variant="span"
          aggressive="montserratAlternates_Regular_001"
          color={themedPalette.text_color}
        >
          {item}
        </Typography>
        <S.NavItemArrowWrapper isOpen={openState}>
          {NavigationIconSet['Arrow'].icon(themedPalette.arrow_color)}
        </S.NavItemArrowWrapper>
      </S.NavMainCategoryItem>

      <S.DropdownWrapper isOpen={openState} categoryItemCount={count}>
        {children}
      </S.DropdownWrapper>
    </Fragment>
  )
}

export default NavMainCategory
