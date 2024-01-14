---
date: "2022-08-06"
title: "[Typescript] 타입추론, 타입가드"
image: typescript.webp
rootCategory: Programming
category1depth: Languages
category2depth: typescript
keywords: ["Typescript", "Interface", "Guard"]
excerpt: Typescript 개발관련 포스팅을 기록하는 공간입니다.
isFeatured: true
---

### 1. 개요

---

**typescript** 의 추론과 가드를 통한 타이핑을 학습한 내용을 포스팅한다.

### 2. 타입 추론

---

```js
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
  //   value, 상속을 받아서 들어오게 된다.
  //   title
}
// DetailedDropdown 에서 Dropdown 인터페이스를 상속받았기 떄문에 아래와 같이 타입 정의가 가능하다.
let detailedItem: DetailedDropdown<number> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a',
};
```

위 코드에서 보면 **DetailDropdown** 에서 **Dropdown** 인터페이스를 상속받아 사용하기 때문에 문제없이 추론 및 정의가 가능하다.

### 3. 타입 가드

---

**Union** 을 사용해서 타입을 정한다고 생각해보자.

```js
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

```

위와 같이 정의한 뒤 사용을 하게되면 한가지 문제점이 발생한다.

```js
// Union 타입의 경우 공통된 속성에만 접근할 수 있다.
// 따라서, name 까지만 접근할 수 있다.
let tony1 = introduce();
console.log(tony1.name);
```

**Developer** 와 **Person** 두가지 인터페이스의 공통된 **name**만 사용이 가능하다는 문제이다.

이러한 부분은 아래와 같이 **as**를 활용해서 개선할 수 있지만 코드가 복잡해지면 점점 가독성이 낮아지게 된다.

```js
if ((tony as Developer3).skill) {
  console.log((tony as Developer3).skill);
} else if ((tony as Person3).age) {
  console.log((tony as Person3).age);
}
```

이러한 상황을 해결할 수 있는 부분이 **type 가드** 이다.

```js
// Type 가드 정의
// Developer 타입인지를 걸러주는 함수
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

// Type 가드 함수를 활용하면 아래와 같이 타입을 분기해서 적용할 수
if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
```

위와 같이 **isDeveloper** 함수를 통해 **Developer** 타입 여부를 리턴받는 가드함수를 만들어준다.

이후에 조건을 통해서 분기를 치게되면 훨씬 간단하게 코드가 작성될 수 있다.

### 참고 사이트

- [강의 사이트](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%EC%A0%84/unit/61104?tab=community)
