import styled, { css, keyframes } from 'styled-components'

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

const ColorStyle = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`
export const ColorContainerStyle = css`
  background: white;
  position: relative;
  border-radius: 10px;

  ::after {
    content: '';
    position: absolute;
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    height: calc(100% + 3px * 2);
    width: calc(100% + 3px * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: 10px;
    z-index: -1;
    animation: ${ColorStyle} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`
