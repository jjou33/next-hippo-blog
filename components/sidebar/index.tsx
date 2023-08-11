import NavigationSection from './NavigationSection'
import ProfileSection from './ProfileSection'

import * as S from './styles'

const SideBar = () => {
  return (
    <S.SideNavContainer>
      <S.SideNavWrapper>
        <ProfileSection />
        <NavigationSection />
      </S.SideNavWrapper>
    </S.SideNavContainer>
  )
}

export default SideBar
