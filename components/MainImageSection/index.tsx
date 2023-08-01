import { FlexBox } from 'components/common/StyledLayout'
import Image from 'next/image'

const MainImageSection = () => {
  const imagePath = `/images/gif/sample5.jpg`
  return (
    <FlexBox
      justifyContent="center"
      gap="78px"
      width="100%"
      height="80%"
      margin="0 auto"
      padding="0 0 0 0"
      background="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F9F9FB 100%)"
    >
      <Image
        src={imagePath}
        alt="gif"
        width={1000}
        height={300}
        layout="responsive"
      />
    </FlexBox>
  )
}

export default MainImageSection
