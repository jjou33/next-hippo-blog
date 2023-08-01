import styled from '@emotion/styled'

export const Container = styled.footer`
  display: flex;
  min-height: 180px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_002};
  background-color: ${({ theme }) => theme.colors.gray_000};
`
