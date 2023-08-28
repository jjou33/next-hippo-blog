import * as S from './styles'

import Typography from '../Typography'
import theme from 'styles/theme'

import { UnorderList, LinkWrapper } from 'components/common/StyledLayout'

import { useHeaderSticky } from 'hooks/useHeaderSticky'
const Header = () => {
  const isHeaderSticky = useHeaderSticky()

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
          <UnorderList gap={'40px'}>
            <S.NavigationItem>
              <LinkWrapper href={'/posts'}>
                <Typography
                  variant="span"
                  aggressive="button_001"
                  color={theme.colors.gray_003}
                >
                  POST
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
