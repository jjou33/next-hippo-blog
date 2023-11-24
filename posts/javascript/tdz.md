---
date: "2022-03-15"
title: "TDZ(Temporal Dead Zone)"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6', 'TDZ']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 개요

---

실행 컨텍스트를 공부하던 중 **var** 와 **let,const**간의 차이 즉, **Variable Environment**와 **Lexical Environmnet**와의 환경 차이에 대해서 궁금증이 생겼다.

**var**의 경우에는 **Creation Phase** 단계에서 초기화 및 메모리값 할당(undefined)가 일어나지만 **let, const**의 경우 변수 선언만 하고 실제 할당은 **Execution Phase**에서 실제 할당이 일어 나게되면 메모리에 값을 할당 되게 된다.

그렇다면 **let,const**의 경우 호이스팅 현상이 일어나지 않는 것일까?

결과적으로 정답은 **아니오** 이다.

**let,const** 또한 호이스팅이 일어나지만 **TDZ(Temporal Dead Zone)** 에 의해 **Reference Error**가 발상하는 것이다. 일종의 방어가 된다고 보면 될 것이다.

이부분에 대하여 추가적으로 기록해 보겠다.

### TDZ(Temporal Dead Zone)이란?

---

**TDZ**란 **Temporal Dead Zone** 즉 코드 내 변수참조의 **사각지대**라는 의미를 가진다.

스코프의 시작 ~ 초기화 사이의 구간을 말한다.

해당 구간은 **블록 스코프** 내에서 실행컨텍스트가 실행되면서 해당 블록의 실행 컨텍스트 환경에 변수는 초기화가 되었으나 메모리에 값이 할당되지 않은 상태부터 실제 **Execution Phase**에서 해당 변수에 값을 할당할때까지의 구간이라고 생각하면 될 것 이다.

이 구간은 일명 **TDZ**라 불리며 죽은 공간으로 이해하면 될것 같다.

### TDZ(Temporal Dead Zone) 동작과정

---

```js
const a = "Hello";

console.log(a); // Hello
```

위 코드는 우리가 생각한대로 출력될 것이다.

전역 컨텍스트가 실행되면서 **Lexical Environment**에 **a**변수가 담기고 **Hello**값이 메모리에 할당되면서 정확한 출력이 이루어지는 것이다.

반면 아래의 경우를 보자.

```js
console.log(a) throw 'Reference Error**
const a = 'Hello';

console.log(a) // Hello
```

**Creation Phase**에서 실행 컨텍스트가 실행되면서 **a**의 변수가 선언되고 **Execution Phase**로 넘어오면서 코드를 읽어가는 도중 **a** 를 참조하는 구문을 읽는다.

이때 **Lexical Environment**에는 **a**의 변수가 메모리상에 올라가 있으나 **var**가 아니기 때문에 값이 **undefined**로 할당되지는 않았다.

따라서 위에서 말한 바로 이 구간까지가 **TDZ** 존이라고 불리우며 해당 구간에 있는 경우 **ReferenceError: Cannot access 'a' before initialization**가 발생한다고 생각하면 될것이다.

관련되서 이해하기 쉽게 참조할 수 있는 이미지가 있어 참고하도록 한다.

참고 사이트 : [https://dmitripavlutin.com/javascript-variables-and-temporal-dead-zone/](https://dmitripavlutin.com/javascript-variables-and-temporal-dead-zone/)

![image](https://user-images.githubusercontent.com/56063287/158120357-f9e6a954-aad8-4b95-9809-f23e9d59d7d0.png)

### TDZ 에 영향을 받는 구문은 무엇일까?

---

아래 1~4번까지의 구문들은 **TDZ**의 영향을 받는 구문이다.

1. let, const 변수

```js
// let

// Does not work!
count; // throws **ReferenceError**
let count;
count = 10;
-------------------
let count;
// Works!
count; // => undefined
count = 10;
// Works!
count; // => 10
-------------------
// const

// Does not work!
pi; // throws **ReferenceError**
const pi = 3.14;
-------------------
const pi = 3.14;
// Works!
pi; // => 3.14
```

2. class 구문

```js
// Does not work!
const myNissan = new Car("red"); // throws **ReferenceError**
class Car {
  constructor(color) {
    this.color = color;
  }
}
```

```js
class Car {
  constructor(color) {
    this.color = color;
  }
}
// Works!
const myNissan = new Car("red");
myNissan.color; // => 'red'
```

3. constructor() 내부의 super()

```js
class MuscleCar extends Car {
  constructor(color, power) {
    this.power = power;
    super(color);
  }
}
// Does not work!
const myCar = new MuscleCar("blue", "300HP"); // **ReferenceError**
```

```js
class MuscleCar extends Car {
  constructor(color, power) {
    super(color);
    this.power = power;
  }
}
// Works!
const myCar = new MuscleCar("blue", "300HP");
myCar.power; // => '300HP'
```

이 코드를 보면 **constructor()** 안에서 **super()** 가 호출되기 전까지 **this**를 사용할 수 없다.

**TDZ**는 인스턴스를 초기화하기 위해 부모 클래스의 생성자를 호출할 것을 제안한다.

부모 클래스의 생성자를 호출하고 인스턴스가 준비되면 자식 클래스에서 **this** 값을 변경할 수 있다.

4. 기본 함수 매개변수(Default Function Parameter)

기본 매개변수는 글로벌과 함수 스코프 사이의 **중간 스코프(intermidiate scope)** 에 위치한다. 기본 매개변수 또한 **TDZ** 제한이 있다.

```js
const a = 2;
function square(a = a) {
  return a * a;
}
// Does not work!
square(); // throws **ReferenceError**
```

기본 매개변수 **a**는 선언 전에 **a = a** 표현식의 오른쪽에서 사용되었다. a에서 참조 에러가 발생한다.

기본 매개변수는 선언 및 초기화 다음에 사용되어야 한다. 이 경우 init과 같은 다른 변수로 선언하여 사용한다.

```js
const init = 2;
function square(a = init) {
  return a * a;
}
// Works!
square(); // => 4
```

반면 아래의 1~3번까지의 구문은 **TDZ**의 영향을 받지 않는다.

1. var
2. Function
3. import

```js
// Works!
myFunction();
import { myFunction } from "./myModule";
```

### 5. TDZ에서의 typeof 연산자의 동작

---

**typeof** 연산자 또한 **TDZ**의 영향을 받을 수 있다.

아래의 코드를 통해 확인해본다.

```js
function doSomething(someVal) {
  // Function scope
  typeof variable; // => undefined
  if (someVal) {
    // Inner block scope
    typeof variable; // throws **ReferenceError**
    let variable;
  }
}
doSomething(true);
```

먼저 위 코드에서 **doSomething**의 **함수 스코프**와 내부의 **if**문에 있는 **블록 스코프**가 존재한다.

함수 스코프에서 **variable**의 경우 **undefined**로 출력되는것으로 봐서는 호이스팅이 적용되고 메모리에 **undefied**로 값이 할당된것을 볼 수 있다.

반면 **if**문의 블록스코프 에서는 **TDZ**의 영향을 받게 되어 **Reference Error**가 발생하는 것을 볼 수 있다.

### 참고 사이트

---

1. [https://dmitripavlutin.com/javascript-variables-and-temporal-dead-zone/](https://dmitripavlutin.com/javascript-variables-and-temporal-dead-zone/)
2. [https://ui.toast.com/weekly-pick/ko_20191014](https://ui.toast.com/weekly-pick/ko_20191014)
3. [https://velog.io/@open_h/Hoisting-and-TDZ](https://velog.io/@open_h/Hoisting-and-TDZ)
