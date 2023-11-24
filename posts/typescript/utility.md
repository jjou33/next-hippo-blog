---
date: "2022-08-10"
title: "[Typescript] 타입 호환 및 utility 타입"
image: typescript.webp
rootCategory: Programming
category1depth: Languages
category2depth: typescript
keywords: ["Typescript", "Utility"]
excerpt: Typescript 개발관련 포스팅을 기록하는 공간입니다.
isFeatured: true
---

### 개요

---

**typescript** 의 추론과 가드를 통한 타이핑을 학습한 내용을 포스팅한다.

### 타입 호환
---

타입 호환은 기본적으로 작은 범위의 타입이 큰 범위의 타입을 호환할 수 없다는 골자를 가지고 있다.

예를들면 아래와 같다.

```js
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  skill: string;
}

let developer: Developer;
let person: Person;

// 타입 호환은 오른쪽의 타입이 왼쪽 타입보다 클때 호환이 된다.
// 즉, 큰 타입에서는 작은 타입을 호환할 수 없다.
developer = person; // error
person = developer; // success
```

함수로 보면 

```js
// 함수

let add1 = function (a: number) {
  // console.log();
};
let sum1 = function (a: number, b: number) {
  //   return a + b;
};

sum1 = add1; // Success
add1 = sum1; // Error

```

**sum1** 이 더 큰 범위이기 때문에 **add1**의 타입을 호환할 수 있지만, 반대로 **add1** 이 **sum1**을 호환할 수는 없다.

제네릭은 아래와 같다.

```js
// 제네릭

interface Empty<T> {}
let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2; 
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2; // error
notEmpty2 = notEmpty1; // error
```

### Utility 타입
---

기존 **interface** 혹은 **type** 으로 정의할 수 있지만, **typescript** 에서 제공하는 **utility** 로 더욱 간결하게 작성할 수 있다.

예를 들어 **Pick** 을 사용한 아래의 코드를 보자.

```js
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}


// Product 의 일부만 가져온 인터페이스
// 중복이 발생한다.
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// 상세정보를 조회했을 때
// 하나의 프로덕트 정보를 뿌리는 함수
function displayProductDetail(
  // pick 은 Pick<가져올 전체 타입, 사용할 타입> 으로 사용한다.
  shoppingItem: Pick<Product, 'id' | 'name' | 'price'>
) {
  //
```

**Product** 인터페이스를 정의했고, 추가로 **ProductDetail** 이 가진 타입만 필요한 경우가 있다고 하자.

위와 같이 작성하면 중복이 발생한다.

따라서, **displayProductDetail** 함수에 **Pick** 을 사용해서 **Product** 인터페이스 내에 **id, name, price** 만 사용하는 타입으로 정의하겠다는 의미로 작성이된다.

이와는 반대로 아래와 같이 **Omit** 유틸리티를 사용할 수도 있다.

```js
function omitProductDetail(shoppingItem: Omit<Product, 'id' | 'name'>) {

}
```

**Omit** 은 반대로 **Product** 인터페이스 내 **id** 와 **name** 만을 제외한 타입을 가져가겠다는 의미이다.

이밖에도 여러가지 **Utility** 관련 함수가 많으며 자세한 정보는 [공식 사이트](https://www.typescriptlang.org/docs/handbook/utility-types.html)에서 확인이 가능하다.

아래 **Partial** 유틸리티 타입을 완성해가는 과정을 확인할 수 있는 코드를 참고한다.

```js
// 4. 유틸리티 타입 구현 - Partial

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

//  #1
type userProfileudpate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
};

// #2

type userProfileUpdate2 = {
  // 아래와 같이 접근하는 방식을 mapped 타입이라고 한다.
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
};

// #3

type userProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// 최종 partial

type UserProfileUpdateFinal<T> = {
  [P in keyof T]?: T[P];
};
```
### 참고 사이트

- [강의 사이트](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%EC%A0%84/unit/61104?tab=community)