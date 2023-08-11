import styled from '@emotion/styled'

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 350px;

  @media screen and (max-width: 1200px) {
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
