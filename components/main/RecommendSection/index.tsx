import * as S from './styles'

import DATA from 'constants/data'
import SectionHeader from '../SectionHeader'
import SlideSection from '../SlideSection'

const RecommendSection = () => {
  return (
    <S.RecommendWrapper>
      <SectionHeader
        title={DATA.RECOMMEND_INFO.HEADER.TITLE}
        subTitle={DATA.RECOMMEND_INFO.HEADER.SUB_TITLE}
      />
      <SlideSection />
    </S.RecommendWrapper>
  )
}

export default RecommendSection
