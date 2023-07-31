import { Global, css } from '@emotion/react'
const defaultStyle = css`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    font-size: 62.5%; // 10px -> 1rem
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    // 테스트 용-----------------------------------
    --color-grey-50: hsl(265, 55%, 96%);
    --color-grey-100: hsl(265, 19%, 88%);
    --color-grey-200: hsl(265, 7%, 70%);
    --color-grey-300: hsl(265, 6%, 66%);
    --color-grey-400: hsl(265, 4%, 57%);
    --color-grey-500: hsl(265, 3%, 53%);
    --color-grey-600: hsl(265, 4%, 42%);
    --color-grey-700: hsl(265, 4%, 31%);
    --color-grey-800: hsl(276, 5%, 20%);
    --color-grey-900: hsl(280, 5%, 13%);

    --color-primary-50: #c8b3ce;
    --color-primary-100: #a07aaa;
    --color-primary-200: #884c97;
    --color-primary-300: #843897;
    --color-primary-400: #732392;
    --color-primary-500: #5a097a;
    --color-primary-600: #480264;
    --color-primary-700: #3d0264;

    --color-success-100: #a2f0bc;
    --color-success-500: #12bd4b;

    --color-error-100: #f1acc9;
    --color-error-500: #a10c4a;

    --size-1: 0.25rem;
    --size-2: 0.5rem;
    --size-3: 0.75rem;
    --size-4: 1rem;
    --size-5: 1.25rem;
    --size-6: 1.5rem;
    --size-8: 2rem;
    --size-16: 4rem;
    --size-20: 5rem;
    --size-40: 10rem;

    margin: 0;
    background-color: var(--color-grey-500);
    color: #252525;
    font-family: 'Roboto', sans-serif;
    // 테스트 용-----------------------------------
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export const getGlobalStyle = (isDarkMode: boolean) => css`
  body {
    background-color: ${isDarkMode ? '#111' : '#f0f0f0'};
    color: ${isDarkMode ? '#fff' : '#333'};
  }
`
const GlobalStyle = ({ isDarkMode }) => {
  return <Global styles={[defaultStyle, getGlobalStyle(isDarkMode)]} />
}

export default GlobalStyle
