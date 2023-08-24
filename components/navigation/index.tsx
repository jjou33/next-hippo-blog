import * as S from './styles'

import NavigationSection from './NavigationSection'
import ProfileSection from './ProfileSection'

import type { AllPostCategory } from 'types/post'

const Navigation = ({ category }: { category: AllPostCategory }) => {
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
