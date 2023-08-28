import styled, { keyframes } from 'styled-components'

export const ProgressBarContainer = styled.div`
  position: fixed;
  z-index: 1101;
  background: white;
  width: 100%;
  height: 4px;
  top: 0;
  left: 0;
`
const TextEffectKeyFrame = keyframes`
  to {
    background-position: 200% center;
  }
`
interface ProgressBarProps {
  scroll: number
}
export const ProgressBar = styled.div.attrs<ProgressBarProps>(props => ({
  style: {
    width: `${props.scroll}%`,
  },
}))`
  background-image: linear-gradient(
    -225deg,
    #edb575 0%,
    #b197cc 29%,
    #ff1361 67%,
    #fff800 100%
  );
  transform-origin: top left;
  height: 4px;
  opacity: 1;
  animation: ${TextEffectKeyFrame} 2s linear infinite;
  z-index: 1100;
`
