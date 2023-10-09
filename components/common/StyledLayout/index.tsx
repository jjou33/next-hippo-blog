import styled, { keyframes } from 'styled-components'

import { CSSProperties } from 'react'

import Link from 'next/link'

export const FlexBox = styled.div<CSSProperties>`
  flex: ${({ flex }) => flex};
  display: ${({ display }) => display ?? 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  align-items: ${({ alignItems }) => alignItems ?? 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? 'nowrap'};
  gap: ${({ gap }) => gap ?? 0};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  box-shadow: ${({ boxShadow }) => boxShadow};
  background: ${({ background }) => background};
  white-space: ${({ whiteSpace }) => whiteSpace};
  overflow: ${({ overflow }) => overflow};
  place-items: ${({ placeItems }) => placeItems};
  border-radius: ${({ borderRadius }) => borderRadius};
  vertical-align: ${({ verticalAlign }) => verticalAlign};
`

export const MaxContainer = styled.div<CSSProperties>`
  position: relative;
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const SubMaxContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 996px;
  margin: 0 auto;
`

export const UnorderList = styled.ul<CSSProperties>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
`

export const LinkWrapper = styled(Link)<CSSProperties>`
  display: flex;
  height: 100%;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`

export const EmptyBoxDivider = styled.div<CSSProperties>`
  height: ${({ height }) => height};
`

interface DividerProps {
  direction: 'vertical' | 'horizontal'
  width: string
  height: string
  margin: string
  color: string
}

export const Divider = styled.div<DividerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background-color: ${({ color }) => color};
  transform: ${({ direction }) =>
    direction === 'horizontal' ? `rotate(0deg)` : `rotate(90deg)`};
`

export const StyledImageBox = styled.div<CSSProperties>`
  position: ${({ position }) => position ?? 'relative'};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: ${({ overflow }) => overflow ?? 'hidden'};
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? backgroundColor};
  margin: ${({ margin }) => margin};
`

export const StyledBadgeBox = styled.div<CSSProperties>`
  border-radius: ${({ borderRadius }) => borderRadius ?? borderRadius};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? backgroundColor};
  color: ${({ color }) => color ?? color};
  text-align: center;
  margin: ${({ margin }) => margin};
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
interface ColorBorderBoxProp {
  width: string
  height: string
  background: string
}
export const ColorBorderBox = styled.div<ColorBorderBoxProp>`
  padding: 2px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: ${({ width }) => width && width};
    height: ${({ height }) => height && height};
    background: ${({ background }) => background && background};
    animation: ${rotate} 5s linear infinite;
  }
`
