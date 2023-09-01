import styled, { css } from 'styled-components'
import Image from 'next/image'
import theme from 'styles/theme'
export const GridItemContainer = styled.li<{ inview: boolean }>`
  border: 1px solid ${theme.colors.gray_001};

  border-radius: 20px;
  margin: 0 auto;

  &:hover {
    transform: scale(1.01);
    transition: transform 0.5s;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  ${({ inview }) =>
    inview
      ? css`
          opacity: 1;
          transform: translate3d(0, 10%, 0);
          transition: 1s;
        `
      : css`
          opacity: 0;
          transform: translateZ(30);
          transition: 1s;
        `}
`

export const StyledImage = styled(Image)`
  width: 100%;
  overflow: hidden;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
`

export const ContentsWrapper = styled.div`
  padding: 20px;
`

export const TimeStampWrapper = styled.div`
  margin: 0.5rem 0;
`
export const TimeStamp = styled.time`
  font-style: italic;
  color: green;
`
