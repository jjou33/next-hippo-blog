import { FlexBox } from 'components/common/StyledLayout'
import { LinkedBtn } from 'components/common/Button/LinkedButton'
import { Typography } from 'components/common'
import Image from 'next/image'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
const LinkedItem = () => {
  return (
    <FlexBox width="480px" height="100%" gap="10px" alignContent="center">
      <MotionShowBox showDirection={'up'}>
        <LinkedBtn
          href="https://github.com/jjou33"
          target={'_blank'}
          flex={1}
          hoveropacity={'0.8'}
        >
          <FlexBox flexDirection="column" alignContent="center">
            <Image
              src={'/static/images/github.png'}
              alt="alt"
              width={90}
              height={90}
              loading="lazy"
            />
            <Typography
              variant="span"
              aggressive="button_000"
              align="center"
              padding="10px 0 0 0"
            >
              GIT HUB
            </Typography>
          </FlexBox>
        </LinkedBtn>
      </MotionShowBox>
      <MotionShowBox showDirection={'down'} delay={0.3}>
        <LinkedBtn
          href="https://github.com/jjou33"
          target={'_blank'}
          flex={1}
          hoveropacity={'0.8'}
        >
          <FlexBox flexDirection="column" alignContent="center">
            <Image
              src={'/static/images/github.png'}
              alt="alt"
              width={90}
              height={90}
              loading="lazy"
            />
            <Typography
              variant="span"
              aggressive="button_000"
              align="center"
              padding="10px 0 0 0"
            >
              GIT HUB
            </Typography>
          </FlexBox>
        </LinkedBtn>
      </MotionShowBox>
      <MotionShowBox showDirection={'up'} delay={0.5}>
        <LinkedBtn
          href="https://github.com/jjou33"
          target={'_blank'}
          flex={1}
          hoveropacity={'0.8'}
        >
          <FlexBox flexDirection="column" alignContent="center">
            <Image
              src={'/static/images/github.png'}
              alt="alt"
              width={90}
              height={90}
              loading="lazy"
            />
            <Typography
              variant="span"
              aggressive="button_000"
              align="center"
              padding="10px 0 0 0"
            >
              GIT HUB
            </Typography>
          </FlexBox>
        </LinkedBtn>
      </MotionShowBox>
      <MotionShowBox showDirection={'down'} delay={0.8}>
        <LinkedBtn
          href="https://github.com/jjou33"
          target={'_blank'}
          flex={1}
          hoveropacity={'0.8'}
        >
          <FlexBox flexDirection="column" alignContent="center">
            <Image
              src={'/static/images/github.png'}
              alt="alt"
              width={90}
              height={90}
              loading="lazy"
            />
            <Typography
              variant="span"
              aggressive="button_000"
              align="center"
              padding="10px 0 0 0"
            >
              GIT HUB
            </Typography>
          </FlexBox>
        </LinkedBtn>
      </MotionShowBox>
    </FlexBox>
  )
}

export default LinkedItem
