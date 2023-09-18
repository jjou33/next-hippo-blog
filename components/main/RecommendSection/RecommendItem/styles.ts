import styled from 'styled-components'

export const RecommendItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 180px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 1s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
  }
`
