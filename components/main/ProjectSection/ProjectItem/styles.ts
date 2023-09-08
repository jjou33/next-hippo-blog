import Image from 'next/image'
import styled from 'styled-components'

export const ProjectItemContainer = styled.div`
  position: relative;
  border-radius: 20px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

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
