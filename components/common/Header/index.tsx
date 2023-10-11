import * as S from './styles'

import theme from 'styles/theme'
import Typography from '../Typography'

import { UnorderList, LinkWrapper } from 'components/common/StyledLayout'
import { useHeaderSticky } from 'hooks/useHeaderSticky'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'
import { MainIconSet } from 'public/static/icon'
import { darkModeState } from 'states/darkModeThemeState'
import { useEffect, useState } from 'react'

const Header = props => {
  const currentTheme = useRecoilValue(darkModeState)
  const [isDark, setIsDark] = useState(null)
  const isHeaderSticky = useHeaderSticky()
  useEffect(() => {
    console.log('local : ', localStorage.getItem('theme'))
    console.log('current : ', currentTheme)
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
              variant="span"
              aggressive="body_oneline_001"
              color={theme.colors.gray_003}
            >
              HIPPO DEV
            </Typography>
          </S.LogoWrapper>
          <UnorderList gap={'20px'}>
            <S.DarkModeToggleContainer onClick={props.toggle}>
              {isDark === null ? (
                <></>
              ) : (
                <>
                  <S.DarModeItem show={!isDark}>
                    {MainIconSet['sun'].icon()}
                  </S.DarModeItem>
                  <S.DarModeItem show={isDark}>
                    {MainIconSet['moon'].icon()}
                  </S.DarModeItem>
                </>
              )}
            </S.DarkModeToggleContainer>
            <S.NavigationItem>
              <LinkWrapper href={'/posts?page=1'}>
                <Typography
                  variant="span"
                  aggressive="button_001"
                  color={theme.colors.gray_003}
                >
                  ALL POST
                </Typography>
              </LinkWrapper>
            </S.NavigationItem>

            <S.NavBarButtonWrapper onClick={NavigationHandler}>
              {MainIconSet['Menu'].icon()}
            </S.NavBarButtonWrapper>
          </UnorderList>
        </S.NavigationContentsWrapper>
      </S.HeaderWrapper>
    </S.Container>
  )
}

export default Header
