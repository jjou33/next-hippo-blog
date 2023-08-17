import { FlexBox, StyledImageBox } from 'components/common/StyledLayout'
import Image from 'next/image'
import * as S from './styles'
const LogoImage = () => {
  const imagePath = `/static/images/hacker.png`

  return (
    <FlexBox background="linear-gradient(45deg, white 40%, #eee)">
      <S.LogoImageWrapper>
        <StyledImageBox
          borderRadius="30%"
          width="5rem"
          height="5rem"
          margin="45px auto 0"
          top="50px"
        >
          <Image
            src={imagePath}
            alt="alt"
            fill
            style={{ objectFit: 'cover' }}
          />
        </StyledImageBox>
      </S.LogoImageWrapper>
    </FlexBox>
  )
}

export default LogoImage
