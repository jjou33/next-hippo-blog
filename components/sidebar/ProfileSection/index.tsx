import { FlexBox } from 'components/common/StyledLayout'
import SiteInfo from './SiteInfo'
import LogoImage from './LogoImage'
import LogoText from './LogoText'

const ProfileSection = () => {
  return (
    <FlexBox flexDirection="column" width="280px">
      <LogoImage />
      <LogoText />
      <SiteInfo />
    </FlexBox>
  )
}

export default ProfileSection
