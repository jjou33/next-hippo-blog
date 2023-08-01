import { CSSProperties } from 'react'
import styled from '@emotion/styled'

export const Label = styled.label<CSSProperties>`
  width: ${({ width }) => width ?? '22px'};
  height: ${({ height }) => height ?? '22px'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '50%'};
`
