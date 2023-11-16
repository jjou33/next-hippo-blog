import styled from 'styled-components'
import { themedPalette } from 'styles/themeVariables'

export const NavigationContainer = styled.nav`
  padding: 0 1rem;
`

export const NavigationWrapper = styled.div`
  background-color: ${themedPalette.bg_element_color};
  display: flex;
  flex-direction: column;
  padding: 1rem;

  height: 100%;
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`

export const NavigationGrid = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`

export const RootItemContainer = styled.ul`
  display: flex;

  flex-direction: column;
  gap: 10px;
  margin-bottom: 1rem;
`
