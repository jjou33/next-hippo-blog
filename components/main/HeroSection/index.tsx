import { StyledImageBox } from 'components/common/StyledLayout'
import Image from 'next/image'

const HeroSection = () => {
  const imagePath = `/static/images/main4.jpg`
  return (
    <StyledImageBox position="relative" width="100%" height="95vh">
      <Image
        src={imagePath}
        alt={'alt'}
        fill
        style={{
          objectFit: 'cover',
          zIndex: '-1',
        }}
      />
    </StyledImageBox>
  )
}

export default HeroSection
