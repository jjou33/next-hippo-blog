---
date: "2023-08-24"
title: "[Next Project] NextJS v13 그리고 Styled Component FOUC 이슈해결"
image: 'nextjs.webp'
rootCategory: Programming
category1depth: Framework
category2depth: nextjs
keywords: ['NextJS', "Emotion", "Styled Component"]
excerpt: NextJS 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---



### 개요

요즘 회사일과 개인적인 일이 바빠서 따로 작업은 하였지만, 포스팅을 오랜만에 하게 되서 조금 반성하게 되는 하루이다.

현재 회사에서 하는 일 외로 짧더라도 집에서 **NextJS** 로 블로그를 변경하는 작업을 진행 중 이다.

공부도 할겸 진행하고 있는 중 기록을 해 두어야겠다 싶은 부분이 있어서 글을 적는다.

현재 **NextJS 13버전** 을 사용하고 있으며, **Page** 디렉토리를 사용하여 라우팅을 잡고 있다.

본 포스팅에서 기록할 내용은 NextJS 13 버전에서 Emotion 과 Styled Component 에 대한 정리이다.

### App Directory VS Pages Directory
---

알다시피 **NextJS 13 버전**에서 가장 크게 변경된 부분은 **App Directory** 페이지 라우팅 방식으로의 변경이다.

기술적인 자세한 내용은 차차 기록하기로 하고 말하고 싶은 부분은 왜 기존 방식인 Pages Directory 방식으로 신규 프로젝트를 진행하는가 이다.

이에 대한 나의 기준은 아래와 같았다.

**App Directory** 로의 전환은 생각보다 많은 부분이 변경되었기에, 대규모 운영중인 프로젝트에서는 빠르게 변경하지는 않을 것으로 생각한다.
만약 마이그레이션을 한다고 해도 점진적인 마이그를 진행할것이기 때문에 추후에도 당분간은 Pages 디렉토리에 대한 개념과 지식은 필요할 것으로 생각하였기 때문이었다.

또한, 변경된 점은 많긴 하더라도 근본적인 부분은 다르지 않기 때문에 한번정도는 레거시 버전을 경험 후 신규 버전으로 가고싶은 마음도 있었다.

### v13 에서의 Emotion 적용
---

현재 Gatsby 로 구축된 현재의 블로그도 **EmotionJS** 를 활용해서 UI 를 제작하였다.

이에 익숙하게 동일하게 **EmotionJS** 를 활요하여 개발을 하던 중 어떠한 문제가 발생하였고, 본포스팅에서는 이러한 문제를 해결하는 과정에 대한 기록을 할 예정이다.

### 새로고침 시 CSS 적용되지 않은 HTML 페이지 노출(FOUC)
---

개발하던 중 새로고침을 해보니 갑자기 아래와 같은 이상한 화면이 나타나기 시작하였다.

찾아보니 위와 같은 문제는 SSR 의 동작방식과 css-in-js 를 사용함으로써 발생하는 이슈로 확인되었다.

#### NextJS SSR 의 동작 원리 (Pre-Rendering)
---

우리가 사용하는 **NextJS** 의 렌더링 방식은 **SSR(Server Side Rendering) 혹은 SSG(Static Site Generate)** 와 같은 서버사이드에서 렌더링하는 **Pre-Rendering 방식**으로 진행되며, **HTML documnet 를 Client** 측으로 보내게 된다.

보통 흔히 쓰는 **getStaticProps, getServerSideProps** 등 NextJS 에서 지원하는 내장 모듈을 통해서 Client 측으로 보내지기 전 먼저 **Data Fetching 이 이루어지고 이러한 정보를 통하여 순수 HTML 렌더링이 수행**이 되는 형태이다.

이러한 동작을 통해 Client 측에서는 non-interactive 한 페이지 즉, 순수 HTML 페이지에 대하여 빠른시간에 전달받을 수 있고, 추가적인 interactive 한 속성들 즉, JS 모듈과 클릭, 이벤트 리스너들은 추후에 전달받아 **client** 단에서 **hydration** 이 이루어진 뒤 완전한 페이지를 볼 수 있는 것이다.

