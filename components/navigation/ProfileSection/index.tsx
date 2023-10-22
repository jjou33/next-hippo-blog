import * as S from './styles'

import DATA from 'constants/data'
import SiteInfo from './SiteInfo'
import LogoImage from './LogoImage'
import theme from 'styles/theme'

import { useRecoilValue } from 'recoil'
import { categoryState } from 'states/categoryState'
import { Divider } from 'components/common/StyledLayout'

const ProfileSection = () => {
  const categoryInfo = useRecoilValue(categoryState)

  const PROFILE_INFO = {
    VISIT_AND_CONTENTS: [
      {
        number: Number(`${categoryInfo.categoryCount}`),
        title: `${DATA.PROFILE_INFO.COUNT_TITLE.CATEGORY}`,
      },
      {
        number: Number(`${categoryInfo.allPostCount}`),
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
        direction="horizontal"
        width="100%"
        height="1px"
        margin="2rem 0 0 0"
        color={theme.colors.gray_002}
      />
    </S.ProfileConotainer>
  )
}

export default ProfileSection
