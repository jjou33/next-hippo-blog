import { StyledLayout, Typography } from 'components/common'
import * as S from './styles'
import Image from 'next/image'
import theme from 'styles/theme'
const RecommendItem = ({ imagePath, itemName }) => {
  return (
    <S.RecommendItemWrapper key={itemName}>
      <StyledLayout.StyledImageBox borderRadius="40px" boxShadow="">
        <Image src={imagePath} alt="alt" width={100} height={100} />
      </StyledLayout.StyledImageBox>
      <Typography
        variant="p"
        aggressive="headline_oneline_004"
        color={theme.colors.gray_005}
        margin="10px 0 10px 0"
      >
        {itemName}
      </Typography>
    </S.RecommendItemWrapper>
  )
}

export default RecommendItem
