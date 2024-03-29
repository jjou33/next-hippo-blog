import theme from 'styles/theme'
import Link from 'next/link'

import { Badge, Typography } from 'components/common'
import {
  Divider,
  FlexBox,
  StyledImageBox,
} from 'components/common/StyledLayout'
import * as S from './styles'

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
        <StyledImageBox height={'20rem'} borderRadius={'20px'}>
          <S.StyledImage
            src={imagePath}
            alt={title}
            fill
            sizes={'(max-width: 1300px) 50vw, 33vw'}
            style={{
              objectFit: 'cover',
              zIndex: '-1',
            }}
          />

          <FlexBox
            flexDirection={'column'}
            height={'100%'}
            background={`linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0) 5%,
          rgba(20, 20, 20, 0.1) 30%,
          rgba(20, 20, 20, 0.6) 80%
        )`}
          >
            <FlexBox
              flexDirection={'column-reverse'}
              height={'100%'}
              margin={'15px'}
            >
              <Typography
                variant={'p'}
                aggressive={'body_oneline_002'}
                color={theme.color.deep_white}
                whiteSpace={'nowrap'}
                overFlow={'hidden'}
                textOverflow={'ellipsis'}
                margin={'1rem 0 0 0'}
              >
                {content}
              </Typography>
              <Divider
                direction={'horizontal'}
                width={'100%'}
                height={'1px'}
                margin={'1rem auto 0'}
                color={theme.color.divider_002}
              />
              <Typography
                variant={'p'}
                aggressive={'headline_small_001'}
                color={theme.color.deep_white}
                overFlow={'hidden'}
                textOverflow={'ellipsis'}
              >
                {title}
              </Typography>
              <FlexBox gap={'1rem'} margin={'10px 0'} flexWrap={'wrap'}>
                {keywords.map(keyword => (
                  <Badge
                    backgroundColor={theme.color.badge_001}
                    color={theme.color.badge_text_001}
                    aggressive={'body_oneline_bold_small'}
                    key={keyword}
                  >
                    {`# ${keyword}`}
                  </Badge>
                ))}
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </StyledImageBox>
      </Link>
    </S.ProjectItemContainer>
  )
}

export default ProjectItem
