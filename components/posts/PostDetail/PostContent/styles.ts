import styled from 'styled-components'
import Image from 'next/image'

import { cafe24OhsquareAir } from 'public/static/fonts'

export const ContentsContainer = styled.article`
  width: 100%;
  margin: 2rem auto;
  font-size: 1.25rem;
  line-height: 2rem;
  border-radius: 6px;
  padding: 1rem;
  font-family: ${cafe24OhsquareAir.style.fontFamily};
  p {
    color: hsl(276, 5%, 20%);
  }

  p img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`
export const ImageWrapper = styled.div`
  position: relative;
`
export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
