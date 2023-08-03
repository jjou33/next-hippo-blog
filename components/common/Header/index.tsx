import * as S from './styles'
import {
  SubMaxContainer,
  UnorderList,
  LinkWrapper,
} from 'components/common/StyledLayout'
import Typography from '../Typography'
import theme from 'styles/theme'
const Header = () => {
  return (
    <S.Container>
      <SubMaxContainer>
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
      </SubMaxContainer>
    </S.Container>
  )
}

export default Header
