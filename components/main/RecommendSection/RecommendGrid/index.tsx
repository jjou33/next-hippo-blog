import * as S from './styles'

import RecommendItem from '../RecommendItem'

const RecommendCategory = () => {
  const imagePath = `/static/images/Algorithm/dfs/dfs1.png`
  const DUMMY_DATA = ['test1', 'test2', 'test3', 'test4']
  return (
    <S.SliderContainer>
      <S.SliderTrack>
        {DUMMY_DATA.map((item, index) => (
          <RecommendItem
            imagePath={imagePath}
            itemName={`${item}${index}`}
            key={item}
          />
        ))}
      </S.SliderTrack>
      <S.SliderTrack>
        {DUMMY_DATA.map((item, index) => (
          <RecommendItem
            imagePath={imagePath}
            itemName={`${item}${index}`}
            key={item}
          />
        ))}
      </S.SliderTrack>
    </S.SliderContainer>
  )
}

export default RecommendCategory
