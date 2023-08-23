import { Typography } from 'components/common'
import IconBox from 'components/common/IconBox'
import { NavigationIconSet } from 'public/static/icon'
import theme from 'styles/theme'
import { useState } from 'react'

import * as S from './styles'

const NavItem1depth = ({ children, item, count }) => {
  const [openState, setOpenState] = useState(false)

  const stateHandler = () => {
    setOpenState(!openState)
  }
  return (
    <>
      <S.NavItem1depthContainer
        key={item}
        onClick={stateHandler}
        openState={openState}
      >
        <S.NavIconBox>
          <IconBox width="25px" height="25px">
            {NavigationIconSet[item].icon()}
          </IconBox>
        </S.NavIconBox>

        <Typography
          variant="span"
          aggressive="montserratAlternates_medium_002"
          color={theme.colors.gray_005}
        >
          {item}
        </Typography>
        <S.NavItem1depthArrorw isOpen={openState}>
          {NavigationIconSet['Arrow'].icon()}
        </S.NavItem1depthArrorw>
      </S.NavItem1depthContainer>

      <S.DropdownWrapper isOpen={openState} categoryItemCount={count}>
        {children}
      </S.DropdownWrapper>
    </>
  )
}

export default NavItem1depth
