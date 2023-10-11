import styled from 'styled-components'
import { themedPalette } from 'styles/themeVariables'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 3rem auto;
`

export const PageWrapper = styled.div`
  display: flex;

  /* width: 100%; */
`
export const PageBtn = styled.button<{ selected: boolean }>`
  padding: 4px 6px;
  background-color: ${({ selected }) =>
    selected ? `${themedPalette.badge_color}` : 'transparent'};
  color: ${({ selected }) =>
    selected ? `${themedPalette.badge_text}` : `${themedPalette.text_color}`};
  font-size: 20px;
  cursor: pointer;
  & + & {
    margin-left: 4px;
  }
  &:disabled {
    cursor: default;
  }
`
