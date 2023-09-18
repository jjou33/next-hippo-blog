import Image from 'next/image'
import * as S from './styles'
import { useEffect, useState } from 'react'

const SlideSection = () => {
  const IMAGE_LINK = [
    '/static/images/Algorithm/dfs/headImage.png',
    '/static/images/Algorithm/bfs/headImage.jpg',
    '/static/images/HeroImage/landing3.jpg',
    '/static/images/Algorithm/dfs/headImage.png',
    '/static/images/Algorithm/bfs/headImage.jpg',
    '/static/images/HeroImage/landing3.jpg',
  ]
  // 슬라이드 아이템의 순서를 상태로 관리합니다.
  const [slideOrder, setSlideOrder] = useState([0, 1, 2, 3, 4, 5])

  const Func = () => {
    // 배열의 순서를 변경하여 상태를 업데이트합니다.
    setSlideOrder(prevOrder => {
      const newOrder = [...prevOrder]
      const firstItem = newOrder.shift()
      newOrder.push(firstItem)
      return newOrder
    })
  }

  return (
    <S.SlideContainer>
      <S.SlideWrapper>
        {slideOrder.map((order, index) => (
          <S.SlideItem key={index}>
            <Image
              src={IMAGE_LINK[order]}
              alt="alt"
              fill
              style={{ objectFit: 'cover' }}
            />
            <S.SlideContents>
              <S.TitleWrapper>HIPPO DEV</S.TitleWrapper>
              <S.SubTitleWrapper>Sub HIPPO DEV</S.SubTitleWrapper>
              <S.Button>{`See More`}</S.Button>
            </S.SlideContents>
          </S.SlideItem>
        ))}
        {/* <S.SlideItem>
          <Image
            src={IMAGE_LINK[0]}
            alt="alt"
            fill
            style={{ objectFit: 'cover' }}
          />
          <S.SlideContents>
            <S.TitleWrapper>HIPPO DEV</S.TitleWrapper>
            <S.SubTitleWrapper>Sub HIPPO DEV</S.SubTitleWrapper>
            <S.Button>{`See More`}</S.Button>
          </S.SlideContents>
        </S.SlideItem>
        <S.SlideItem>
          <Image
            src={IMAGE_LINK[1]}
            alt="alt"
            fill
            style={{ objectFit: 'cover' }}
          />
          <S.SlideContents>
            <S.TitleWrapper>HIPPO DEV</S.TitleWrapper>
            <S.SubTitleWrapper>Sub HIPPO DEV</S.SubTitleWrapper>
            <S.Button>{`See More`}</S.Button>
          </S.SlideContents>
        </S.SlideItem>
        <S.SlideItem>
          <Image
            src={IMAGE_LINK[2]}
            alt="alt"
            fill
            style={{ objectFit: 'cover' }}
          />
          <S.SlideContents>
            <S.TitleWrapper>HIPPO DEV</S.TitleWrapper>
            <S.SubTitleWrapper>Sub HIPPO DEV</S.SubTitleWrapper>
            <S.Button>{`See More`}</S.Button>
          </S.SlideContents>
        </S.SlideItem>
        <S.SlideItem>
          <Image
            src={IMAGE_LINK[1]}
            alt="alt"
            fill
            style={{ objectFit: 'cover' }}
          />
          <S.SlideContents>
            <S.TitleWrapper>HIPPO DEV</S.TitleWrapper>
            <S.SubTitleWrapper>Sub HIPPO DEV</S.SubTitleWrapper>
            <S.Button>{`See More`}</S.Button>
          </S.SlideContents>
        </S.SlideItem>
        <S.SlideItem>
          <Image
            src={`/static/images/Algorithm/dfs/headImage.png`}
            alt="alt"
            fill
            style={{ objectFit: 'cover' }}
          />
          <S.SlideContents>
            <S.TitleWrapper>HIPPO DEV</S.TitleWrapper>
            <S.SubTitleWrapper>Sub HIPPO DEV</S.SubTitleWrapper>
            <S.Button>{`See More`}</S.Button>
          </S.SlideContents>
        </S.SlideItem>
        <S.SlideItem>
          <Image
            src={`/static/images/Algorithm/dfs/headImage.png`}
            alt="alt"
            fill
            style={{ objectFit: 'cover' }}
          />
          <S.SlideContents>
            <S.TitleWrapper>HIPPO DEV</S.TitleWrapper>
            <S.SubTitleWrapper>Sub HIPPO DEV</S.SubTitleWrapper>
            <S.Button>{`See More`}</S.Button>
          </S.SlideContents>
        </S.SlideItem> */}
      </S.SlideWrapper>
      <S.NavigationContainer>
        <S.NavigationButton onClick={Func}>{`<`}</S.NavigationButton>
        <S.NavigationButton>{`>`}</S.NavigationButton>
      </S.NavigationContainer>
    </S.SlideContainer>
  )
}

export default SlideSection
