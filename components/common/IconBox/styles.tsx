import styled from 'styled-components'
import { CSSProperties } from 'react'

export const IconBoxContainer = styled.div<CSSProperties>`
  border-radius: 50%;
  backface-visibility: hidden;

  padding: 4px;
  width: ${({ width }) => width ?? '35px'};
  height: ${({ height }) => height ?? '35px'};
`
