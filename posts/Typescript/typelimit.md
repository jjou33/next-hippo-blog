---
date: "2022-07-30"
title: "[Typescript] 타입제한, enum"
image: typescript.webp
rootCategory: Programming
category1depth: Languages
category2depth: Typescript
keywords: ["Typescript", "Enum"]
excerpt: Typescript 개발관련 포스팅을 기록하는 공간입니다.
isFeatured: true
---


### 개요

---

우리가 모든 타입의 경우의 수를 두고 함수를 여러개 만든다는 것은 말도 안되는 일일 것이다.

따라서, 타입을 정의하기 위해 **Generic 타입**을 사용한다.

### 제네릭을 통한 타입 제한
---

```js
function logTextLength<T>(text: T): T {
  console.log(text.length); // 타입스크립트 입장에서는 어떤 타입이 들어올지 알 수 없기 떄문에 오류가 발생
  return text;
}

logTextLength('hi');
```
위 소스에서 볼 수 있듯이 우리는 **T**를 통해 타입을 먼저 정의해놓지 않고 사용하는 측에서 정의하게끔 함수를 만들었다.

다만, **ts**는 들어오는 타입이 **string**인지 알수 없기 떄문에 **text.length**는 사용할 수 없어 오류가 발생한다.

이를 해결하기 위해서 첫번째는 아래와 같이 타입을 배열로 줄 수 있다.

```js
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length); // 이런식으로 배열 타입으로 받겟다고 명시가 필요하다.
  text.forEach(text => {
    console.log(text);
  }); 
  return text;
}

logTextLength<string>(['hi']);
```

위 방법으로 진행하게 되면 오류는 나지않고 위와 같은 상황에서 사용할 수는 있지만 옳은 방법은 아닌것 같다.

**두번째 방법**은 제네릭의 **extends**를 활용한 타입 제한이다.

```js
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

logTextLength2('a'); // 오류 없음
logTextLength2({ length: 10 }); // 이렇게 length 라는 타입만 정의되어 있으면 오류가 발생하지 않는다.
logTextLength2(10); // 10은 length 를 제공하지 않기 떄문에 오류 발생

```
**LengthType** 을 **extends** 받기 때문에 **T** 는 항상 **length** 라는 타입을 알고 있을 것이다.

**extends** 는 기존에 정의되어 있는 **인터페이스** 혹은 **타입** 들을 확장하려 할때 사용된다

### keyof
---

**keyof** 를 활용해서 **extends** 된 **인터페이스** 혹은 **타입** 안의 하나만 들어갈 수 있도록 제약을 할 수 있다.

```js
// keyof 를 활용해서 shoppingItem 인터페이스 중 하나만 들어갈 수 있도록 제약
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// ShoppingItem 의 내부 타입중 한가지가 사용되어야 하기 떄문에 오류 발생
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption('name');
```
### enum 사용 예
---

**enum** 의 자세한 정의는 스킵하고 유용한 예를 하나 작성해본다.

```js
findContactByAddress(address: string): Contact[] {
  return this.contacts.filter(contact => contact.address === address);
}

findContactByAddress(PhoneType.Home)// 오류로 넣을 수 있는 스트링을 방지한다.

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}
```
위 코드는 **findContactByAddress** 라는 함수를 실행하기 위해서 **address** 라는 **string** 타입의 값을 넘겨야 한다.

이때, 정확한 값을 넘기면 문제없지만 개발하는 중 발생할 수 있는 **오기입** 은 문제가 될 수 있다.

가령, **home**을 넣어야 하지만, **homee**을 넣는다던지? 이러한 부분을 **enum** 으로 예방할 수 있다.

**PhoneType** 을 정의하고 우리는 **string** 문자열이 아닌 정의된 객체의 프로터티 **value** 를 전달할 것이다.

이는 자동완성이 될 뿐더러, 간헐적으로 발생할 수 있는 **오류** 를 잡아내기 좋다.

### 참고 사이트
---

- [강의 사이트](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%EC%A0%84/unit/61104?tab=community)