import { FlexBox } from 'components/common/StyledLayout'
import * as S from './styles'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
import Link from 'next/link'
import IconBox from 'components/common/IconBox'
import { Test } from 'public/static/icon'

interface LinkedInfo {
  href: string
  motionDirection: 'up' | 'down' | 'left' | 'right' | 'none'
  linkName: string
}

const LINKED_INFO: LinkedInfo[] = [
  {
    href: 'https://github.com/jjou33',
    motionDirection: 'up',
    linkName: 'GIT HUB',
  },
  {
    href: 'https://github.com/jjou33',
    motionDirection: 'down',
    linkName: 'GIT HUB2',
  },
  {
    href: 'https://github.com/jjou33',
    motionDirection: 'up',
    linkName: 'GIT HUB3',
  },
]

const LinkedItem = () => {
  return (
    <FlexBox>
      {LINKED_INFO.map(({ href, motionDirection, linkName }) => {
        return (
          <MotionShowBox showDirection={motionDirection} key={linkName}>
            <S.LinkContainer>
              <Link href={href}>
                <IconBox>
                  <Test />
                </IconBox>
                {linkName}
              </Link>
            </S.LinkContainer>
          </MotionShowBox>
        )
      })}
    </FlexBox>
  )
}

export default LinkedItem
