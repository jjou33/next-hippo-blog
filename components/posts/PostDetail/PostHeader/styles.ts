import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  padding-bottom: 2rem;
  border-bottom: 8px solid #a07aaa;
  margin: 1rem 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    color: #5a097a;
    margin: 0;
    line-height: initial;
    text-align: center;
  }

  img {
    object-fit: cover;
    width: 200px;
    height: 120px;
  }

  @media (min-width: 768px) {
    margin: 2rem 0;
    flex-direction: row;
    align-items: flex-end;

    h1 {
      font-size: 4rem;
      text-align: left;
    }
  }
`
