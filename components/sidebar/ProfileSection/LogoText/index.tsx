import { Typography } from 'components/common'
import { FlexBox } from 'components/common/StyledLayout'

const LogoText = () => {
  return (
    <FlexBox flexDirection="column" alignItems="center" margin="0 0 1.5rem 0">
      <Typography variant="h5" aggressive="headline_oneline_006">
        HIPPO DEV 🧑🏼‍💻
      </Typography>
    </FlexBox>
  )
}

export default LogoText
