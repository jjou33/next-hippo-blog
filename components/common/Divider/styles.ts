import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 20px;
  padding: 0;
  margin: 0;
  bottom: 210px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 768px) {
    bottom: 165px;
  }
`

export const Wrapper = styled.div`
  svg {
    display: block;
    background: 0 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    -webkit-transform: translateY(-100%) translateY(2px);
    transform: translateY(-10%) translateY(100px) scale(1, 1);
    transform-origin: top;
    width: 100%;
  }
`
