import * as S from './styles'

import SectionHeader from '../SectionHeader'
import SlideSection from '../SlideSection'

const RecommendSection = () => {
  return (
    <S.RecommendWrapper>
      <SectionHeader
        title={'추천 카테고리 🎖'}
        subTitle={
          '제가 많이 참고하고 좋은 내용을 담고 있는 사이트를 모아봤습니다!'
        }
      />
      <SlideSection />
    </S.RecommendWrapper>
  )
}

export default RecommendSection
