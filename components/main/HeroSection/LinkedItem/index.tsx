import { FlexBox } from 'components/common/StyledLayout'
import { LinkedBtn } from 'components/common/Button/LinkedButton'
import { Typography } from 'components/common'
import Image from 'next/image'
import MotionShowBox from 'components/common/Motion/MotionShowBox'

interface LinkedInfo {
  href: string
  imagePath: string
  motionDirection: 'up' | 'down' | 'left' | 'right' | 'none'
  linkName: string
}

const LINKED_INFO: LinkedInfo[] = [
  {
    href: 'https://github.com/jjou33',
    imagePath: '/static/images/github.png',
    motionDirection: 'up',
    linkName: 'GIT HUB',
  },
  {
    href: 'https://github.com/jjou33',
    imagePath: '/static/images/github.png',
    motionDirection: 'down',
    linkName: 'GIT HUB2',
  },
  {
    href: 'https://github.com/jjou33',
    imagePath: '/static/images/github.png',
    motionDirection: 'up',
    linkName: 'GIT HUB3',
  },
]

const LinkedItem = () => {
  return (
    <FlexBox
      width="480px"
      height="100%"
      gap="40px"
      alignContent="center"
      justifyContent="center"
    >
      {LINKED_INFO.map(({ href, motionDirection, linkName, imagePath }) => {
        return (
          <MotionShowBox showDirection={motionDirection} key={linkName}>
            <LinkedBtn href={href} target={'_blank'} hoveropacity={'0.8'}>
              <FlexBox flexDirection="column" alignContent="center">
                <Image
                  src={imagePath}
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
                  {linkName}
                </Typography>
              </FlexBox>
            </LinkedBtn>
          </MotionShowBox>
        )
      })}
    </FlexBox>
  )
}

export default LinkedItem
