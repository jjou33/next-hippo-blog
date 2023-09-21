import * as S from './styles'
import Image from 'next/image'
import { Typography } from 'components/common'

const SlideSection = () => {
  const IMAGE_LINK = [
    '/static/images/Algorithm/dfs/headImage.png',
    '/static/images/Algorithm/bfs/headImage.jpg',
    '/static/images/HeroImage/landing3.jpg',
    '/static/images/Algorithm/dfs/headImage.png',
    '/static/images/Algorithm/bfs/headImage.jpg',
    '/static/images/HeroImage/landing3.jpg',
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
        {IMAGE_LINK.map((link, index) => (
          <S.SlideItem key={index} id="slideItem">
            <Image src={link} alt="alt" fill style={{ objectFit: 'cover' }} />
            <S.LeftDimmedBox />
            <S.SlideContents>
              <S.TitleWrapper
                variant="h3"
                aggressive="montserratAlternates_Medium_003"
              >
                {link.split('/')[3]}
              </S.TitleWrapper>
              <S.SubTitleWrapper variant="p" aggressive="body_oneline_003">
                가나다라마사가나다
                라마사가나다라마사가나다라마사가나다라마사가나다라마사라마사가나다라마사가나다라마사가나다라마사가나다라마사asdo가니아가니아가니아가니아
              </S.SubTitleWrapper>
              <S.Button>
                <Typography
                  variant="span"
                  aggressive="montserratAlternates_Regular_003"
                >
                  Go To Category!
                </Typography>
              </S.Button>
            </S.SlideContents>
          </S.SlideItem>
        ))}
      </S.SlideWrapper>
      <S.NavigationContainer>
        <S.NavigationButton onClick={nextItem}>{`<`}</S.NavigationButton>
        <S.NavigationButton onClick={prevItem}>{`>`}</S.NavigationButton>
      </S.NavigationContainer>
    </S.SlideContainer>
  )
}

export default SlideSection
