import Link from 'next/link'
import styled from 'styled-components'

export const ItemContainer = styled(Link)`
  display: flex;
  box-shadow: ${({ theme }) => theme.color.shadow_002};
  background-color: ${({ theme }) => theme.color.background_002};
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.01);
    transition: transform 0.5s;
    box-shadow: ${({ theme }) => theme.color.shadow_003};
    img {
      transform: scale(1.05);
      transition: transform 0.5s; /* hover 효과에 사용될 트랜지션 */
    }
  }
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
  width: 10rem;
  height: 10rem;
  margin: 1rem;
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
