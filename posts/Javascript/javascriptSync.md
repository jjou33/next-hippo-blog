---
date: "2021-11-13"
title: "동기 / 비동기 처리에 대한 이해"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6', 'Async', 'Sync']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 동기 / 비동기란?
---

* **Syncronous(동기)** : 요청을 보낸 후, **해당 요청을 기다렸다가 응답을 받은 다음 동작을 실행하는것 즉, 순차적으로 코드가 진행된다.**
* **Asyncronous(비동기)** : 요청을 보낸 후, **응답을 기다리지 않고 다음 코드를 실행한다.**
* **Javascript** 는 다른 언어와 마찬가지로 **동기적 처리가 기본**이지만, **일부 기능**은 **비동기로 처리가 가능**하도록 기능을 제공하고 있다고 이해하면 될 것같다.

**일부기능 : 오래걸리는 기능을 주로 비동기로 처리한다.**
- Rest API 요청
- 파일 및 DB 처리
- 타이머 및 암복호화

```js
console.log("1단계");

setTimeout(() => {
  console.log("2단계");
}, 2000);

console.log("3단계");

// 결과
1단계
3단계
2단계

```
### 문제점은 무엇일까?
---

* **프론트**의 특성상 **백엔드**와 **RESTFUL API** 를 통해 **데이터를 받아**와 화면에 뿌려 주는 역할을 하는데 **비동기**로 인해 **Response 를 받지 않았는데도 다음코드를 실행**하여 결과값을 기반으로 하지 않은 값에 대한 코드 로직들이 실행되는 문제가 발생한다.

### 해결방안(CallBack 함수)
---

* **Javascript** 는 **first-class-function** 이다.
  * **함수** 자체를 **변수**에 저장 가능
  * 함수의 인자에 **다른 함수를 인수**로 전달 가능
  * 함수의 **반환 값(return 값)**으로 함수를 전달 가능


```js

console.log("1단계");

// 실제로 3번째에 수행되야 할 내용
let callback = () => {
  console.log("3단계");
};

function myFunc(callback) {
  setTimeout(() => {
    console.log("2단계");
    callback();
  });
}
myFunc(callback);

```
