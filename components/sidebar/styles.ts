import styled from '@emotion/styled'

export const SideBarContainer = styled.aside`
  background-color: white;
  width: 350px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`

export const SideProfile = styled.div`
  border: 1px solid;
`

export const SideNavigation = styled.nav`
  border: 1px solid;
`
