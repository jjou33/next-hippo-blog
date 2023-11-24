---
title: "바벨(Babel) 기초 개념"
date: "2022-02-19"
image: babel.jpeg
rootCategory: Programming
category1depth: Web
category2depth: environment
keywords: ['Framework', 'Babel']
excerpt: 개발환경에 필요한 도구들과 관련된 포스팅 입니다.
isFeatured: true
---


각기 다른 환경을 일원화 시켜주는 **바벨**에 대해 공부해본다.
해당 포스팅은 김정환님의 강의를 보며 정리하였다.

**_하단 참조 사이트 참고_**

###  바벨(Babel)은 왜 사용하는 것일까?

---

모던 웹 프론트엔드 환경이 거듭할수록 각 **브라우저**별로 같은 **javascript**라도 각기 다르게 지원하는 함수 혹은 메서드들이 생겨나기 시작하였다.

그래서 이러한 일관적이지 못한 상황을 해결하기 위해 **바벨**이 등장하였다.

**ECMAScript2015+로 작성한 코드를 모든 브라우저에서 동작하도록 호환성을 지켜준다.**

###  바벨 설치 및 기본동작 실습

---

설치는 2가지를 설치한다.

- core
- cli

```js
npm install @babel/core @babel/cli
```

설치 후 바벨을 사용해본다.

```js
// app.js

import MainController from "./controllers/MainController.js";
import "./main.css";
document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
console.log(process.env.NODE_ENV);

const alert = (msg) => window.alert(msg);
```

위 **app.js** 파일을 babel 명령어로 실행해본다. 실행 커멘드는 아래와 같다.

```bash
npx babel app.js

혹은

node_modules/.bin 폴더에 추가된 바벨 명령어를 사용 가능
```

결과는 아래와 같이 출려되는것을 볼 수 있다.

