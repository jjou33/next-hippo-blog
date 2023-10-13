import Link from 'next/link'
import styled from 'styled-components'
import { themedPalette } from 'styles/themeVariables'

export const ItemContainer = styled(Link)`
  display: flex;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: ${themedPalette.bg_element_color};
  border-radius: 20px;
  /* border: 1px solid ${themedPalette.border_color}; */
  &:hover {
    transform: scale(1.01);
    transition: transform 0.5s;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.05);
      transition: transform 0.5s; /* hover 효과에 사용될 트랜지션 */
    }
  }
  transition: 0.5s;
`

export const ItemContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 650px;
  }
`

export const TimeStampWrapper = styled.div`
  margin: 0.5rem 0 0.8rem 0;
  display: flex;
`

export const ImageWrapper = styled.div`
  width: 12rem;
  height: 12rem;
  margin: 1rem 2rem;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
`
