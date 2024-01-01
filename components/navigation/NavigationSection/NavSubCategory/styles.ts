import styled from 'styled-components'

export const NavSubItemContainer = styled.div``

export const NavSubItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  border-radius: 5px;
  transition: background, 0.5s;
  gap: 10px;
  margin-right: 10px;
  &:hover {
    background: ${({ theme }) => theme.color.hover_001};
    color: black;
  }
`

export const NavSubItemTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px 0;
  gap: 15px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`
