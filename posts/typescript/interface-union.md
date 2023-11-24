---
date: "2022-07-16"
title: "[Typescript] InterFace VS Type / Union vs InterSection"
image: typescript.webp
rootCategory: Programming
category1depth: Languages
category2depth: typescript
keywords: ["Typescript", "Interface", "Union"]
excerpt: Typescript 개발관련 포스팅을 기록하는 공간입니다.
isFeatured: true
---

### 1. 개요

---

**TypeScript**에서 타입을 정의하는 **interface**와 **type**에 대해 비교해본다.

### 2. InterFace 와 Type 별칭 정의
---

**Interface**를 통해 타입을 정의하고 실제 변수를 선언할 때 해당 타입을 선언해주는 방법이 있다.
```ts

// InterFace
interface Person {
    name: string;
    age: number;
}
let param1 : Person = {
    name: 'hippo',
    age: 10
}
// Type 별칭
type Person = {
    name: string;
    age: number;
}

let param1 : Person = {
    name: 'hippo',
    age: 10
}
```
두가지 방법으로 정의할 수 있다.

**InterFace**로 정의한 경우 우리는 선언할때 해당 **InterFace**가 정의된 링크로 연결되어 정의된 속성을 볼 수 있다.
반면, **type**으로 정의한 경우 바로 정의된 타입을 볼 수 있다.

가장 큰 차이는 **타입의 확장 가능 여부**이다.

**Interface**는 확장이 가능하지만, **type**의 경우 확장이 불가능하다.
따라서, **InterFace** 사용을 권장한다.



### 3. Union 과 InterSection 의 차이
---

**typescript**에서는 **|**와 **&** 를통해 여러 타입들과의 조합을 정의할 수 있다.

먼저 **Union Type**의 경우 **|** 기호를 통해 작성한 **인터페이스**혹은 **타입**들의 속성 안에서 원하는 속성을 사용해도 무방하다.

반면, **InterSection** 타입의 경우 **&** 기호를 통해 작성한 **인터페이스** 혹은 **타입**들의 속성 모두를 가지는 하나의 타입을 사용한다.

그리고, **Union**타입의 경우 정의된 **타입**들의 공통된 속성만 **자동완성**을 제공하고 **InterSection**의 경우 모든 속성에 대한 자동완성을 제공한다.
```ts

interface Developer {
    name: string;
    skill: string;
}


interface Person {
    name: string;
    age: number;
}

// Union 사용의 예
function askSomeone(someone: Developer | dev) {
  ...
  // union 의 경우 정의된 타입들 간의 공통된 속성만 자동완성을 제공한다.
}

askSomeone({ name: '디벨로퍼',  skill: '웹 개발'}) // 가능
askSomeone({ name: '캡틴', age: 100 })           // 가능

// interSection 사용의 예

function askSomeone2(someone: Developer & dev) {
    // 각 속성에 대한 내용을 자동완성 하기 위해서는 type 가드를 적용하면 된다.
    // 가드를 사용하지 않았을 경우 Developer, dev 타입의 공통된 프로퍼티만 자동완성을 제공한다.
}

// 인터섹션 타입의 경우 모든 속성이 들어있어야함
askSomeone2({ name: '디벨로퍼',  skill: '웹 개발'})        // 불가능
askSomeone2({ name: '캡틴', age: 100 , skill: '웹 개발'}) // 가능

```
