import NavItem1depth from './NavItem1depth'
import NavItem2depth from './NavItem2depth'
import NavRootTitle from './NavRootTitle'
import * as S from './styles'

const NavigationSection = ({ posts }) => {
  const DUMMY_DATA = [
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
  ]

  return (
    <S.NavigationContainer>
      <NavRootTitle />
      <S.NavigationGrid>
        {DUMMY_DATA.map(item => (
          <NavItem1depth item={item} key={item}>
            <NavItem2depth />
          </NavItem1depth>
        ))}
      </S.NavigationGrid>
    </S.NavigationContainer>
  )
}

export default NavigationSection
