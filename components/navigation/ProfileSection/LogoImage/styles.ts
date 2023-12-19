import styled from 'styled-components'
import theme from 'styles/theme'

// 물방울 스타일
export const LogoImageWrapper = styled.div`
  position: relative;
  margin: 2rem auto;
  width: 150px;
  height: 150px;
  box-shadow: ${theme.color.logo_shadow};
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    top: 35px;
    left: 25px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    top: 25px;
    left: 50px;
  }
`

export const NotificationContainer = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 5rem;
  left: 5rem;
`
