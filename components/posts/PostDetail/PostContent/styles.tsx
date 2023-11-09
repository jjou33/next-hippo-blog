import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

import { cafe24OhsquareAir } from 'public/static/fonts'
import { themedPalette } from 'styles/themeVariables'

export const ContentsContainer = styled.div`
  margin-top: 100vh;
  background: ${themedPalette.bg_color};
  z-index: 1;

  @media screen and (max-width: 768px) {
    margin-top: 80vh;
  }
`

export const StyledDivider = styled.div`
  hr {
    height: 10px;
    border: 0;
    box-shadow: 0 10px 10px -10px #bbb inset;
    margin-top: 3rem;
  }
`

export const MarkdownWrapper = styled.div`
  ul {
    margin-left: 1rem;
    padding: 20px 0 20px;

    li {
      list-style: disc;
      padding-left: 10px;
    }
  }

  ol {
    margin-left: 1rem;
    padding: 20px 0 20px;
    font-style: italic;
    li {
      list-style: decimal;
      padding-left: 10px;
    }
  }
  ol,
  ul {
    font-weight: initial;
    color: ${themedPalette.text_color};
  }
`
export const ContentsWrapper = styled.article`
  width: 700px;
  margin: 2rem auto;
  font-size: 1rem;
  line-height: 2rem;
  border-radius: 6px;
  padding: 1rem;
  font-family: ${cafe24OhsquareAir.style.fontFamily};
  word-break: break-word;
  blockquote {
    border: 1px solid ${themedPalette.badge_color};
    border-left: 10px solid ${themedPalette.badge_color};
    background-color: ${themedPalette.bg_element_color};
    padding: 5px 20px;
    p {
      font-style: italic;
      font-weight: bold;
    }
  }
  a {
    color: #6199d1;
  }
  p {
    color: ${themedPalette.text_color};
    margin: 1rem 0;
    strong {
      color: ${themedPalette.strong_text_color};
      font-weight: 400;
    }

    em {
      color: ${themedPalette.em_color};
      font-weight: 400;
    }
  }

  p img {
    width: 100%;
    height: auto;
  }

  pre span {
    font-size: 13px;
    line-height: 0.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    margin: 2rem 0 0 0;
    padding-left: 0.7rem;
    color: ${themedPalette.text_color};
    height: 100%;
  }

  h1 {
    font-size: 40px;
    letter-spacing: -1;
  }

  h2 {
    font-size: 34px;
    letter-spacing: -0.6;
  }

  h3 {
    font-size: 25px;
    letter-spacing: -0.6;
    border-left: 3px solid #539dfd;
    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }

  h4 {
    font-size: 20px;
    letter-spacing: -0.6;
    border-left: 3px solid #ffd381;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  hr {
    border: 1px solid #000000;
    height: 3px;
    position: relative;
    border: none;
    margin: 1rem 0;
  }
  h3 + hr {
    /* &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      left: 0;
      display: block;
      clear: both;
      background-color: #539dfd;
    }
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      right: 0;
      display: block;
      clear: both;
      background-color: #e2dfdf;
    } */
    /* background: linear-gradient(to left, red, blue); */
    margin: 10px 0;
    border-radius: 10px;
  }
  h4 + hr {
    /* &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      left: 0;
      display: block;
      clear: both;
      background-color: #ffd381;
    }
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      right: 0;
      display: block;
      clear: both;
      background-color: #e2dfdf;
    } */
    /* background: linear-gradient(to left, red, blue); */
    margin: 10px 0;
    border-radius: 10px;
  }

  h5 + hr {
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      left: 0;
      display: block;
      clear: both;
      background-color: #f5a6a6;
    }
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      right: 0;
      display: block;
      clear: both;
      background-color: #e2dfdf;
    }
    /* background: linear-gradient(to left, red, blue); */
    margin-bottom: 20px;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    pre {
      code {
        span {
          font-size: 10px;
        }
      }
    }
  }
`
export const ImageWrapper = styled.div`
  position: relative;
`
export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`

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

export const SectionContainer = styled.div`
  padding: 0 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`
