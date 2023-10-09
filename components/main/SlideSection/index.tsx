import * as S from './styles'

import Image from 'next/image'
import theme from 'styles/theme'

import { Typography } from 'components/common'
import { MainIconSet } from 'public/static/icon'
import Link from 'next/link'

const SlideSection = () => {
  const CONTENTS_INFO = [
    {
      title: 'NextJS',
      expert:
        'NextJS 로 개발하면서 만든 포스트들에 대한 정보를 기록한 공간입니다.',
      imageLink: '/static/images/Framework/NextJS/headImage.png',
    },
    {
      title: 'Browser',
      expert:
        'Browser 의 동작과정을 학습하면서 학습한 내용을 기록하는 공간입니다.',
      imageLink: '/static/images/Web/Browser/headImage.png',
    },
    {
      title: 'Environment',
      expert:
        'Package Manager, Bundler 등 FrontEnd 개발에 필요한 환경에 대한 정보를 기록한 공간입니다.',
      imageLink: '/static/images/Web/Environment/headImage.png',
    },
    {
      title: 'Style',
      expert: 'FrontEnd Style 에 관련된 기록들을 포스트한 카테고리 입니다.',
      imageLink: '/static/images/Web/Style/headImage.png',
    },
    {
      title: 'Javascript',
      expert:
        'Javascript 를 학습하면서 필요한 내용들을 포스트하여 기록해둔 공간입니다.',
      imageLink: '/static/images/Languages/javascript/headImage.png',
    },
  ]

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
      <S.SlideWrapper id="slide">
        {CONTENTS_INFO.map((info, index) => (
          <S.SlideItem key={index} id="slideItem">
            <Image
              src={info.imageLink}
              alt="alt"
              fill
              style={{ objectFit: 'cover' }}
            />
            <S.LeftDimmedBox />
            <S.SlideContents>
              <S.TitleWrapper
                variant="h3"
                aggressive="montserratAlternates_Medium_003"
              >
                {info.title}
              </S.TitleWrapper>
              <S.SubTitleWrapper variant="p" aggressive="body_oneline_003">
                {info.expert}
              </S.SubTitleWrapper>
              <Link href={`posts/${info.title}?page=1`}>
                <S.Button>
                  <Typography
                    variant="span"
                    aggressive="montserratAlternates_Regular_003"
                  >
                    GO {MainIconSet['Go'].icon('black')}
                  </Typography>
                </S.Button>
              </Link>
            </S.SlideContents>
          </S.SlideItem>
        ))}
      </S.SlideWrapper>
      <S.NavigationContainer>
        <S.NavigationButton onClick={nextItem} direction={'left'}>
          {MainIconSet['Arrow'].icon(theme.colors.gray_006)}
        </S.NavigationButton>
        <S.NavigationButton onClick={prevItem} direction={'right'}>
          {MainIconSet['Arrow'].icon(theme.colors.gray_006)}
        </S.NavigationButton>
      </S.NavigationContainer>
    </S.SlideContainer>
  )
}

export default SlideSection
