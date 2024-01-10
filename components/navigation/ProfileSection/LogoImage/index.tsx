import Image from 'next/image'
import DATA from 'constants/data'
import TextNotification from 'components/common/Lottie/textNotification'

import { Typography } from 'components/common'
import { FlexBox, StyledImageBox } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import * as S from './styles'

const LogoImage = () => {
  return (
    <FlexBox flexDirection={'column'}>
      <S.LogoImageWrapper>
        <StyledImageBox
          borderRadius={'30%'}
          width={'6.5rem'}
          height={'6.5rem'}
          margin={'30px auto 0'}
        >
          <Image src={DATA.IMAGES.LOGO_IMAGE} alt={'logoImage'} fill />
        </StyledImageBox>
        <S.NotificationContainer>
          <TextNotification />
        </S.NotificationContainer>
      </S.LogoImageWrapper>
      <FlexBox
        flexDirection={'column'}
        alignItems={'center'}
        margin={'0 0 1.5rem 0'}
      >
        <Typography
          variant={'h6'}
          aggressive={'headline_small_001'}
          color={theme.color.text_001}
        >
          {'HIPPO DEV 🧑🏼‍💻'}
        </Typography>
      </FlexBox>
    </FlexBox>
  )
}

export default LogoImage
