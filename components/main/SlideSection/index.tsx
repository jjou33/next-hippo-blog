import DATA from 'constants/data'
import Link from 'next/link'
import Image from 'next/image'
import theme from 'styles/theme'

import { Typography } from 'components/common'
import { MainIconSet } from 'public/static/icon'
import { convertUpperToPrefix } from 'utils/stringUtils'
import * as S from './styles'

const SlideSection = () => {
  const nextItem = () => {
    const lists = document.querySelectorAll('#slideItem')
    document.getElementById('slide').appendChild(lists[0])
  }

  const prevItem = () => {
    const lists = document.querySelectorAll('#slideItem')
    document.getElementById('slide').prepend(lists[lists.length - 1])
  }

  return (
    <S.SlideContainer>
      <S.SlideWrapper id={'slide'}>
        {DATA.SLIDE_CONTENTS_INFO.LIST.map(info => (
          <S.SlideItem key={info.title} id={'slideItem'}>
            <Image
              src={info.imageLink}
              alt={'alt'}
              fill
              sizes={'(max-width: 1300px) 80vw,  50vw'}
              style={{ objectFit: 'cover' }}
            />
            <S.LeftDimmedBox />
            <S.SlideContents>
              <S.TitleWrapper
                variant={'h3'}
                aggressive={'montserratAlternates_Medium_003'}
              >
                {convertUpperToPrefix(info.title)}
              </S.TitleWrapper>
              <S.SubTitleWrapper variant={'p'} aggressive={'body_oneline_002'}>
                {info.expert}
              </S.SubTitleWrapper>
              <Link
                href={{ pathname: `posts/${info.title}`, query: { page: 1 } }}
                aria-label={`More Posts`}
              >
                <S.Button>
                  <Typography
                    variant={'span'}
                    aggressive={'montserratAlternates_Regular_002'}
                  >
                    {'🚀 More Posts'}
                  </Typography>
                </S.Button>
              </Link>
            </S.SlideContents>
          </S.SlideItem>
        ))}
      </S.SlideWrapper>
      <S.NavigationContainer>
        <S.NavigationButton onClick={nextItem} direction={'left'}>
          {MainIconSet.Arrow.icon(theme.color.deep_black)}
        </S.NavigationButton>
        <S.NavigationButton onClick={prevItem} direction={'right'}>
          {MainIconSet.Arrow.icon(theme.color.deep_black)}
        </S.NavigationButton>
      </S.NavigationContainer>
    </S.SlideContainer>
  )
}

export default SlideSection
