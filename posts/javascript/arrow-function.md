---
date: "2021-11-07"
title: "ES6 Arrow Fuction"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### ES6 화살표 함수 (Arrow Function, '=>') 선언
---

* 함수 선언을 보다 간단하게 하기 위해 고안되었다.
* 화살표 함수는 익명 함수이다. 따라서 호출하기 위해 변수에 대입하는 경우가 많다.

```js
let function = (함수인자) => { expression }
let function = (함수인자) => { statements }

let func = function(함수인자) {
  return expression
}
// 인자가 있을 경우
let myFunction = (name, size) => {
  console.log(name, size)
}
// 인자가 없을 경우
let myFunction = () => {
  console.log("이름")
}
// 인자가 하나일 경우 인자 괄호 생략 가능
let myFunction = name => {
  console.log("1");
  return "hello world" + name
}
// 별도 로직이 없을 경우(한라인으로 끝나는 경우 포함) 바로 리턴값 출력
let myFunction = () => "hello World"
let myFunction = number => number + 2
```

### Arrow Function 에서의 this
---

화살표 함수를 사용할 시 **this** 값은 상위 객체를 가르킨다.

예를 들면 아래와 같을 수 있다.

```js
let outer = {
  stringValue: "hyunwoo",
  arrayValue: [1,2,3],  

  inner() {
    console.log(this === outer) // true
    this.arrayValue.forEach(function(number) {
      console.log("일반함수 : " + this.stringValue + " / " + number)
      console.log(this === outer) // false
      console.log(this === window) // true
      // undefined : 1
      // undefined : 2
      // undefined : 3
    })
    this.arrayValue.forEach((number) => {
      console.log("화살표 함수 : " + this.stringValue + " / " + number)
      console.log(this === outer) // true
      console.log(this === window) // false
      // hyunwoo : 1
      // hyunwoo : 2
      // hyunwoo : 3
    })
  }
}
```

위를 보면 두개의 **forEach** 문으로 **outer**의 값을 출력하고 있다.

차이점은 첫번째 반복문의 경우 **Callback** 함수를 일반 함수형으로 작성하였고, 두번째는 **화살표 함수**로 작성하였다.

**일반 함수**일 경우 기본적으로 **CallBack** 함수의 **this** 는 **전역객체** 를 가르키기 때문에 **this === window** 값이 **true** 로 나온다.
반면 **화살표 함수**의 경우 **this === window** 는 **false**이고 **this** 는 **outer** 객체를 가르킨다.

이유는 화살표 함수의 **this**는 부모의 **this**를 그대로 가져오기 때문이다.

따라서, 화살표 함수를 무지성으로 사용하기 보다는 사용의 목적을 잘 고려해서 사용해야한다.

#### 화살표 함수를 남용하는 경우
---
##### 메소드 정의
```js
const person = {
        name: 'Lee',
        sayHi: () => console.log(**Hi ${this.name}**)
    };

person.sayHi(); // Hi undefined

```

위 코드의 경우 화살표 함수로 **메소드 정의**를 하고 있다.
하지만, **화살표 함수**를 사용하였기에 **this**는 **상위 컨텍스트** 인 **window** 를 가르키게 된다.
따라서 원하는 값이 나오지 않는다.

##### 2-2. prototype 메소드
----

화살표 함수로 **prototype** 메소드를 할당하는 것 또한 문제가 될 수 있다.

```js
const person = { // 모든 객체는 기본적으로 Object객체에 프로토타입 체이닝 되어있다.
      name: 'Lee',
      };
  Object.prototype.sayHi = () => console.log(**Hi ${this.name}**);
person.sayHi(); // Hi undefined

```

위의 경우에도 1번과 동일한 이유로 문제가 발생하여, 이런경우 **일반함수**를 할당하는것이 바람직 하다.

### 3. 화살표 함수와 new 생성자 함수
---

좋은 기회로 **화살표 함수**와 **new 생성자**간의 연관성에 대한 질문을 받게 되었다.

이부분에 대해서 깊이있게 생각해본적이 없었기에 이번에 한번 작성해보고 싶었다.

결과적으로 **화살표 함수는 생성자 함수로 사용할 수 없다.**

생성자 함수는 **prototype** 프로퍼티를 가지며, **prototype** 프로퍼티가 가르키는 프로토타입 객체의 **constructor**를 사용한다.
하지만, **화살표 함수**는 **prototype** 프로퍼티를 가지고 있지 않기 때문에 같이 사용할 수 없다.

```js
const Foo = (name) => {
  this.name = name
};
const Boo = function(name) {
  this.name = name
}
// 화살표 함수는 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty('prototype')); // false
console.log(Boo.hasOwnProperty('prototype')); // true
const foo = new Foo("FFF"); // TypeError: Foo is not a constructor
const boo = new Boo("FFF"); // Success

console.log("boo : " , boo.name) // boo :  FFF

```

위 코드에서 볼 수 있듯이 **Foo**의 경우 **화살표 함수**로 함수를 정의하였고, **Boo**의 경우 일반함수로 작성되었다.

차이점은 **Foo**의 경우 **prototype**프로퍼티를 가지지 않기 때문에 **false** 값을 확인할 수 있고, 결과적으로 **new Foo('FFF')** 에서 **TypeError** 가 발생한다.
반면, 일반함수의 경우 정상적으로 노출되는 것을 볼 수 있다.

**결과적으로 우리가 편하게 사용하고 있는 **Arrow Function**에 대해서 너무 쉽게만 보지 말고 실제로 **JS**상에서 동작하는 원리를 알고 진행해야 될 것이다.**

### 참고 사이트
---

- [https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC)



