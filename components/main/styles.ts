import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import Link from 'next/link'
import { CSSProperties } from 'react'

interface LinkBtnProps extends CSSProperties {
  borderradius?: string
  backgroundcolor?: string
  hoveropacity?: string
  hoverbackgroundcolor?: string
}

export const StyledLinkBtn = styled(Link)<LinkBtnProps>`
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

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  gap: 10rem;
  padding: 0 20px;
`

export const IndicatorContainer = styled.div`
  width: 10rem;
  height: 7rem;
  border-radius: 70%;
  background-color: white;
  position: absolute;
  top: 92%;

  @media screen and (max-width: 996px) {
    top: 90%;
  }
`
export const scroll = keyframes`
  0% {
    bottom: 80%;
    opacity: 1;
  }

  100% {
    bottom: 20%;
    opacity: 0;
  }
`

export const MouseIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
`
export const MouseIndicator = styled.div`
  position: relative;
  width: 2.5rem;
  height: 6em;
  border: solid 4px;
  border-radius: 30px;

  &::before {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: #3e54ac;
    left: 50%;
    transform: translateX(-50%);
    animation: ${scroll} 2s infinite;
  }
`
