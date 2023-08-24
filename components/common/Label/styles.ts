import styled from 'styled-components'

import { CSSProperties } from 'react'

export const Label = styled.label<CSSProperties>`
  width: ${({ width }) => width ?? '22px'};
  height: ${({ height }) => height ?? '22px'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '50%'};
`
