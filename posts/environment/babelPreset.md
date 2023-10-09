---
title: "바벨(Babel) 기초 개념 - Preset"
date: "2022-02-21"
image: babel.jpeg
rootCategory: Programming
category1depth: Web
category2depth: Environment
keywords: ['Framework', 'Babel', 'Preset']
excerpt: 개발환경에 필요한 도구들과 관련된 포스팅 입니다.
isFeatured: true
---

각기 다른 환경을 일원화 시켜주는 **바벨**에 대해 공부해본다.
해당 포스팅은 김정환님의 강의를 보며 정리하였다.

**_하단 참조 사이트 참고_**

###  실무에서 자주 쓰이는 preset

---

앞서 공부했던것 같이 플러그인을 모아서 따로 **preset** 을 만들어서 하는것 보다 현재는 바벨에서 제공하는 프리셋을 사용한다고 한다.

#### preset-env

---

현재 가장 많이 사용하고 있는 **preset-env** 에 대해서 알아본다.


>npm i @babel/preset-env
설치 후
**babel.config.js** 파일에 **preset-env** preset 을 설정해준다.

```js
module.exports = {
  presets: ["@babel/preset-env"],
};
```

설정까지 완료되면 기존과 같이 **npx babel ./src/app.js** 를 실행하면 **ES5** 로 변환후 노출까지 확인이 된다.

###  Target 브라우저

---

각 브라우저의 버전마다 지원하는 **js** 의 버전이 다르다.
따라서 이를 설정하는 대로 맞춰서 변환해 주는 법을 알아본다.

```js
// babel.config.js

module.exports = {
  presets: [
    "@babel/preset-env",
    {
      targets: {
        chrome: "79", // 크롬 79 를 지원하는 코드로 변환
        // ie: "11", // ie 11까지 지원하는 코드로 변환
      },
    },
  ],
};
```

먼저 크롬을 명시하고 babel 을 실행해보자.
결과는 아래와 같다.

```js
"use strict";

const alert = (msg) => window.alert(msg);
```

**ES5** 로 변환되지 않은 이유는 크롬의 79버전이 **Arrow-function**을 지원하기 때문이다.
그럼 **ie** 까지 추가해서 돌려본다.

```js
"use strict";

var alert = function alert(msg) {
  return window.alert(msg);
};
```

결과는 예상했던데로 나오는것을 볼 수 있다.

###  폴리필

---

만약 **ES5** 버전으로 변환이 불가능한 코드를 작성 후 **babel** 을 돌리면 어떻게 될까?

```js
new Promise();
```

**Promise** 는 **ES5** 로 변환할 수 없기 때문에 결과는 오류를 던진다.
이럴때 사용하는 것이 **폴리필** 이다.

```js
// babel.config.js:
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage", // 폴리필 사용 방식 지정
        corejs: {
          // 폴리필 버전 지정
          version: 2,
        },
      },
    ],
  ],
};
```

**useBuiltIns** 에 명시하는 방식대로 폴리필이 사용되어 진다.
**usage**, **entry**, **false** 세가지 값을 사용하고 **usage**, **entry**의 경우 **core-js**를 모듈로 가져온다.

결과는 아래와 같다.

```js
"use strict";

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

new Promise();
```

##### 참고문서

- [useBuiltIns](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)
- [corejs](https://babeljs.io/docs/en/babel-preset-env#corejs)

###  웹팩으로 통합

위 방식은 기본을 공부하는 과정이었고 실제로 웹팩과 통합하여 많이 쓴다고 한다.

#### babel-loader

---

실무에서 주로 사용하는 **babel-loader** 를 설치하고 사용해보자.

먼저 설치를 진행하면

```bash
npm i babel-loader
```

후 **webpack.config.js** 파일을 수정한다.

```js
// webpack.config.js

module: {
    rules: [
      // ... 생략
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/, // node_modules 를 babel-loader 가 처리하지 않도록 제외
      },
    ],
```

**npm run build** 를 실행하면 에러를 발생시킨다.

```bash
ERROR in ./src/app.js
Module not found: Error: Can't resolve 'core-js/modules/es6.object.to-string.js' in '/Users/hyunwoo/Desktop/DEV/webpackStudy/src'
 @ ./src/app.js 1:0-49

ERROR in ./src/app.js
Module not found: Error: Can't resolve 'core-js/modules/es6.promise.js' in '/Users/hyunwoo/Desktop/DEV/webpackStudy/src'
 @ ./src/app.js 2:0-40
```

위에서 보았듯이 babel-loader 를 사용하면 **corejs** 를 사용하여 대체 불가능한 소스를 변환하는데 **babel** 이 변환한 코드를 **webpack** 이 읽다가 **corejs** 를 알지 못하기 때문에 오류를 뱉어낸다.

그럼 **corejs** 패키지를 설치하자.

**npm i core-js@2**

다시 **build** 하면 에러가 사라진다.

### 정리

---

1. **npm i babel-loader @babel/core** 설치
- **babel loader** 를 웹팩에서 실행할때 **babel** 을 실행해야 하기 때문에 **babel/core** 를 설치
2. **webpack.config.js** 설정 및 **babel.config.js** 설정

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          // 브라우저 적용 버전
          chrome: "79",
          ie: "11",
        },
        useBuiltIns: "usage", // 폴리필 사용
        corejs: {
          //
          version: 3,
        },
      },
    ],
  ],
};
```

**useBuiltIns: "usage"** 설정을 통해 **ES5** 에서 변환하지 못하는 모듈을 **import** 해 온다.
이때 **import** 된 **라이브러리**를 사용할때 **corejs** 가 사용된다.

###  sass-loader 응용

---

위에서 해본 과정을 토대로 **sass** 파일을 **sass-loader** 를 통해 변환해보자.

우선 [sass-loader](https://github.com/webpack-contrib/sass-loader) 문서를 보고 진행해본다.

1. **npm i sass-loader sass** 설치가 필요하다.
2. **webpack.config.js** 에 **sass** 를 사용할 수 있게 수정해보자.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [
          // Creates **style** nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```

이렇게 실무에서 **babel** 을 사용하는 기초적인 법을 공부해보았다.

실제로 어떻게 쓰일지 간단한 프로젝트를 셋팅하면서 연습해봐야겟다.

### 참고 사이트

---

[https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html#3-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8](https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html#3-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8)
