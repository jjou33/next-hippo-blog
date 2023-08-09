import styled from '@emotion/styled'

export const RecommendItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 160px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
  }

  /* @media screen and (max-width: 996px) {
    width: 50px;
    height: 50px;
    margin: 5px 15px;
  } */
`