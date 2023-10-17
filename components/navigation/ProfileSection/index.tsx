import * as S from './styles'

import SiteInfo from './SiteInfo'
import LogoImage from './LogoImage'
import theme from 'styles/theme'

import { useRecoilValue } from 'recoil'
import { categoryState } from 'states/categoryState'
import { Divider } from 'components/common/StyledLayout'

const ProfileSection = () => {
  const categoryInfo = useRecoilValue(categoryState)

  const PROFILE_INFO = {
    LINK: [
      {
        color1: '#f97253',
        color2: '#f7cb80',
        iconName: 'Git',
        title: 'GITHUB',
        href: 'https://github.com/jjou33',
      },
      {
        color1: '#8a7240',
        color2: '#e68e66',
        iconName: 'Email',
        title: 'CONTACT',
        href: '/',
      },
    ],
    VISIT_AND_CONTENTS: [
      { number: Number(`${categoryInfo.categoryCount}`), title: '총 카테고리' },
      { number: Number(`${categoryInfo.allPostCount}`), title: '총 게시글' },
    ],
  }

  return (
    <S.ProfileConotainer>
      <S.ProfileWrapper>
        <LogoImage />
        <SiteInfo
          linkItems={PROFILE_INFO.LINK}
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
