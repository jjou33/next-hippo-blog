import styled from 'styled-components'

export const NavigationContainer = styled.nav`
  padding: 0 1rem;
`

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  height: 100vh;
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`

export const NavigationGrid = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`

export const RootItemContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: 10px;
  margin-bottom: 1rem;
`
