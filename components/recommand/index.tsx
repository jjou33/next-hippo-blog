import { FlexBox } from 'components/common/StyledLayout'
import RecommendItem from './RecommendItem'
import * as S from './styles'

const RecommendCategory = () => {
  const imagePath = `/static/images/dfs/dfs.png`
  const DUMMY_DATA = ['test1', 'test1', 'test1', 'test1', 'test1']
  return (
    <FlexBox
      position="relative"
      width="996px"
      height="100%"
      margin="20px auto"
      placeItems="center"
      overflow="hidden"
    >
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
    </FlexBox>
  )
}

export default RecommendCategory