정리하면, NextJS 에서는 **Pre-rendering** 을 통해 interactive 요소들이 없는 단순 HTML 웹 페이지를 Client 측에 전달하고, 이후 React 가 Bundling 된 JS 들을 Client 에게 전송한다고 생각하면 된다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/1755586c-eba7-426d-9f6a-fd32538ab97c)

위에서 볼 수 있듯이, 초기 document Type 의 파일을 받고 이후 Bundling 된 JS 들이 chunk 단위로 다운로드 된 것을 확인할 수 있다.

이때, DOM 에 필요한 JS 요소들을 채우는게 **Hydration** 이라 말한다.

#### css-in-js (Emotion, Styled Component) 에서 발생되는 문제
---

이번 포스팅에서 말하고자 했던 부분은 이부분이다.

이름에서도 알 수 있듯이,** css-in-js 즉, css 를 js 안에서 컨트롤 **한다는 뜻이다.

이때문에, 새로고침을 했을때 CSS 가 전혀 입혀있지 않은 아주 이상한 페이지가 나오게되고 JS 를 받게되면 이후에 다시 정상적인 페이지로 적용이 된다.

![KakaoTalk_Photo_2023-08-25-10-57-22](https://github.com/jjou33/next-hippo-blog/assets/56063287/26a7a16f-5ab7-4035-8348-956bf1d25a65)

이러한 문제를 해결하려고 보았을때, 현재 NextJS [공식 문서](https://nextjs.org/docs/pages/building-your-application/styling/css-in-js)에서도 나와있다시피 emotion 에 대해서는 아직까지 업데이트가 완벽하지 않은 상황인것 같다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/1e77d6cd-5075-4063-95a9-7a6e67c8b477)

어차피 emotion 에서도 styled 방식으로 사용하였으니 styled component 로 전환하기로 하였고 문제를 해결할 수 있었다.


### 해결 방법
---

일단 NextJS 12 버전 이후부터는 babel 대신에 swc 에서도 styled component 를 지원하기 떄문에 아래와 같이 우선적으로 설정을 해준다.

```ts
// next.config.js

const nextConfig = {
  //...
  compiler: {
    styledComponents: true,
  },
  
}
```
이후 **_document.tsx** 파일을 생성하게되는데, **_document.tsx** 는 자동생성이 되지 않기 떄문에 직접 생성 한다.

**_app.tsx 이후에 실행이 되는데 메타태그, 웹폰트**내용을 커스텀 할 때 사용한다.

각각의 파일의 특징을 보면 **_app.tsx**는 로직, 전역 스타일 등 컴포넌트에 공통적으로 사용할 데이터를 다루며, **_document.tsx** 의 경우 공통적으로 적용할 HTML 마크업을 다룬다.

```tsx
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

```
**_document.tsx** 는 오직 서버에서 공통적인 **HTML** 을 다룬다고 하였다, 그렇다면 서버에서 렌더링할떄 미리 style 정보를 주입하면 되지 않을까?

그렇다 위 방법을 통해 서버사이드에서 **HTML** 을 렌더링 할때, **css styled 즉, styled-component 가 헤더에 주입**되게 된다.

정리해보면 서버에서 미리 HTML 을 마크업할 때 스타일까지 HTML 에 적용할 수 있기 떄문에 Client 에서 CSS 가 없는 순수 HTML 이 노출되는 이슈를 잡을 수 있다.

![KakaoTalk_Photo_2023-08-28-12-00-49](https://github.com/jjou33/next-hippo-blog/assets/56063287/02733a33-8d57-4973-9163-d22816b7590f)

개선 후 위와같이 CSS 가 서버사이드에서 렌더링 시 injection 되어서 첫 HTML 에서도 문제가 없는것을 알 수 있다.

### 참조 사이트

- [https://nextjs.org/docs/pages/building-your-application/styling/css-in-js](https://nextjs.org/docs/pages/building-your-application/styling/css-in-js)
- [https://handhand.tistory.com/291](https://handhand.tistory.com/291)
- [https://mniyunsu.github.io/nextjs-styled-component-setting/](https://mniyunsu.github.io/nextjs-styled-component-setting/)

