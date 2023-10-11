import styled from 'styled-components'
import { themedPalette } from 'styles/themeVariables'

export const ProfileConotainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const ProfileWrapper = styled.div`
  background-color: ${themedPalette.bg_element_color};
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`
