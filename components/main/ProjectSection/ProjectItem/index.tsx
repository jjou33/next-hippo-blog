import { Badge, Typography } from 'components/common'
import { FlexBox, StyledImageBox } from 'components/common/StyledLayout'
import Image from 'next/image'
import theme from 'styles/theme'

const ProjectItem = ({ imagePath, title }) => {
  return (
    <StyledImageBox height="20rem" width="30rem" borderRadius="20px">
      <Image
        src={imagePath}
        alt={title}
        fill
        style={{
          objectFit: 'cover',
          zIndex: '-1',
        }}
      />
      <FlexBox
        flexDirection="column"
        height="100%"
        background={`linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0) 10%,
          rgba(20, 20, 20, 0.1) 55%,
          rgba(20, 20, 20, 0.6) 100%
        )`}
      >
        <FlexBox gap="1rem" margin="10px 0 0 10px">
          <Badge
            borderRadius="2rem"
            backgroundColor={theme.colors.primary_005}
            aggressive="body_multiline_003"
            padding="5px 10px 5px 10px"
          >
            Badge1
          </Badge>
          <Badge
            borderRadius="2rem"
            backgroundColor={theme.colors.primary_005}
            aggressive="body_multiline_003"
            padding="5px 10px 5px 10px"
          >
            Badge2
          </Badge>
        </FlexBox>
        <FlexBox
          flexDirection="column-reverse"
          height="100%"
          margin="0 0 20px 10px"
        >
          <Typography
            variant="p"
            aggressive="body_oneline_001"
            color={theme.colors.primary_001}
            overFlow="hidden"
            textOverflow="ellipsis"
          >
            해당 프로젝트는 현재 실무에서 차세대 프로젝트에 참여하여 진행중인
            프로젝트간 필요한 내용을 포스팅 합니다.
          </Typography>
        </FlexBox>
      </FlexBox>
    </StyledImageBox>
  )
}

export default ProjectItem
