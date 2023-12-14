import styled from 'styled-components'

export const TextWrapper = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
  color: ${({ color }) => color};
`
