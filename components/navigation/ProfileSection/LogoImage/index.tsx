import { Typography } from 'components/common'
import TextNotification from 'components/common/Lottie/textNotification'
import { FlexBox, StyledImageBox } from 'components/common/StyledLayout'
import Image from 'next/image'
import * as S from './styles'
const LogoImage = () => {
  return (
    <FlexBox
      background="linear-gradient(45deg, white 40%, #eee)"
      borderRadius="1rem"
      flexDirection="column"
    >
      <S.LogoImageWrapper>
        <StyledImageBox
          borderRadius="30%"
          width="5rem"
          height="5rem"
          margin="45px auto 0"
          top="50px"
        >
          <Image src="/static/images/hacker.png" alt="alt" fill />
        </StyledImageBox>
        <S.NotificationContainer>
          <TextNotification />
        </S.NotificationContainer>
      </S.LogoImageWrapper>
      <FlexBox flexDirection="column" alignItems="center" margin="0 0 1.5rem 0">
        <Typography variant="h6" aggressive="headline_small_002">
          HIPPO DEV 🧑🏼‍💻
        </Typography>
      </FlexBox>
    </FlexBox>
  )
}

export default LogoImage
