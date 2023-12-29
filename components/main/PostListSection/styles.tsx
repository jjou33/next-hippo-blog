import styled, { keyframes } from 'styled-components'

export const PostListContainer = styled.div`
  @media screen and (min-width: 1000px) {
    width: 960px;
    margin: 0 auto;
  }
`
export const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const AllPostContainer = styled.section`
  margin: 20px auto;
  min-height: calc(100vh - 258px);
`

export const ReadMoreBtnWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`

export const shaking_in_animation = keyframes`
 0% {
   transform: rotate(10deg);
 }
 
 30% {
   transform: rotate(-10deg);
 }
 
 70% {
   transform: rotate(10deg);
 }
 100% {
   transform: rotate(-10deg);
 }
 `

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`
export const HeaderTextWrapper = styled.div`
  text-align: center;
`

export const Button = styled.button`
  border: none;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.color.text_001};
  font-weight: 700;
  font-size: 12px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.background_002};

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  z-index: 0;
  span {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
    svg {
      width: 10px;
      height: 10px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: ${({ theme }) => theme.color.hover_002};
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    border-radius: 2rem;
    -webkit-transform: translateX(-98%) translateY(-10%) rotate(60deg);
    transform: translateX(-90%) translateY(-10%) rotate(60deg);
  }

  &:hover::after {
    -webkit-transform: translateX(-9%) translateY(-30%) rotate(60deg);
    transform: translateX(-9%) translateY(-30%) rotate(60deg);
  }
`
