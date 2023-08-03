import styled from '@emotion/styled'

export const ContentsContainer = styled.article`
  width: 95%;
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

  .image {
    margin: 1rem auto;
    width: 100%;
    max-width: 600px;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`
