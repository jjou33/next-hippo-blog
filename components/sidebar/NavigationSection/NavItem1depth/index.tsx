import { Typography } from 'components/common'
import IconBox from 'components/common/IconBox'
import { Arrow, Test } from 'public/static/icon'
import { useState } from 'react'

import * as S from './styles'

const NavItem1depth = ({ children, item }) => {
  const [openState, setOpenState] = useState(false)

  const stateHandler = () => {
    setOpenState(!openState)
  }
  return (
    <>
      <S.NavItem1depthContainer key={item} onClick={stateHandler}>
        <IconBox>
          <Test />
        </IconBox>

        <Typography variant="span" aggressive="body_oneline_001">
          {item}
        </Typography>
        <S.NavItem1depthArrorw isOpen={openState}>
          <Arrow />
        </S.NavItem1depthArrorw>
      </S.NavItem1depthContainer>

      <S.DropdownWrapper isOpen={openState} categoryItemCount={5}>
        {children}
      </S.DropdownWrapper>
    </>
  )
}

export default NavItem1depth
