import * as S from './styles'

import Image from 'next/image'
import theme from 'styles/theme'
import Link from 'next/link'

import { Badge, Typography } from 'components/common'
import {
  Divider,
  FlexBox,
  StyledImageBox,
} from 'components/common/StyledLayout'

import type { ProjectInfoProps } from '../index'

const ProjectItem = ({
  title,
  content,
  imagePath,
  keywords,
  linkPath,
}: ProjectInfoProps) => {
  return (
    <S.ProjectItemContainer>
      <Link href={linkPath}>
        <StyledImageBox height="20rem" borderRadius="20px">
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
              {keywords.map(keyword => (
                <Badge
                  borderRadius="2rem"
                  backgroundColor={theme.colors.subPrimary_001}
                  aggressive="body_oneline_006"
                  padding="5px 10px 5px 10px"
                  color={theme.colors.subPrimary_004}
                  key={keyword}
                >
                  {keyword}
                </Badge>
              ))}
            </FlexBox>
            <FlexBox
              flexDirection="column-reverse"
              height="100%"
              margin="0 0 20px 10px"
            >
              <Typography
                variant="p"
                aggressive="body_oneline_001"
                color={theme.colors.gray_002}
                overFlow="hidden"
                textOverflow="ellipsis"
                margin="1rem 0 0 0"
              >
                {content}
              </Typography>
              <Divider
                direction="horizontal"
                width="100%"
                height="1px"
                margin="1rem auto 0"
                color={theme.colors.gray_002}
              />
              <Typography
                variant="p"
                aggressive="montserratAlternates_Bold_003"
                color={theme.colors.primary_007}
                overFlow="hidden"
                textOverflow="ellipsis"
              >
                {title}
              </Typography>
            </FlexBox>
          </FlexBox>
        </StyledImageBox>
      </Link>
    </S.ProjectItemContainer>
  )
}

export default ProjectItem
