import RecommendItem from '../RecommendItem'
import * as S from './styles'

const RecommendCategory = () => {
  const imagePath = `/static/images/dfs/dfs.png`
  const DUMMY_DATA = ['test1', 'test1', 'test1', 'test1', 'test1']
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
