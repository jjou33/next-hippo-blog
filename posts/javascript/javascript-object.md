---
date: "2021-11-07"
title: "JavaScript 객체 / Prototype"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6', 'Object']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 객체
---
> javscript 객체는 Property 와 Method(함수) 로 이루어져있고,Property 는 보통 Key, Value 로 이루어져 있다.

#### 객체 생성 방법
---

1. 객체 리터럴 방식
2. new Object() 생성 방식
3. 생성자 함수로 생성
4. ES6 기반 객체생성

### Property 와 Method
---

* Property 는 Key, Value 로 이루어져 있다.
* Javscript 는 클래스 기반 객체 지향은 아니고, Prototype 를 기반으로 둔 객체 지향 언어이다. 따라서 Java 같이 클래스 기반 객체지향와 문법이 다르고 이를 리터럴이라 부른다.
* Javscript 는 기존 방식인 객체 리터럴 방식과 ES6 에서 클래스 기반 객체 생성도 지원한다.

* 프로토타입의 객체는 클래스 기반과 달리 변수, 함수를 모아둔 객체를 가져다 사용하는 방식이라 생각하면 된다.


#### 객체 사용 예시
---

* 객체를 만들땐 보통 const 를 사용

```js
const property = {
  value1: 1,
  value2: "String",
  // 함수도 변수로 사용 가능
  getData: () => {
    return 1+2;
  }
}
```
#### Prototype(프로토타입)
---

* 생성자 함수에 프로퍼티 또는 메서드를 정의할 수 있다.
* 함수생성 동시에 .prototype 클레스에 접근 할 수 있고 신규로 정의하여 사용 가능하다.

```js
function tmp(v1, v2) {
  this.v1 = v1;
  this.v2 = v2;
}

// tmp.prototype.newFunc = function() {
//   return "hello";
// }

tmp.prototype.newFunc = () => "hello";
tmp.prototype.v3 = "String";

const temp2 = new tmp(1, "hello");

console.log(temp2.v1, temp2.v2, temp2.v3, temp2.newFunc());
```

위와 같이 객체 처럼 사용 가능하다.

### 객체 리터럴 사용
---

```js
const property = {
  value1: 1,
  value2: "String",
  // 함수도 변수로 사용 가능
  data: {
    v1: 2,
    v2: "Value2",
    // v3: v2 불가
    v3: this.v2 // Value2
    // v4: () => this.v2  불가 Arrow Function 에서는 this 를 쓰지 않는다.
  }
}
```
### Getter and Setter
---

* 보통 객체지향에서 은닉과 캡슐화을 위한 public, private protected 문법을 제공한다.
* getter 와 setter 를 사용해서 Property 의 값들을 수정하게 끔 사용하는법

```js
const property = {
  v1: 1,
  v2: "String"

  get getV1() {
    return this.v1
  }.

  set setV1(value) {
    this.v1 = value
  }
}

```








