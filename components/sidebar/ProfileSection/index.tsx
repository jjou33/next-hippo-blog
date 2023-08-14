import { FlexBox } from 'components/common/StyledLayout'
import CounterBox from './CounterBox'
import LogoImage from './LogoImage'

const ProfileSection = () => {
  return (
    <FlexBox flexDirection="column">
      <LogoImage />
      <CounterBox />
    </FlexBox>
  )
}

export default ProfileSection
