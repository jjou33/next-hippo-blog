import NavigationSection from './NavigationSection'
import ProfileSection from './ProfileSection'

import * as S from './styles'

const SideBar = ({ navList }) => {
  return (
    <S.SideNavContainer>
      <S.SideNavWrapper>
        <ProfileSection />
        <NavigationSection navList={navList} />
      </S.SideNavWrapper>
    </S.SideNavContainer>
  )
}

export default SideBar
