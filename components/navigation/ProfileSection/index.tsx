import DATA from 'constants/data'
import theme from 'styles/theme'

import { useRecoilValue } from 'recoil'
import { categoryState } from 'states/categoryState'
import { Divider } from 'components/common/StyledLayout'
import LogoImage from './LogoImage'
import SiteInfo from './SiteInfo'
import * as S from './styles'

const ProfileSection = () => {
  const categoryInfo = useRecoilValue(categoryState)

  const PROFILE_INFO = {
    VISIT_AND_CONTENTS: [
      {
        number: categoryInfo ? Number(`${categoryInfo.categoryCount}`) : 0,
        title: `${DATA.PROFILE_INFO.COUNT_TITLE.CATEGORY}`,
      },
      {
        number: categoryInfo ? Number(`${categoryInfo.allPostCount}`) : 0,
        title: `${DATA.PROFILE_INFO.COUNT_TITLE.POSTS}`,
      },
    ],
  }

  return (
    <S.ProfileConotainer>
      <S.ProfileWrapper>
        <LogoImage />
        <SiteInfo
          linkItems={DATA.PROFILE_INFO.LIST}
          numberItems={PROFILE_INFO.VISIT_AND_CONTENTS}
        />
      </S.ProfileWrapper>
      <Divider
        direction={'horizontal'}
        width={'100%'}
        height={'1px'}
        margin={'1rem 0 0 0'}
        color={theme.color.border_001}
      />
    </S.ProfileConotainer>
  )
}

export default ProfileSection
