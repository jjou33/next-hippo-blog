import { FlexBox } from 'components/common/StyledLayout'
import LogoImage from './LogoImage'
import LinkedItem from './LinkedItem'
const ProfileSection = () => {
  return (
    <FlexBox flexDirection="column">
      <LogoImage />
      <LinkedItem />
    </FlexBox>
  )
}

export default ProfileSection
