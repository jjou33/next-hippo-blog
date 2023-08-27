import * as S from './styles'

import Image from 'next/image'
import theme from 'styles/theme'

import { StyledLayout, Typography } from 'components/common'

interface RecommendItemProps {
  imagePath: string
  itemName: string
}
const RecommendItem = ({ imagePath, itemName }: RecommendItemProps) => {
  return (
    <S.RecommendItemWrapper key={itemName}>
      <StyledLayout.StyledImageBox borderRadius="2rem" boxShadow="">
        <Image src={imagePath} alt="alt" width={90} height={90} />
      </StyledLayout.StyledImageBox>
      <Typography
        variant="p"
        aggressive="body_oneline_001"
        color={theme.colors.gray_005}
        margin="15px 0 10px 0"
      >
        {itemName}
      </Typography>
    </S.RecommendItemWrapper>
  )
}

export default RecommendItem
