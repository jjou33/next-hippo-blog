import styled, { keyframes } from 'styled-components'

export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: center;
  width: 70px;
  height: 60px;
  /* border: 1px solid black; */
  border-radius: 10px;
  background-color: white;
  z-index: 3;
  box-shadow: 5px 5px 16px 25px rgba(0, 0, 0, 0.1);
`

export const CountNameBox = styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
  font-size: 0.5rem;
  padding: 0 5px;
`

export const CountNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: center;
  width: 70px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
`
