import { IconBox } from 'components/common'

import { ProfileIconSet } from 'public/static/icon'
import Link from 'next/link'
import * as S from './styles'

interface LinkStyleBoxProps {
  color1: string
  color2: string
  iconName: string
  title: string
  href: string
}

const LinkedIcon = ({
  color1,
  color2,
  iconName,
  title,
  href,
}: LinkStyleBoxProps) => {
  return (
    <Link href={href} target={'_blank'}>
      <S.LinkItemContainer>
        <S.LinkItemWrapper
          background={`linear-gradient(45deg, ${color1}, ${color2})`}
        >
          <S.LinkItemIcon>
            <IconBox width={'30px'} height={'30px'}>
              {ProfileIconSet[iconName].icon()}
            </IconBox>
          </S.LinkItemIcon>

          <S.LinkItemTitle>{title}</S.LinkItemTitle>
        </S.LinkItemWrapper>
      </S.LinkItemContainer>
    </Link>
  )
}

export default LinkedIcon
