import Link from 'next/link'
import styled from 'styled-components'

export const ItemContainer = styled(Link)`
  display: flex;
  /* justify-content: center; */
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`

export const ItemContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
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
