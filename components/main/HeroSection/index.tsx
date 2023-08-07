import { FlexBox, StyledImageBox } from 'components/common/StyledLayout'
import { Typography } from 'components/common'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
import theme from 'styles/theme'
import Image from 'next/image'
import LinkedItem from './LinkedItem'
import LoadingCircleLottie from 'components/common/Lottie/LoadingCircleLottie'

const HeroSection = () => {
  const imagePath = `/static/images/dfs/dfs.png`
  return (
    <FlexBox
      justifyContent="center"
      gap="78px"
      width="100%"
      height="100vh"
      margin="0 auto"
      // padding="80px 0 50px 0"
      // background="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #eee4d7 100%)"
    >
      <StyledImageBox position="relative" width="100vw">
        <Image
          src={imagePath}
          alt={'alt'}
          fill
          style={{
            objectFit: 'cover',
            zIndex: '-1',
          }}
        />
        <FlexBox
          width="100vw"
          height="100vh"
          alignItems="center"
          justifyItems="center"
        >
          <FlexBox
            flexDirection="column"
            alignItems="center"
            justifyItems="center"
          >
            <Typography variant="h2" aggressive="headline_multiline_001">
              HIPPO DevLOG
              <br />
            </Typography>
            <Typography
              variant="p"
              aggressive="body_multiline_000"
              align="left"
              padding="20px 0 48px 0"
              color={theme.colors.gray_006}
            >
              부족한 점은 많지만
              <br />
              개인적으로 학습하고, 이루어간 것에 대한 스스로의 일기장 입니다.
              <br />
              개인적으로 학습하고, 이루어간 것에 대한 스스로의 일기장 입니다.
            </Typography>

            <LinkedItem />
          </FlexBox>
          <FlexBox flexDirection="column" gap={'30px'}>
            <FlexBox>
              <MotionShowBox showDirection={'down'} delay={0.3}>
                <div style={{ width: '30rem' }}>
                  <LoadingCircleLottie />
                </div>
              </MotionShowBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </StyledImageBox>
      {/* <FlexBox flexDirection="column">
        <Typography variant="h2" aggressive="headline_multiline_001">
          HIPPO DevLOG
          <br />
        </Typography>
        <Typography
          variant="p"
          aggressive="body_multiline_000"
          align="left"
          padding="20px 0 48px 0"
          color={theme.colors.gray_006}
        >
          부족한 점은 많지만
          <br />
          개인적으로 학습하고, 이루어간 것에 대한 스스로의 일기장 입니다.
          <br />
          개인적으로 학습하고, 이루어간 것에 대한 스스로의 일기장 입니다.
        </Typography>

        <LinkedItem />
      </FlexBox>
      <FlexBox flexDirection="column" gap={'30px'}>
        <FlexBox>
          <MotionShowBox showDirection={'down'} delay={0.3}>
            <div style={{ width: '30rem' }}>
              <LoadingCircleLottie />
            </div>
          </MotionShowBox>
        </FlexBox>
      </FlexBox> */}
    </FlexBox>
  )
}

export default HeroSection
