import { Typography } from 'components/common'
import IntroLottie from 'components/common/Lottie/Intro'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import NumberCountBox from 'components/navigation/ProfileSection/SiteInfo/NumberCountBox'
import theme from 'styles/theme'
import * as S from './styles'
const IntroSection = () => {
  const numberInfo = [
    { number: 33, title: '총 게시글' },
    { number: 53, title: '총 카테고리' },
  ]

  return (
    <S.IntroContainer>
      <MotionShowBox showDirection="down">
        <S.IntroLottieWrapper>
          <IntroLottie />
        </S.IntroLottieWrapper>
      </MotionShowBox>
      <S.IntroTextContainer>
        <Typography variant="h2" aggressive="headline_oneline_002">
          블로그를 찾아주셔서 감사합니다.
        </Typography>
        <Typography variant="h2" aggressive="headline_oneline_002">
          더 멋진 개발자가 되기
        </Typography>
        <Typography variant="h2" aggressive="headline_oneline_002">
          위해 항상 노력하겠습니다.
        </Typography>
      </S.IntroTextContainer>
    </S.IntroContainer>
  )
}

export default IntroSection
