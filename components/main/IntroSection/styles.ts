import styled from 'styled-components'
import theme from 'styles/theme'

export const IntroContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.bg_element_color};
  border-radius: 10px;
  padding: 1rem;

  h2 {
    line-height: 2rem;
  }

  @media screen and (min-width: 1000px) {
    width: 970px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const IntroBorder = styled.div`
  margin: 0 auto;
`

export const IntroTextContainer = styled.div`
  text-align: center;
`

export const IntroLottieWrapper = styled.div`
  width: 330px;
  bottom: -30%;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`

export const IntroFireLottieWrapper = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: 30%;
`
