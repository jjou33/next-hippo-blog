---
date: "2022-04-24"
title: "동기 / 비동기 처리에 대한 이해 (2)"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6', 'Async', 'Sync']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---



간단하게 **Callback**, **Promise**, **Async, Await** 에 대한 정의 및 설명을 포스팅해본다.

### Callback
---

우리가 아는 단순한 **Callback** 즉 함수를 인자로 보내고 특정 조건에 따라 **Callback** 함수를 실행하는 것을 말한다.

- 단점  

1. **CallBack** 함수가 길어지고 복잡해지면 일명 **Callback 지옥**에 직면할 수 있다. 이처럼 가독성이 좋지 않은 단점이 있다.

2. **예외처리**가 어렵다는 단점이 있다.

### Promise
---

**Promise** 는 ES6 에서부터 지원하였으며, **Callback**의 단점을 보완하게 된다.

**Promise**는 실행 시 **Executor**라는 **Callback** 함수를 실행 시키고 이는 **resovle, reject** 라는 **Callback** 함수를 인자로 가지고 있다.

따라서, Executor Callback 함수 내 로직에서 성공 시 **resolve**, 실패 및 에러처리를 위해 **reject** 함수를 사용하여 **Promise** 객체를 리턴하게되면
그 객체의 상태는 **pending** -> **fulfilled** 상태로 변경되고 리턴 값을 결과값으로 가진 **Promise** 가 리턴된다.

이후 **then**, **catch**, **finally** 등을 통해 적절한 동작 및 이벤트 헨들링을 하는 방식이다.

하지만, 이또한 **then** 을 통해 **프로미스 체이닝** 패턴으로 여러 **Promise** 를 중첩으로 사용하게 되면 **복잡한 가독성** 을 가질 수 있어 **Async, Await**를 통해 해결한다.

### Async, Await
---

- Async
 
 우리가 기존 **Promise** 를 사용하여 비동기 프로그래밍을 할때는 항상 executor 함수를 통해서 **resolve** 혹은 **reject** 를 통해 **Promise** 의 결과값을 반환해줘야한다.

 예를들어 **resolve , reject** 를 사용하지 않은경우 **Promise** 의 **상태**가 **pending** 상태에 머물며 **Promise** 가 전달되지 않고 **callback** 을 사용하여 **resolve, reject** 가 실행되면 **fulfilled** 상태로 변경되고 결과가 리턴된다.

 **Async** 를 사용하면 직접 **Promise** 를 사용하지 않아도 내부 로직이 실행되고 **Promise** 를 반환해준다.

즉, 조금 더 간편하고 가독성 있게 **Promise**를 사용할 수 있는 것이다.

- Await

 기존의 **Promise 체이닝으**로 각각의 결과값을 로직에 따라 이어가면 가독성이 좋지 않기 때문에
 **await** 를 통해 이러한 **프라미스 리턴** 로직을 쓰지 않고도 간단하게 **비동기 로직을 완성**할 수 있게 해준다.

 단, **에러처리**를 위해 **catch** 가 아닌 **try/ catch** 로 **에러헨들링**을 해야한다.

 **병렬로 진행**이 가능한 경우에 먼저 **변수에 함수**를 선언해 놓고 **await** 로 진행하게 되면 병렬로 해당 비동기를 진행하고
 실제 await 를 바로 실행할 수 있다.

 상황에 따라서 **Promise All , race** API를 통해서 적절하게 사용할 수 있다.

