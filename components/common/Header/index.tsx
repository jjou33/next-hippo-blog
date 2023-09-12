import * as S from './styles'

import theme from 'styles/theme'
import Typography from '../Typography'
import MenuOpenLottie from '../Lottie/bookOpener'

import { UnorderList, LinkWrapper } from 'components/common/StyledLayout'
import { useHeaderSticky } from 'hooks/useHeaderSticky'
import { useSetRecoilState } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'

const Header = () => {
  const isHeaderSticky = useHeaderSticky()

  const setMenuState = useSetRecoilState(menuOpenState)
  const NavigationHandler = () => {
    setMenuState((menuOpenState: boolean) => !menuOpenState)
  }
  return (
    <S.Container isHeaderSticky={isHeaderSticky}>
      <S.HeaderWrapper isHeaderSticky={isHeaderSticky}>
        <S.NavigationContentsWrapper isHeaderSticky={isHeaderSticky}>
          <S.NavBarButtonWrapper onClick={NavigationHandler}>
            <MenuOpenLottie />
          </S.NavBarButtonWrapper>

          <S.LogoWrapper href={'/'} hrefLang={'ko'}>
            <Typography
              variant="span"
              aggressive="body_oneline_001"
              color={theme.colors.gray_003}
            >
              HIPPO DEV
            </Typography>
          </S.LogoWrapper>
          <UnorderList gap={'40px'}>
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
          </UnorderList>
        </S.NavigationContentsWrapper>
      </S.HeaderWrapper>
    </S.Container>
  )
}

export default Header
