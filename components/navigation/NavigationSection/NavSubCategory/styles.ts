import styled from 'styled-components'

export const NavSubItemContainer = styled.ul``

export const NavSubItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  border-radius: 5px;
  transition: background, 0.5s;
  gap: 10px;
  /* margin-left: 20px; */
  &:hover {
    background: #ebfeff;
    color: black;
  }
`

export const NavSubItemTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px 0;
  gap: 15px;
  /* font-size: 20px; */
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`