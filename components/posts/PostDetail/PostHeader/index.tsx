import { Typography } from 'components/common'
import { FlexBox, StyledImageBox } from 'components/common/StyledLayout'
import Image from 'next/image'

const PostHeader = ({ posts }) => {
  const imagePath = `/static/images/${posts.slug}/${posts.image}`

  return (
    <StyledImageBox height={'88vh'}>
      <FlexBox
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        position="relative"
        width="100%"
        height="100%"
      >
        <Image
          src={imagePath}
          alt={posts.title}
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.25)',
            zIndex: '-1',
          }}
        />
        <FlexBox flexDirection="column" position="absolute" margin="0 auto">
          <Typography
            variant="h3"
            aggressive="headline_oneline_004"
            color="red"
          >
            HELLO
          </Typography>
        </FlexBox>
      </FlexBox>
    </StyledImageBox>
  )
}

export default PostHeader
