import styled, { keyframes } from 'styled-components'
import { themedPalette } from 'styles/themeVariables'

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
  padding: 0;
  svg {
    width: 100%;
    .parallax4 > .mainWave {
      fill: ${themedPalette.bg_color};
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
    fill: ${themedPalette.wave_primary3};
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax2 > use {
    animation: ${WaveKeyframe2} 8s linear infinite;
    fill: ${themedPalette.wave_primary2};
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax3 > use {
    animation: ${WaveKeyframe3} 6s linear infinite;
    fill: ${themedPalette.wave_primary1};
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax4 > use {
    animation: ${WaveKeyframe4} 4s linear infinite;
    fill: ${themedPalette.bg_color};
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
`
