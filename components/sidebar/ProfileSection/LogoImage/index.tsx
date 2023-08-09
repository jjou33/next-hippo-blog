import { StyledImageBox } from 'components/common/StyledLayout'
import Image from 'next/image'

const LogoImage = () => {
  const imagePath = `/static/images/dfs/dfs.png`

  return (
    <StyledImageBox
      borderRadius="50%"
      width="7rem"
      height="7rem"
      margin="2rem auto"
      top="20px"
    >
      <Image src={imagePath} alt="alt" fill style={{ objectFit: 'cover' }} />
    </StyledImageBox>
  )
}

export default LogoImage
