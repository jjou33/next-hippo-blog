import styled from 'styled-components'
import Link from 'next/link'

import { CSSProperties } from 'react'

interface LinkBtnProps extends CSSProperties {
  borderradius?: string
  backgroundcolor?: string
  hoveropacity?: string
  hoverbackgroundcolor?: string
}

export const LinkedBtn = styled(Link)<LinkBtnProps>`
  flex: ${({ flex }) => flex};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderradius }) => borderradius};
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  color: ${({ color }) => color};

  &:hover {
    background-color: ${({ hoverbackgroundcolor }) => hoverbackgroundcolor};
    opacity: ${({ hoveropacity }) => hoveropacity};
  }
`
