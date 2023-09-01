import styled from 'styled-components'

export const ProjectItemContainer = styled.div`
  position: relative;
  border-radius: 20px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }
`
