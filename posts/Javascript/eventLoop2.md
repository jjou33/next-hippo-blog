---
date: "2022-06-11"
title: "[EventLoop] 이벤트 루프 (2)"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6', 'EventLoop']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---



### 개요

---

**Javscript** 는 생각보다 복잡하게 동작한다.

**Javscript Engine** 은 기본적으로 **단일 스레드(Single Thread)** 방식으로 동작한다.

하지만, 이러한 상황에서 그럼 **Browser**에서는 굉장히 많은 작업들이 동시에 일어나는 것은 어떻게 진행되는 것일까?

그 부분에 대한 답변이 **Event Loop** 이며 이에 대한 동작과정을 포스팅해보도록 한다.

### 단일 스레드

---

**Javscript** 는 앞서 말했듯이 **단일 스레드(Single Thread)**로 동작한다.

즉, 한번에 하나의 작업만 실행할 수 있다.

예를들어, **단일 스레드**로 동작한다면 우리가 **30초**가 걸리는 작업이 실행되면 그외 어떠한 작업도 **30초**동안은 어떠한 작업도 진행할 수 없다는 이야기 이다.

하지만, 현재의 웹 브라우저 생태계에서 이러한 일은 절대 있을 수 없다.

따라서, **Javscript** 는 **Event Loop**를 통해서 이를 해결하는 것이다.

### Event Loop 란?

---

