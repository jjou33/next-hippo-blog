import * as S from './styles'
import { UnorderList, LinkWrapper } from 'components/common/StyledLayout'
import Typography from '../Typography'
import theme from 'styles/theme'
import { useEffect, useState } from 'react'
const Header = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isSticky = window.scrollY > window.innerHeight
      setIsHeaderSticky(isSticky)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.Container isHeaderSticky={isHeaderSticky}>
      <S.HeaderWrapper isHeaderSticky={isHeaderSticky}>
        <S.NavigationContentsWrapper>
          <S.LogoWrapper href={'/'} hrefLang={'ko'}>
            <Typography variant="p" aggressive="body_oneline_001">
              HIPPO DEV
            </Typography>
          </S.LogoWrapper>
          <UnorderList gap={'40px'}>
            <S.NavigationItem>
              <LinkWrapper href={'/posts'}>
                <Typography
                  variant="h2"
                  aggressive="button_001"
                  color={theme.colors.gray_005}
                >
                  POST
                </Typography>
              </LinkWrapper>
            </S.NavigationItem>
            <S.NavigationItem>
              <LinkWrapper href={'/posts'}>
                <Typography
                  variant="h2"
                  aggressive="button_001"
                  color={theme.colors.gray_005}
                >
                  POST2
                </Typography>
              </LinkWrapper>
            </S.NavigationItem>
            <S.NavigationItem>
              <LinkWrapper href={'/posts'}>
                <Typography
                  variant="h2"
                  aggressive="button_001"
                  color={theme.colors.gray_005}
                >
                  POST2
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
