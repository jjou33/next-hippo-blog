import styled, { css } from 'styled-components'
import Image from 'next/image'
import theme from 'styles/theme'
export const GridItemContainer = styled.li<{ inview: boolean }>`
  border: 1px solid ${theme.color.border_color};
  width: 100%;
  border-radius: 20px;
  margin: 1rem auto 0;
  box-shadow: 5px 15px 20px rgba(0, 0, 0, 0.1);
  background-color: ${theme.color.bg_element_color};
  &:hover {
    transform: scale(1.01);
    transition: transform 0.5s;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.05);
      transition: transform 0.5s; /* hover 효과에 사용될 트랜지션 */
    }
  }

  ${({ inview }) =>
    inview
      ? css`
          opacity: 1;
          transform: translate3d(0, 5%, 0);
          transition: 0.5s;
        `
      : css`
          opacity: 0;
          transform: translateZ(20);
          transition: 0.5s;
        `}
`

export const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
  border-radius: 20px 20px 0 0;
  transition: transform 0.5s;
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
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;

  gap: 10px;
`
export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
`
