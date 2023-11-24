---
date: "2022-01-02"
title: "[EventLoop] 이벤트 루프 (1)"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6', 'EventLoop']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 개요

---

우리가 사용하는 자바스크립트 엔진은 단일 호출 스텍을 사용한다. 

즉, 웹 브라우저에서 요청한 작업들을 동시에 하나만 처리할 수 있다는 개념이다.
그러나 우리는 웹 브라우저에서 여러가지 작업들이 동시에 동작하는 것, 동시성을 보장하는 것을 볼 수 있다.

실제 자바 스크립트가 구동되는 환경(브라우저, Node.js 등) 에서는 여러 스레드가 사용되며, **이벤트 루프** 라는 개념을 통해 이러한 구동 환경이 단일 호출 스텍을 사용하는 자바스크립트 엔진과 연동하게 된다.

### 브라우저 환경 도식도

---

![image](https://user-images.githubusercontent.com/56063287/147879023-73b99022-e8e1-4940-ae60-548625ee4aea.png)

위 그림을 해석해보면 다음과 같다.

**Javascript Engine 은 Heap, Call Stack 으로 나누어져 있고 이는 추후에 별도에 포스트로 기록할 예정이다.**

자바스크립트 엔진은 단일 호출 스택(Call Stack)을 사용하며, 요청이 들어올 때마다 해당 요청을 순차적으로 호출 스택에 담아 처리한다.

이때 위에서 우리가 말했던 동시성 보장은 이 자바스크립트 엔진을 구동하는 환경 즉, Browser 나 Node.js 가 담당한다.

위 그림에서 볼 수 있듯이 우리가 사용하는 다양한 함수들은 Web API 영역에 따로 정의 되어 있고 이벤트루프, Task Queue 의 경우도 자바스크립트 엔진과 별도로 분리 되어 있다.

- **Web API** : **DOM, Ajax, setTimeout** 과 같의 브라우저에서 제공하는 API 를 의미한다.

### Call Stack 과 Run-to-Completion 방식

---

- **Run-to-Completion** : 하나의 함수가 실행되면 끝날 때까지는 어떤 작업도 끼어들지 못한다.

이러한 방식은 자바스크립트 엔진은 단일 호출 스택 즉, 하나의 호출 스택을 사용하며, 하나의 작업이 시작되어 스택에 쌓여 있으면 스택의 모든 작업들이 실행을 마치고 스택이 비워지기 전까지 어떠한 함수도 실행될 수 없다는 것을 의미한다.

참고하는 사이트에서 적절하게 이해할 수 있는 예제가 있어 가져와봤다.

```js
function delay() {
  for (var i = 0; i < 100000; i++);
}
function foo() {
  delay();
  bar();
  console.log("foo!");
}
function bar() {
  delay();
  console.log("bar!");
}
function baz() {
  console.log("baz!");
}

setTimeout(baz, 10);
foo();
```

실행 함수를 보면 **setTimeout -> foo()** 순이다.

1. setTimeout 이 실행되면 **baz()** 함수의 **console.log()** 함수가 먼저 **Call Stack** 에 추가되며 브라우저에게 Timer Event 를 요청 후 스택에서 제거
2. **foo()** 함수가 **Call Stack** 에 추가되고 이어서 내부 delay, bar 등의 함수가 동일한 방식으로 추가되었다 제거된다.
3. 마지막으로 foo 내부에 함수들이 종료되고 foo 함수가 **Call Stack** 에서 빠지는 동시에 baz 함수가 스택에 추가되어 실행된다.

### TaskQueue and Event Loop

---

그렇다면 setTimeout 이 실행되어 요청한 **baz()** 함수는 어디에 저장되어 있다가 **foo()** 함수가 끝남과 동시에 실행될 수 있는것일까?

- **Task Queue** : Call Stack 에 들어가지 전에 setTimeout, 사용자 이벤트 콜백 등이 저장되는 큐
- **microtask queue** : Promise.then 콜백이 저장되는 큐

여기서 우리는 이벤트 루프의 역할을 알 수 있다.

**Call Stack** 에 실행중인 함수들이 종료되어 비워질때마다 **Event Loop**는 **Task Queue** 에서 대기중인 콜백 함수를 꺼내와서 실행하는 역할을 해주는 것이다.

위 예제는 따라서 아래와 같이 단계가 추가되는 것이다.

- **setTimeout** 이 실행되고 스택에서 제거되면 10초 후 콜백함수가 **TaskQueue** 에 대기하고 있다가 현재 실행중인 **foo()** 함수가 종료된 후 이벤트 루프에 의해 **Call Stack()** 에 추가되어 실행되는 것이다.

### 정리

---

자바스크립트는 Java 와 같은 동기 방식의 언어와는 다르게 비동기로 이루어 지기 떄문에 특히나 내부적인 개념들이 중요한 것 같다.

아직도 부족한점이 너무 많아서 공부해야 할 것이 많지만, 이런 기본적인 것들부터 차근차근히 공부해 나가야 할 것 같다.

**새해에도 조금 더 열심히 살아보자 화이팅!**

### 참조 사이트

---

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [https://meetup.toast.com/posts/89](https://meetup.toast.com/posts/89)
- [https://tecoble.techcourse.co.kr/post/2021-08-28-event-loop/](https://tecoble.techcourse.co.kr/post/2021-08-28-event-loop/)
