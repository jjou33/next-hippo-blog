import NavigationSection from './NavigationSection'
import ProfileSection from './ProfileSection'

import * as S from './styles'

const Navigation = ({ category }) => {
  return (
    <S.SideNavContainer>
      <S.SideNavWrapper>
        <ProfileSection />
        <NavigationSection category={category} />
      </S.SideNavWrapper>
    </S.SideNavContainer>
  )
}

export default Navigation
