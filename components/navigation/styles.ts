import styled from 'styled-components'

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`

export const SideNavWrapper = styled.aside`
  position: sticky;
  height: 100vh;
  overflow-y: auto;
  top: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`
