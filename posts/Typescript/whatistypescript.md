---
date: "2022-07-10"
title: "[Typescript] Typescript 이란 무엇일까?"
image: typescript.webp
rootCategory: Programming
category1depth: Languages
category2depth: Typescript
keywords: ["Typescript"]
excerpt: Typescript 개발관련 포스팅을 기록하는 공간입니다.
isFeatured: true
---

### 개요

---

이번에 대규모 차세대 프로젝트에서 **프론트 공통개발**을 담당하게 되면서 여러가지 새롭게 써보고 구현해야되는 것들이 생겨났다.

우리는 **Vue3**프레임워크를 사용해서 진행하게 되므로 기본이되는 **Typescript**를 활용할 계획이어서 빠르게 학습을 진행하게 되었다.

진행하면서 조금씩 중요한 부분들을 작성할 예정이다.


### 왜 TS 를 사용할까?
---

먼저 가장 중요한 부분은 **Type** 에 대한 정의와 **정합성**을 **자동으로 체크**해준다는 점이다.

예를 들어 아래와 같은 코드를 보면

```js
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
	return axios.get(url);
}

fetchUser().then(function (response) {
	return response;
});
```

위 코드에서 **fetchUser**에 대한 **타입**을 정의 하기 위해 굉장히 복잡하게 작성을 해야 하며 코드가 복잡해 질 수록 완벽하게 작성하기가 힘들어 질 것이다.

또 아래 코드를 확인해보자.

```js
// @ts-check

/**
 * @param {number} a 첫번쨰 숫자
 * @param {number} b 두번째 숫자
 * @returns
 */
function sum(a, b) {
	return a + b;
}

sum(10, "20");
```

이와 같이 **JS**로 타입을 정의할 수 있지만, 상당히 손이 많이 갈 것이다.

또한, **JS**에서 위처럼 정의를 작성하였더라도 실제 **sum(10, "20")**을 호출하면 **number**가 들어와야할 자리에 **String**이 들어왔지만
에러가 발생하지 않는다.

이러한 부분을 해결하기 위해 **// @ts-check**를 넣어줄 수 있지만, 역시 번거로울 것이다.

반면 **TS**로 작성하면 아래와 같이 간단하게 해결된다.

```js
function sum1(a: number, b: number): number {
	return a + b;
}

const result = sum1(10, 20);
console.log(result.toLocaleString());

```

변수의 타입과 **Return** 타입또한 명시를 해줄 수 있고, **result**를 사용할때 자동완성으로 **number**관련 함수를 작성할 수 있는 부분도
상당히 큰 장점이 될 수 있다.

### ts 파일 compile
---

**TS**파일을 브라우저에서 읽을 수 있도록 **Compile**작업이 필요하다.

이를 가능하게 해주는 것이 **tsc 명령어** 이고 이는 **ts**라이브러리를 설치해야 한다.

```bash
npm i typescript -g
```

**-g**로 설치하는 이유는 **시스템 레벨**에 설치하기 위해서 이다.

설치가 완료되었으면, 커멘드창에 **tsc**명령어를 통해 **compile**을 진행하게 되고 이후에 동일한 이름의 **js**파일이 생성되게 된다.

```bash
tsc [ts파일 이름]
```

실제로는 이렇게 수동으로 하지 않고 **Webpack** 혹은 다른 **Bundler**를 통해서 위 작업을 자동화 한다.

이때 프로젝트 하위에 **tsconfig.json**파일을 생성하고 **compilerOptions** 객체를 생성하고 그 안에 각각의 옵션 여부를 작성하는 방식이다.

```json
{
    "compilerOptions": {
        "allowJs": true, // 이 프로젝트 안에 JS 파일을 허용여부
        "checkJs": true // @ts-check 를 통해서 JS 역할을 할 수 있는 기능 가능 여부
		// ... 등등
    }
}
```

관련된 **Option**은 [공식문서](https://www.typescriptlang.org/ko/tsconfig)에서 확인 할 수 있다.



### 참고 사이트

---

- [https://www.inflearn.com/course/vue-js-%EB%81%9D%EB%82%B4%EA%B8%B0-%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90/dashboard](https://www.inflearn.com/course/vue-js-%EB%81%9D%EB%82%B4%EA%B8%B0-%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90/dashboard)

- [Jest 공식 문서](https://jestjs.io/)