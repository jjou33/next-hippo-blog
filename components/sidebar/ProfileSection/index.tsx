import { FlexBox } from 'components/common/StyledLayout'
import CounterBox from './CounterBox'
import LogoImage from './LogoImage'
import LogoText from './LogoText'

const ProfileSection = () => {
  return (
    <FlexBox flexDirection="column" width="280px">
      <LogoImage />
      <LogoText />
      <CounterBox />
    </FlexBox>
  )
}

export default ProfileSection
