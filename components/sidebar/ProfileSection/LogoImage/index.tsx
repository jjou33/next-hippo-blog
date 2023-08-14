import { StyledImageBox } from 'components/common/StyledLayout'
import Image from 'next/image'

const LogoImage = () => {
  const imagePath = `/static/images/dfs/dfs.png`

  return (
    <StyledImageBox
      borderRadius="30%"
      width="6rem"
      height="6rem"
      margin="2rem auto"
      top="20px"
    >
      <Image src={imagePath} alt="alt" fill style={{ objectFit: 'cover' }} />
    </StyledImageBox>
  )
}

export default LogoImage
