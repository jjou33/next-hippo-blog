import Image from 'next/image'
import styled from 'styled-components'

export const ProjectItemContainer = styled.div`
  position: relative;
  border-radius: 20px;
  transition: transform 0.5s;
  box-shadow: ${({ theme }) => theme.color.shadow_002};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.color.shadow_003};
    img {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
`
export const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
  transition: transform 0.5s;
`