![image](https://user-images.githubusercontent.com/56063287/154802832-cf9cb83e-60d9-4092-8cb5-25f3ef71112e.png)

####  바벨 동작 과정

---

바벨은 세 단계로 빌드를 진행

1. 파싱(Parsing)
2. 변환(Transforming)
3. 출력(Printing)

먼저 **파싱**의 경우에는 작성된 코드를 **구문트리**로 변환하는 단계로 소스를 **Token** 별로 분해한다.
즉, **const alert = msg => window.alert(msg);** 를 예로보면 **const, alert , = , msg ...** 와 같이 토큰별로 분해 후 **ES5** 로 변환한다. 그리고 출력하는 과정을 거친다.

위 예의 경우에는 **변환**작업이 진행되지 않고 출력된것으로 보인다. **Input** 과 **Output** 이 같기 때문이다.

####  플러그인(Plugin)

---

**바벨(Babel)** 은 지정한 **코드**를 받아서 **코드**로 반환한다. 따라서 바벨은 **파싱**과 **출력**을 실질적으로 행한다고 생각하면 되며 실제 변환작업은 이 **플러그인(Plugin)**이 작업한다.

#### 커스텀 플러그인

---

```js
// 커스텀 플러그인
// my-babel-plugin.js:
module.exports = function my-babel-plugin() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;

        // 바벨이 만든 AST 노드를 출력한다
        console.log("Identifier() name:", name);

        // 변환작업: 코드 문자열을 역순으로 변환한다
        path.node.name = name.split("").reverse().join("");
      },
    },
  };
};
```

먼저 **커스텀 플러그인**을 작성할때는 최종 리턴값을 **visitor** 객체를 반환해줘야 한다.

해당 플러그인을 실행해본다 커멘드는 아래와 같다.

**npx babel ./src/app.js --plugins './my-babel-plugin.js'**

우리는 **app.js** 파일을 **커스텀 플러그인**을 통해 변환 후 출력해 보겠다.

```js
// app.js

import "./app.css";
import nyancat from "./nyancat.jpeg";

// DOM 이 Loading 되어졌을때 Body 에 해당 이미지를 넣는다.
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = **
        <img src="${nyancat}" />
    **;
});

console.log(process.env.NODE_ENV);
console.log(api.domain);
console.log(testValueNotString);
console.log(testValueString);
```

실제 출력되는 결과를 보면 아래와 같이 확인할 수 있다.

![image](https://user-images.githubusercontent.com/56063287/154803572-411431b3-f1c7-4596-aecc-e702ca29b004.png)

상단은 **Identifier() ~** 로 파싱된 각각의 **Token** 들을 찍는다.

그 후 우리가 작성한것과 같이 파싱된 것들을 역순으로 뒤집어서 이어 붙인다.

아래 부분은 토근 단위로 뒤집어 진 것을 볼 수 있다.

그렇다면 동일하게 **ES6 -> ES5**로 변환하는 바벨 홈페이지에 나와있는 소스를 붙여서 실행해보자.

```js
// app.js

const alert = (msg) => window.alert(msg);

// my-babel-plugin.js

module.exports = function myplugin() {
  return {
    visitor: {
      // https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-block-scoping/src/index.js#L26
      VariableDeclaration(path) {
        console.log("VariableDeclaration() kind:", path.node.kind); // const

        if (path.node.kind === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
};
```

위 소스는 **const** 를 **var** 로 변환시키는 플러그인을 작성했다고 보면 된다.

결과는 생각한되로 변경되는 것을 볼 수 있다.

![image](https://user-images.githubusercontent.com/56063287/154803743-1e86aa28-f5ed-4607-8fc1-15efe1c41cc5.png)

###  바벨 제공 플러그인 사용해보기

---

#### transform-block-scoping

[transform-block-scoping](https://babeljs.io/docs/en/babel-plugin-transform-block-scoping) 은 babel 공식문서에서 확인할 수 있다.

**const** 를 **var** 로 변환시켜주는 역할을 한다.

1. 패키지 설치

```bash
npm install @babel/plugin-transform-block-scoping
```

2. 실행

```bash
npx babel ./src/app.js --plugins @babel/plugin-transform-block-scoping
```

#### transform-block-scoping

[transform-arrow-functions](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)

**=>** 화살표 함수를 **ES5** 에서 인식할 수 있도록 변환시켜준다.

1. 패키지 설치

```bash
npm install @babel/plugin-transform-arrow-functions
```

2. 실행

```bash
npx babel ./src/app.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-arrow-functions
```

결과는 화살표 함수가 아래와 같이 **function ()** 폼으로 변경된것을 볼 수 있다. 또한 **const** 도 **var** 로 변경되었다.

![image](https://user-images.githubusercontent.com/56063287/154804207-eb36593b-4e79-4682-a325-d52e5289ad28.png)

#### transform-strict-mode

---

[transform-strict-mode](https://babeljs.io/docs/en/babel-plugin-transform-strict-mode) 플러그인은 **ES5** 부터 지원하는 엄격보드로 사용하기 위해 **use strict** 를 추가해 주는 플러그인이다.

1. 패키지 설치

```bash
npm install @babel/plugin-transform-strict-mode
```

2. 실행

```bash
npx babel ./src/app.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-arrow-functions --plugins @babel/plugin-transform-strict-mode
```

많은 **플러그인**을 사용할 수록 명령어가 길어지기 때문에 **webpack** 과 동일하게 **babel** 또한 **babel.config.js** 파일을 사용한다.

**babel.config.js** 파일을 생성 후 방금 실행했던 커멘드를 설정파일에 녹여보자.

```js
module.exports = {
  plugins: [
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-strict-mode",
  ],
};
```

그리고 간단하게 실행하면 된다.

```bash
npx babel ./src/app.js
```

###  프리셋

---

위에서 본것과 같이 각 기능별로 각각의 **플러그인**을 모두 설정하면 굉장히 많아질 것이다.

그래서 목적에 맞게 여러가지 플러그인을 세트로 모아둔 것을 **프리셋**이라고 한다.

#### 커스텀 프리셋

---

먼저 **커스텀 프리셋**을 작성할 파일인 **my-babel-preset.js**을 생성한다.
작성 후 **babel.config.js** 파일에는 해당 프리셋 파일의 경로를 추가한다.

```js
// my-babel-preset.js
module.exports = function myBabelPreset() {
  return {
    plugins: [
      "@babel/plugin-transform-block-scoping",
      "@babel/plugin-transform-arrow-functions",
      "@babel/plugin-transform-strict-mode",
    ],
  };
};

// babel.config.js
module.exports = {
  // 프리셋 정보 작성
  presets: ["./my-babel-preset.js"],
};
```

그리고 동일하게 실행해 보면 잘 돌아가는것을 볼 수 있다.

**위 내용은 실제 실무에서는 잘 사용하지 않지만 동작 원리를 알기 위해 좋은 예제 이기 때문에 기록해둔다.**

#### 참고 사이트

---

[https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html#3-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8](https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html#3-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8)
