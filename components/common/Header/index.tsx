import theme from 'styles/theme'
import { useHeaderSticky } from 'hooks/useHeaderSticky'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'
import { MainIconSet } from 'public/static/icon'
import { darkModeState } from 'states/darkModeThemeState'
import { useEffect, useState } from 'react'
import { Button } from '@hippodev/design-system'
import Typography from '../Typography'
import * as S from './styles'

const Header = ({ toggle }) => {
  const currentTheme = useRecoilValue(darkModeState)
  const [isDark, setIsDark] = useState(null)
  const isHeaderSticky = useHeaderSticky()
  useEffect(() => {
    setIsDark(currentTheme === 'dark')
  }, [currentTheme])
  const setMenuState = useSetRecoilState(menuOpenState)
  const NavigationHandler = () => {
    setMenuState((menuOpenState: boolean) => !menuOpenState)
  }

  return (
    <S.Container isHeaderSticky={isHeaderSticky}>
      <S.HeaderWrapper isHeaderSticky={isHeaderSticky}>
        <S.NavigationContentsWrapper isHeaderSticky={isHeaderSticky}>
          <S.LogoWrapper href={'/'} hrefLang={'ko'}>
            <Typography
              variant={'span'}
              aggressive={'body_oneline_001'}
              color={theme.color.deep_white}
            >
              <Button variant={'round'} label={'button'}>
                {'HIPPO DEV'}
              </Button>
            </Typography>
          </S.LogoWrapper>
          <S.DarkModeToggleContainer onClick={toggle}>
            {isDark === null ? (
              <></>
            ) : (
              <>
                <S.DarModeItem show={!isDark}>
                  {MainIconSet.sun.icon()}
                </S.DarModeItem>
                <S.DarModeItem show={isDark}>
                  {MainIconSet.moon.icon()}
                </S.DarModeItem>
              </>
            )}
          </S.DarkModeToggleContainer>
          <S.NavBarButtonWrapper onClick={NavigationHandler}>
            {MainIconSet.Menu.icon()}
          </S.NavBarButtonWrapper>
        </S.NavigationContentsWrapper>
      </S.HeaderWrapper>
    </S.Container>
  )
}

export default Header
