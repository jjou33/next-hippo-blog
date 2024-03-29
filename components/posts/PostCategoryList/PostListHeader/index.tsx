import Image from 'next/image'
import theme from 'styles/theme'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
import FlyingAirplaneLottie from 'components/common/Lottie/FlyingAirplane'

import { Badge, Typography } from 'components/common'
import { convertUpperToPrefix } from 'utils/stringUtils'
import {
  Divider,
  FlexBox,
  SubMaxContainer,
} from 'components/common/StyledLayout'
import { PostData } from 'types/post'
import * as S from './styles'

const PostListHeader = ({
  categoryId,
  postInfo,
  keywords,
}: {
  categoryId?: string
  postInfo: PostData[]
  keywords: string[]
}) => {
  const { category1depth, category2depth } = postInfo[0]

  return (
    <S.HeroImageContainer>
      <FlexBox
        flexDirection={'column'}
        alignContent={'center'}
        justifyContent={'center'}
        position={'relative'}
        width={'100%'}
        height={'100%'}
        padding={'0 2rem'}
      >
        <Image
          src={`/static/images/${category1depth}/${category2depth}/headImage.png`}
          alt={'alt'}
          fill
          sizes={'(max-width: 1300px) 100vw, 80vw'}
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.5)',
            zIndex: '-1',
          }}
          priority
        />
        <FlexBox flexDirection={'column'} position={'absolute'}>
          <SubMaxContainer>
            <S.LottieContainer>
              <FlyingAirplaneLottie />
            </S.LottieContainer>
            <MotionShowBox showDirection={'down'}>
              <S.TextContainer>
                <Typography
                  variant={'h3'}
                  aggressive={'montserratAlternates_Medium_001'}
                  color={theme.color.deep_white}
                  align={'center'}
                >
                  {`${
                    categoryId ? convertUpperToPrefix(categoryId) : 'ALL POST'
                  } Collection`}
                </Typography>
              </S.TextContainer>
              <Divider
                direction={'horizontal'}
                width={'100%'}
                height={'1px'}
                margin={'20px 0 0 0'}
                color={theme.color.divider_002}
              />
              <S.BadgeContainer isAllPost={!categoryId}>
                {keywords.slice(0, 40).map(keyword => (
                  <Badge
                    borderRadius={'2rem'}
                    backgroundColor={theme.color.badge_001}
                    color={theme.color.badge_text_001}
                    aggressive={'montserratAlternates_Regular_002'}
                    padding={'10px 20px 10px 20px'}
                    key={keyword}
                  >
                    {`# ${keyword}`}
                  </Badge>
                ))}
              </S.BadgeContainer>
            </MotionShowBox>
          </SubMaxContainer>
        </FlexBox>
        <FlexBox justifyContent={'center'} margin={'5rem 0 0 0'}>
          <S.MouseIndicatorWrapper>
            <S.MouseIndicator />
          </S.MouseIndicatorWrapper>
        </FlexBox>
      </FlexBox>
    </S.HeroImageContainer>
  )
}

export default PostListHeader
