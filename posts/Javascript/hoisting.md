---
date: "2021-11-11"
title: "Javascript Hoisting(호이스팅)에 관하여"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6', 'Hoisting']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 호이스팅이란?
---

* 호이스팅이란 **끌어 올리다** 의 뜻으로 이해하면 된다.
* 우리가 알고 있는 여러 언어들은 통상 일반적으로 **함수 또는 변수**를 **선언**한 후에 **아래 라인**에서 선언한 것들을 **사용 가능** 하지만 **Javascript** 의 경우에는 **함수 또는 변수**를 **선언하기 전**에 **사용해도 에러가 나지 않는 현상**을 말한다.


### 문제점은 무엇일까?
---

* 개발자들이 생각하는 논리적인 흐름과는 조금 다른 순서로 구동되는 경우가 생기기 때문에 이를 통한 뜻하지 않은 이슈가 발생할 수 있다.

#### var
---

* var 키워드는 레거시 시스템에서 많이 쓰였으나, var 키워드를 사용하므로써 발생하는 호이스팅 이슈와 여러가지 부족한점이 있어 현재는 많이 쓰이지 않고 let, const 로 대체 되었다. 

#### var VS let 차이점은?
---

* var 의 경우 여러번 동일한 변수를 선언해도 에러가 발생하지 않는다. 즉, 동일한 변수를 동일 코드 안에서 여러번 선언해도 문제가 되지 않는다.

```js
var a = 1;
var a = 2;

console.log(a); // 2

```
* var 는 const 와 달리 값을 여러번 변경이 가능하다.

```js
var a = 1;
a = 3;
a = 4;

console.log(a); // 4

```

#### 문제예시
---

```js
console.log(a);
a = 10;
console.log(a);
var a = 20;

// 결과
undefined
10
```

위 코드에서 **a 는 4번째 줄에서 선언**되었기 때문에 **첫번쨰 console** 에서 a 가 선언되지 않았다는 **오류**가 나야될 것 이다. **하지만** **첫번째줄에서 에러**가 나지않고 **undefined** 가 출력된다.

통상 우리가 생각하는 코드는 아래와 같이 될 것이다.

```js
var a;
console.log(a);
a = 10;
console.log(a);
a = 20;
console.log(a);

console.log(a);
a = 10;
console.log(a);
let a = 20;
console.log(a);
```

![image](https://user-images.githubusercontent.com/56063287/141645301-b21809c1-f02d-46f7-9185-827c02b844bb.png)

위 결과와 같이 **var 가 아닌 let** 으로 사용할 경우 당연하게 **a가 선언**되기 전 console 에서 부를때는 **오류가 발생**한다.


#### 함수의 경우에도 동일하다.
---

```js
myfunction();

function myFunction() {
  console.log("Test");
}
```
위와 같이 함수가 선언되기 전에 사용하였음에도 불구하고 정상적으로 Test 가 출력된다.

### 이유는 무엇일까?
---

1. javascript 는 함수 및 변수 선언을 실행하기 전 가장 위로 옮겨서 실행한다고 생각하면 될 것같다.

2. javascript 가 실행되게 되면 코드 내 **var 로 선언된 변수**와 **함수**를 찾고 **맨위로 이동**시켜 가장먼저 실행시키고 나머지 코드가 실행되기 때문에 먼저 console 을 불렀음에도 선언은 되어 있고 단지 할당이 되지 않아 **undefined** 가 출력된다고 보면 될 것이다.

```js
console.log(a);
a = 10;
console.log(a);
var a = 20;

// 위 코드는 아래와 같이 실행된다.

var a
console.log(a);
a = 10;
console.log(a);
a = 20;
```

### 해결 방안은?
---

1. **var**를 사용하기 보단 **let , const** 를 사용하여야 한다.
2. 함수 선언을 표현식으로 사용한다.

```js
function myFunction() {
  console.log("TEST");
}

// 함수 표현식으로 사용

let myFunction = function() {
  console.log("TEST");
}

const myFunction = () => {
  console.log("TEST");
};
myFunction();

```


