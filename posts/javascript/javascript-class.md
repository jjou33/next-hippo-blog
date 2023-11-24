---
date: "2021-11-08"
title: "ES6 Class 객체"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6', 'Class']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---



### 클레스(Class)
---

* **Class**명 {} 로 함수와 같이 정의 가능
* Class 내부에 **Constructor() 를 통해 프로퍼티 및 값을 정의**한다.
* **Method** 는 **Class 안에 정의**하면 된다.

```js
class myClass {
  constructor() {
    this.v1 = 1;
    this.v2 = "string";
  }

  getMydate() {
    return "hello";
  }
}

const temp = new myClass();
console.log(temp.v1, temp.v2, temp.getMydate());
```

### 상속
---

* 자바와 같이 **extends** 를 통해 상속할 Class 선언
* 자식 클레스에서는 **super()** 부모 Class 의 생성자(constructor()) 호출을 생성자에서 호출해줘야함
* 상속을 통해 부모 클레스의 프로퍼티 및 값, 함수를 사용 가능
* 객체지향의 **오버라이딩, 오버로딩**이 아닌 **덮어씌어진다고 생각**하면됨

```js
class myClass {
  constructor(v1) {
    this.v1 = v1;
  }

  getMydate() {
    return "hello";
  }
}

class childClass extends myClass {
  constructor(v1, v2) {
    super(v1); // myClass 에 생성자를 호출함
    this.v2 = v2;
  }

  getMydate() {
    return "not Hello";
  }
}

const temp = new myClass(1);
const temp2 = new childClass(1, "value2");

console.log(temp.v1, temp.getMydate());
console.log(temp2.v1, temp2.v2, temp2.getMydate());

```

#### Class 의 Prototype
---

* Class 또한 하나의 **객체(Object)** 이므로 **Prototype** 을 통해 접근하여 **Property 추가**가 가능하다.
* **property.hasOwnProperty('프로퍼티명')** 을 통해 **내부 함수**인지 **추가 함수**인지 확인가능


```js
class myClass {
  constructor() {
    this.v1 = 1;
    this.v2 = "string";
  }

  getMydate() {
    return "hello";
  }
}

myClass.prototype.v3 = "Value3";

const temp = new myClass();
console.log(temp.v1, temp.v2, temp.v3, temp.getMydate()); // 1, string , Value3, hello

console.log(temp.hasOwnProperty("v2"), temp.hasOwnProperty("v3")); // true, false

```









