import styled from '@emotion/styled'
import Image from 'next/image'

export const ContentsContainer = styled.article`
  width: 100vw;
  max-width: 60rem;
  margin: 2rem auto;
  font-size: 1.25rem;
  line-height: 2rem;
  background-color: hsl(265, 19%, 88%);
  border-radius: 6px;
  padding: 1rem;

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
