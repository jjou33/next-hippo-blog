import styled from '@emotion/styled'

export const BalloonContainer = styled.div`
  position: relative;
  background-color: #3498db;
  color: #fff;
  padding: 15px;
  border-radius: 10px;
  max-width: 300px;
  margin: 20px auto;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #3498db transparent transparent transparent;
  }
`
