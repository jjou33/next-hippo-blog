import type { AllPostCategory } from 'types/post'
import * as S from './styles'

import NavigationSection from './NavigationSection'
import ProfileSection from './ProfileSection'

const Navigation = ({
  category,
  isModal,
}: {
  category: AllPostCategory
  isModal?: boolean
}) => {
  return (
    <S.SideNavContainer isModal={isModal}>
      <S.SideNavWrapper>
        <ProfileSection />
        <NavigationSection category={category} />
      </S.SideNavWrapper>
    </S.SideNavContainer>
  )
}

export default Navigation
