import { styled, css } from 'styled-components'
import theme from 'styles/theme'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 8rem auto;
  padding: 1rem 0;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const SideButton = styled.span<{ side: string; disabled: boolean }>`
  position: relative;
  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #ccc;
          color: #666;
          pointer-events: none;
        `
      : css`
          color: #23adad;
          cursor: pointer;
        `}
  &::after {
    position: absolute;
    left: -5px;
    bottom: -5px;
    content: '';
    width: 10px;
    height: 10px;
    border-top: 2px solid;
    border-right: 2px solid;
    ${({ side }) =>
      side === 'left'
        ? css`
            transform: rotate(225deg);
          `
        : css`
            transform: rotate(45deg);
          `};
  }
`

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const PageBtn = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 2px;
  background-color: ${({ selected }) => (selected ? `#23adad` : 'transparent')};
  color: ${({ selected }) =>
    selected ? `${theme.color.deep_white}` : `${theme.color.text_001}`};
  font-size: 15px;
  cursor: pointer;
  & + & {
    margin-left: 4px;
  }
  &:disabled {
    cursor: default;
  }
`
