import styled from 'styled-components'

// 물방울 스타일
export const LogoImageWrapper = styled.div`
  position: relative;
  margin: 2rem auto;
  width: 150px;
  height: 150px;
  box-shadow:
    inset 10px 10px 100px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(0, 0, 0, 0.05),
    15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9);
  border-radius: 50%;

  ::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    top: 35px;
    left: 25px;
  }

  ::after {
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
