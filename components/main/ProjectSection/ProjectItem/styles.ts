import styled from 'styled-components'

export const ProjectItemContainer = styled.div`
  position: relative;
  border-radius: 20px;

  &:hover {
    transform: scale(1.02);
    transition: transform 1s;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`
