---
date: "2023-04-13"
title: "[Test FrameWork] Cypress + Jest 사용 트러블 슈팅"
image: jestcypress.png
rootCategory: Programming
category1depth: Testing
category2depth: Jest
keywords: ["Testing","Jest", "Cypress", "Trouble Shooting"]
excerpt: Testing Library 에 관련된 포스팅 공간입니다.
isFeatured: true
---

### 개요

---

프로젝트를 진행하면서 **QA 프로세스**에 대한 부담을 줄이기 위한 자동화에 대한 요청이 있었다.

우리는 **End to End 통합 테스트** 는 **Cypress** 로 정하였고, 개발자들이 개발하는 기능에 대한 단위 테스트는 **Jest** 를 활용하기로 하였다.

해당 기능을 탑재하기 위하여 **Cypress** 설정을 마치고 **Jest** 의존성을 추가하여 작업을 진행하자 몇가지 문제점이 발생하였다.

#### 문제점

---

**첫번째**, **Cypress** 타입 오류
**두번쨰**, **Jest** 에서 **Import / Export** 와 같은 **module** 을 사용할 수 없었다.
**두번쨰**, **Cypress** 와 **Jest** 에서 문법의 충돌이 발생한다.

이 두가지를 해결하기 위한 해결방안을 정리해 둔다.

### Cypress Type 오류

---

<img width="956" alt="image" src="https://user-images.githubusercontent.com/56063287/231732766-ffd0d1e2-52bc-4fd8-8137-1388687e8ff2.png">

위 사진과 같이 **Cypress** 테스트 파일을 작성하면 **Typescript** 오류가 발생한다.

개발하다가 의존성을 사용하다보면 가끔 **Type** 에 대한 의존성을 추가적으로 받아서 **NodeModule** 에 정의되어 사용되는 부분들이 있기때문에 혹시 **추가적인 의존성 추가가 필요할까?** 라는 생각을 먼저 하였다.

그러나, 이 부분은 그문제는 아니었고 **tsconfig** 에서 **cypress**에대한 **type** 설정을 지정해주지 않아서 발생한 부분이다.

#### 해결방안

---

결과적으로, **tsconfig.json** 파일에 아래 옵션을 추가해주면 해결된다.

```json
  "compilerOptions": {
    ...
    "types": ["cypress"],
  },
```

### isoldatedModules 에러

---

위 오류를 해결하고 나면 추가적으로 아래와 같은 오류가 발생할 수 있다.

![image](https://user-images.githubusercontent.com/56063287/231739770-2a8d564f-7bff-4171-9074-b0c9f9805bde.png)

```bash
cannot be compiled under '--isolatedModules'
because it is considered a global script file.
Add an import, export, or an empty 'export {}' statement to make it a module.
```

이때는, **tsconfig** 에 추가된 옵션 중 **isolatedModules** 에 대해서 확인해보면 된다.

해당 옵션을 **true** 로 주면 프로젝트 내에 모든 소스코드를 모듈로 만들도록 강제한다.

우리가 만드는 **typescript** 파일에서 **import** 혹은 **export** 를 사용하면 파일은 모듈화 되며, 그렇지 않으면 해당 파일은 **전역 공간** 으로 정의 되게 된다.

따라서, **전역 공간** 일때 **isolatedModules** 옵션 값이 **true** 로 되어 있다면 위와 같은 에러를 발생한다.

#### 해결방안

---

결과적으로 **babel** 과 같은 외부 도구를 사용하여 **Transpile** 하고 있다면 **esmodule** 로 해당 옵션을 **false** 로 꺼주면 해결된다.

### Jest 에서 Import / Export 사용하기

---

아래와 같은 함수를 테스트 한다고 가정하자.

```ts
// sum.ts

export const sum = (a: number, b: number) => {
  return a + b;
};

//sample.test.ts

import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

우리는 **sum** 함수에 대한 단위 테스트를 진행할 예정이다.

이를 위해 **sum.ts** 파일에서 **import** 를 통해 모듈로 가져와서 사용하려 한다.

하지만 실제 동작하면 아래와 같은 오류를 만난다.

![image](https://user-images.githubusercontent.com/56063287/231744407-23ff3900-dbe8-4333-a825-5a9d60a1752d.png)

이유는 **jest** 는 **import / export** 를 알지 못하기 때문에 이를 해결하기 위해 **babel** 과 같은 트렌스파일러를 통해서 변환을 해줘야 한다.

#### 해결방안

---

해당 내용은 [공식 홈페이지](jestjs.io/docs/en/getting-started)에 나와 있지만, 필자는 **ts-jest** 라이브러리를 통해서 해결하였다.

```bash
pnpm add -D ts-jest
```

위 커멘드를 통해서 의존성을 설치해주고 **jest.config.ts** 에서 **preset** 옵션을 아래와 같이 작성해준다.

```ts
preset: 'ts-jest/presets/default-esm',
```

![image](https://user-images.githubusercontent.com/56063287/231745924-0d1d3083-514a-42bb-8267-118478847b2d.png)

깔끔하게 성공하였다.

### Cypress + Jest 연동 시 tsconfig 분리

---

이 외에도 여러가지 오류가 발생할 수 있다.

필자의 경우에는 **Cypress** 문법과 **Jest** 문법에서 겹치는 **expect** 같은 문법에 대해서 오류가 발생하였다.

이러한 부분을 포함하여, 많은 사람들이 **Cypress** 와 **Jest** 를 함께 쓰면서 문제를 겪다보니 실제 **Cypress** 깃헙의 **Issue** 에도 많이 올라가있는 것을 찾아볼 수 있다.

덕분에 감사하게도 **Cypress** 깃헙에 함께 쓸 경우 **Typescript** 폴더 구조 분리에 대한 예시 샘플 프로젝트를 만들어 놓았다.

링크 : [https://github.com/cypress-io/cypress-and-jest-typescript-example](https://github.com/cypress-io/cypress-and-jest-typescript-example)

정리하면 **Root** 의 **tsconfig.json** 과 **jest.config.json** 에서 **Cypress** 를 배제하고 **Cypress** 는 **tsconfig** 를 **extends** 받아 분리된 **ts option** 을 주는 방식으로 구성하였다.

![image](https://user-images.githubusercontent.com/56063287/231751433-f54a2a64-98a0-4933-868b-585aec15c047.png)

**cypress** 폴더 하위에 **tsconfig.json** 파일을 추가하고 아래와 같이 설정한다.

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    "types": ["cypress"],
    "isolatedModules": false
  },
  "include": ["../node_modules/cypress", "./**/*.ts"]
}
```

그리고 **root** 디렉토리에 있는 **tsconfig.json** 과 **jest.config.ts** 파일에서는 **jest** 설정만 진행한다.

```json
// tsconfig.jsohn
{
  "compilerOptions": {
    ...
    "types": [
      ...
      "jest"
    ],
    ...
  },

// jest.config.ts

export deafult {
  ...
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  ...
}
```
