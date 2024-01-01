import styled, { keyframes } from 'styled-components'
import theme from 'styles/theme'

export const WaveKeyframe1 = keyframes`
0% {
  transform: translate(85px, 0%);
}
100% {
  transform: translate(-90px, 0%);
}
`
export const WaveKeyframe2 = keyframes`
0% {
  transform: translate(-90px, 0%);
}
100% {
  transform: translate(85px, 0%);
}
`
export const WaveKeyframe3 = keyframes`
0% {
  transform: translate(85px, 0%);
}
100% {
  transform: translate(-90px, 0%);
}
`
export const WaveKeyframe4 = keyframes`
0% {
  transform: translate(-90px, 0%);
}
100% {
  transform: translate(85px, 0%);
}
`

export const WaveAnimationContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 1px 0;
  svg {
    width: 100%;
    .parallax4 > .mainWave {
      fill: ${({ theme }) => theme.color.background_001};
    }
  }
`

export const WaveAnimationBox = styled.div`
  .editorial {
    display: block;
    width: 100%;
    height: 100px;
    max-height: 100px;
    margin: 0;
    z-index: 5;
    bottom: 0;
    position: absolute;
  }

  .parallax1 > use {
    animation: ${WaveKeyframe1} 10s linear infinite;
    fill: ${theme.color.wave_003};
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax2 > use {
    animation: ${WaveKeyframe2} 8s linear infinite;
    fill: ${theme.color.wave_002};
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax3 > use {
    animation: ${WaveKeyframe3} 6s linear infinite;
    fill: ${theme.color.wave_001};
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax4 > use {
    animation: ${WaveKeyframe4} 4s linear infinite;
    fill: ${theme.color.background_001};
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
`
