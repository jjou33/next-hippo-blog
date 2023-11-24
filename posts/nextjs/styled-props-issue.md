---
date: "2023-08-31"
title: "[Next Project] Styled Component에 대한 Props valiation 이슈 "
image: 'nextjs.webp'
rootCategory: Programming
category1depth: Framework
category2depth: nextjs
keywords: ['NextJS', "Emotion", "Styled Component"]
excerpt: NextJS 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 개요

**Emotion** 에서 **Styled Component** 로 변경 후 잘 사용하던 중 문제가 발생하였다.

```bash
styled-components.browser.esm.js:1 styled-components: it looks like an unknown prop 
"overFlow" is being sent through to the DOM, which will likely trigger a React console 
error. If you would like automatic filtering of unknown props, you can opt-into that 
behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like 
`@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic 
filtering.)
```

현재 **Typhograpy** 라는 공용성 컴포넌트를 만들어서 사용하고 있는데, 관련된 **Props** 를 전달하는데 이런 이슈가 발생하는 부분이었다.

정확히 말하면 **Custom Props** 를 보내는 모든 Styled 에서 오류가 발생하고 있었다.

위 로그대로 찾으며 분석한 결과 문제는 명확했다 **StyleSheetManager** 을 활용하여 해결하는 방법이 나온다.

직접 모듈로 들어갔더니 아래와 같은 코드를 확인할 수 있다.

```ts

export declare function StyleSheetManager(props: IStyleSheetManager): JSX.Element;

export type IStyleSheetManager = React.PropsWithChildren<{
    ...
    /**
     * Starting in v6, styled-components no longer does its own prop validation
     * and recommends use of transient props "$prop" to pass style-only props to
     * components. If for some reason you are not able to use transient props, a
     * prop validation function can be provided via `StyleSheetManager`, such as
     * `@emotion/is-prop-valid`.
     *
     * When the return value is `true`, props will be forwarded to the DOM/underlying
     * component. If return value is `false`, the prop will be discarded after styles
     * are calculated.
     *
     * Manually composing `styled.{element}.withConfig({shouldForwardProp})` will
     * override this default.
     */
    shouldForwardProp?: undefined | IStyleSheetContext['shouldForwardProp'];
    ...
}>
```

결과적으로, *버전 6*부터는 **styled components** 에서는 **prop validation** 을 제공하지 않고 사용하기 위해서는 **transient props ($prop)** 형태로 보내야 한다는 의미이다.

만약 해야하는 상황일 경우 *StyleSheetManager*, *@emotion/is-prop-valid* 를 활용해서 해결하라는 의미이다.

정리하자면, v6 이상을 사용하고 있으나, Emotion 에서는 제공하던 **prop validation** 을 그대로 사용하려다 보니 **Styled Component** 에 정의되어 있지 않은 props 가 DOM 에 전달되어 발생하는 것이다.


### 해결방법
---

결과적으로 **transpiling** 을 통해 **$prefix** 를 붙여서 DOM 에 전달되지 않게 하려다 보니..코드도 복잡해지고 너무 고쳐야 할 부분이 많아서 이부분은 일단 멈추고 **StyleSheetManager** 를 통하여 해결방법을 찾았다.

해결방법은 간단하다 실제 Props 로 넘어오는 **Validation 을 isPropsValid** 함수로 감싸서 보내주면 된다.

그러면 렌더링 시 Props 를 전달하지 않게되기 떄문에 해당 오류를 방지할 수 있다.

```tsx
import theme from 'styles/theme'
import Layout from 'components/common/Layout'
import GlobalStyle from '../styles/GlobalStyle'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true
      }}
    >
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout pageProps={...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default App

```

### 참고 사이트
---

- [https://github.com/styled-components/styled-components/issues/4071](https://github.com/styled-components/styled-components/issues/4071)
- [https://seungahhong.github.io/blog/2022/07/2022-07-23-emotion/](https://seungahhong.github.io/blog/2022/07/2022-07-23-emotion/)