![image](https://user-images.githubusercontent.com/56063287/172969760-d2b638b6-8dde-49c7-a5db-b59f3220e544.png)

**Javascript Engine** 은 **단일 스레드**로 작업이 진행되지만 위와 같은 문제를 해결하기 위해 **브라우저**는 **Web API**를 제공한다.

여기에는 **DOM API, setTimeout, HTTP, Ajax**요청 등이 있을 수 있다.

즉, **Event Loop** 는 크게 **Javscript Engine, WebAPI, Callback Queue** 이렇게 3가지의 조합으로 동작한다고 보면 될 것이다.

그럼 동작과정을 한번 확인해보자.

**Javscript Engine** 이 코드를 읽어내려 가면서 함수를 호출할 경우 **Call Stack** 에 해당 함수를 넣게 된다.

**스택**의 경우 **후입 선출**이며 아래와 같이 동작할 것이다.

![image](https://res.cloudinary.com/practicaldev/image/fetch/s--44yasyNX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gid1.6.gif)

**Javscript Engine** 은 코드를 읽어내려가다가 **greet()** 함수를 만나고 **Call Stack** 에 넣은 후 실행한 후 , **respond()** 를 넣고 **setTimeout()** Timer가 실행된다.

![image](https://res.cloudinary.com/practicaldev/image/fetch/s--d_n4m4HH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif2.1.gif)

이때 위에서 설명했듯이, **Javscript Engine** 은 해당 **Timer** 함수를 **브라우저**가 제공하는 **Web API**에 전달하고 작성한 **1000ms** 가 될때 까지 해당 공간에서 대기한다.

그렇게 되면 **Javscript Engine** 은 **1000ms**의 시간동안 다시 코드를 읽어 내려가며 동일한 방식으로 코드를 실행하게 된다.

![image](https://res.cloudinary.com/practicaldev/image/fetch/s--MewGMdte--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif3.1.gif)

그러던 중 **1000ms** 가 지나게 되면 **Web API**는 대기하던 **Timer** 함수의 **Call back**함수는 **Call back Queue** 로 전달되게 된다.

그러면 현재까지의 상황을 정리해보자.

현재 **Javscript Engine** 은 계속해서 **코드**를 읽어내려가며 **Call Stack**에 함수를 넣어 실행해가고 있는 상황이며 드디어 조건이 완료된 **Timer** 의 **Call back** 함수가 **Call back Queue** 에 있는 상황이다.

이때부터가 **Event Loop** 의 기능이 적용되는 상황이다.

![image](https://res.cloudinary.com/practicaldev/image/fetch/s--b2BtLfdz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif4.gif)

**Event Loop**는 **Javscript Engine** 의 **Call Stack**을 모니터링 하다가 **Call Stack**이 모두 비워지는 순간이 오면 **Call back Queue** 에서 대기하고 있는 **Call back** 함수를 **Call Stack**으로 옮겨주는 역할을 한다.

이때, 우리가 주의해야 할 부분은 **Javscript Engine** 은 **Run-to-Complete** 방식으로 실행된다.

이는 **하나의 함수가 실행되면 끝날 때까지는 어떠한 작업도 끼어들지 못한다**는 의미이다.

즉, 이러한 방식은 자바스크립트 엔진은 단일 호출 스택 즉, 하나의 호출 스택을 사용하며, 하나의 작업이 시작되어 스택에 쌓여 있으면 스택의 모든 작업들이 실행을 마치고 스택이 비워지기 전까지 어떠한 함수도 실행될 수 없다는 것을 의미한다.

![image](https://res.cloudinary.com/practicaldev/image/fetch/s--NYOknEYi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif5.gif)

그렇게 되면 **Javascript Engine** 은 읽던 코드가 아닌 **Event Loop**에 의해 전달된 **Call back** 함수를 실행하는 것이다.

### 실습

---

그럼 조금 더 이해하기 위해 아래와 같은 코드의 결과값을 유추해보자.

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

1. **Javascript** 에서 해당 **코드**를 확인하면 **실행 컨텍스트**를 통해 소스의 **렉시컬 환경을 구성하게 될 것이다.
2. 코드를 읽어내려가면 첫번쨰 **setTimeout(baz, 10)** 함수를 실행하면, **Call Stack**에 들어간다.
3. **Javscript Engine** 은 **Timer** 를 실행하기 위해 **Web API**로 전달하게 되며 그다음 **foo()** 함수를 실행한다.
4. **foo()** 함수 내 **delay()** 함수를 먼저 실행하고 **bar()** 함수가 실행되고 **delay()** 함수를 실행후 완료되면 **bar!** 가 콘솔에 추가될 것이다.
5. 이후 **foo!** 로그가 추가되고 **foo**함수가 종료되면서 **Call Stack**이 비워질 것이다.
6. **Event Loop**는 이때를 확인하여 **Call back Queue**에 대기하고 있던 **baz()** 함수를 **Call Stack**으로 옮기고 **Javscript Engine**은 이를 실행하며 마지막으로 **baz!**가 출력되며 코드가 종료될 것이다.

### Call Stack Queue 의 종류

---

![image](https://user-images.githubusercontent.com/56063287/172975440-a70d1f95-499a-4860-a411-2f11aba0f19f.png)

**Call back**이 들어오는 **Queue**에는 3가지 로 확인된다.

1. Task Queue

- **setTimeout**, **setInterval** 등의 비동기 함수가 포함된다.

2. Microtask Queue

- **Promise Callback, async Callback** 등의 비동기 함수가 포함된다.

3. Animation Frames

- **requestAnimationFrame**과 같은 **애니메이션**관련 비동기 함수가 포함된다.

여기서 중요한 부분은 각 **Queue** 마다 우선순위가 다르다는 것이다.

예를들어 **Call stack**이 비었을 때 **Event Loop**가 **Queue**를 보았는데 **Task , Microtask, Animation Queue** 에 모두 **Call back** 함수가 대기하고 있다고 가정하자.

이때, **Event Loop**는 **Microtask Queue > Animation Frame > Task Queue** 순으로 동작한다는 점을 알아야 한다.

### 정리

---

결국 이벤트 루프가 무엇일까? 에 대한 정답은 아래와 같을 것이다.

이벤트 루프는 싱글 스레드 언어인 **Javascript**가 코드의 동시성을 보장하기 위한 기능을 수행하는 요소이다.

**Javscript Engine**은 코드를 실행하면서 **Call Stack**에 넣으며, 비동기 함수의 경우 **Web API** 로 이동시켜 조건을 만족하면 **Call back Queue**로 전달해 **Javascript Engine** 의 **Call Stack**이 비워질 때 까지 대기를 합니다.

이후 **Call Stack**이 비워지면 **Event Loop**는 **Call back Queue**를 확인하고 각 **Queue**의 순서를 보장하면서 대기하던 **Call back** 함수들을 **Call Stack**으로 이동시켜 실행하게 됩니다.

**Call back Queue**에는 서로다른 역할을 하는 **Queue**가 존재하며 **setTimeout, setInterval** 등을 담는 **Task Queue**, **Promise, asycnc** 등의 **Call back**함수를 담는 **MicroTask Queue**, **requestAnimationFrame** 과 같은 **Call back**을 담는 **Animation Frame** 이 존재한다.

**Microtask Queue > Animation Frame > Task Queue** 순으로 우선순위를 잡고 **Event Loop**는 **Call Stack**이 비었을 경우 우선순위에 따라 순차적으로 **Queue**에서 대기중인 함수를 옮겨서 실행한다.

### 참조 사이트

---

- [https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke#syntax](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke#syntax)
- [https://talkwithcode.tistory.com/89](https://talkwithcode.tistory.com/89)
