import styled from 'styled-components'

export const ProfileConotainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const ProfileWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background_002};
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`
