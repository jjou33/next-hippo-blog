import { StyledImageBox } from 'components/common/StyledLayout'
import Image from 'next/image'

const HeroSection = () => {
  const imagePath = `/static/images/main4.jpg`
  return (
    <StyledImageBox
      position="fixed"
      width="100%"
      height="100vh"
      overflow="hidden"
    >
      <Image
        src={imagePath}
        alt={'alt'}
        fill
        style={{
          objectFit: 'cover',
          zIndex: '-1',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      />
    </StyledImageBox>
  )
}

export default HeroSection
