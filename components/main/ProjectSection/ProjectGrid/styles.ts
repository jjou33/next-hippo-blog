import styled from 'styled-components'

export const GridContainer = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
  align-content: center;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`
