---
date: "2022-01-03"
title: "[Javascript] Javascript Engine(Heap, Call stack)"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 개요

---

앞선 포스트에서 **이벤트 루프** 에 대하여 공부해봤다. 

공부를 하다보니 Javascript Engine 에 대하여 궁금증 이 생겨 추가로 공부하여 기록한다.

### JavaScript Engine

---

자바스크립트 엔진은 각 브라우저 별로 상이하다.

- **SpiderMonkey** : 파이어 폭스
- **V8** : Crome
- **Webkit** : 사파리
- **Chakra** : 익스플로러, 엣지

이 중에서 Google Crome 에서 사용하는 V8 엔진이 대표적인 예이다.

V8 은 **Crome** 과 **Node.js** 에서 사용하며 **메모리 힙(Heap)** 과 **Call Stack** 으로 구성되어 있다.

### JavaScript Engine 구성도

---

![image](https://user-images.githubusercontent.com/56063287/147932418-b248d484-c703-4328-9832-628eae3017f1.png)

- **Memory Heap** : 메모리 할당이 일어나는 곳
- **Call Stack** : 실제 실행되고 있는 작업(호출 스택)이 쌓이는 곳

### V8 메모리 구조

---

![image](https://user-images.githubusercontent.com/56063287/147935375-7a97ebcf-ef5e-46a9-ad95-670ab6924969.png)

위 그림은 V8 엔진의 메모리 구조에 대한 표현이다.

- **Resident Set** : 메모리 구조이며 실행중인 프로그램이 V8 프로세스에 할당된 일정량의 메모리로 표현되는 것을 의미한다.
- **Stack** : 실행 컨텍스트와 원시값, 객체의 포인터같은 **정적 데이터**가 저장
- **Heap** : 객체와 같은 **동적 데이터**를 저장

메모리 관련해서 **실제로 동작하는 과정**과 **Garbage Collector 를 통한 객체 소거** 등 자세한 내용에 대해서는 별도의 포스트로 진행할 예정이다.

### 호출 스택(Call Stack)

---

앞선 [이벤트 루프](https://jjou33.github.io/front/eventloop/) 포스트에서도 공부해보았지만, 자바스크립트는 기본적으로 단일 스레드 기반이기 때문에 **Call Stack** 과 **Task Queue** 를 활용하여 **동시성(Concurrency)** 를 보장하게 만든다.

**Call Stack** 은 현재 진행중인 작업 즉, 실행되고 있는 웹이 어디에 있는지를 기록하는 **자료구조** 이다.
현재 실행되고 있는 함수가 끝나 리턴값을 돌려주면 **Call Stack** 은 해당 함수를 제거하고 다음 Stack 을 실행하거나 모두 비었을 경우 **Task Queue** 에서 대기하고 있는 콜백 함수를 실행시킨다.

### Call Stack 예시

---

![image](https://user-images.githubusercontent.com/56063287/147934114-53a15ae8-d16f-4fea-9e43-d4201a1264f0.png)

위 그림에서 볼 수 있듯이 호출되는 순서대로 작업들이 **Stack** 에 쌓이게 되고 종료될 경우 FIFO 순서로 제거(POP) 된다.

하지만 Stack 에도 한계치가 있지 않을까? 라는 의문을 가질 수 있다.

Stack 에도 한계치가 있으며 아래와 같이 이해하기 좋은 예가 있어 가져와 보았다.

```js
function foo() {
  foo();
}
foo();
```

![image](https://user-images.githubusercontent.com/56063287/147934523-c400c6d8-0330-4749-91f4-f301a6bc4d34.png)

![image](https://user-images.githubusercontent.com/56063287/147934828-d35e23db-c54e-4595-81e2-56172541c18d.png)

위 함수를 호출하게 되면 **foo()** 함수가 계속해서 쌓일 것이고 만약 호출 스택의 크기를 초과하게 되면 브라우저에서 **Maximum call stack size exceeded** 에러를 발생시킨 후 종료시킬 것이다.

### 참조 사이트

---

- [https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
- [https://velog.io/@imnotmoon/JavaScript-V8-Engine%EC%9D%B4-%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A5%BC-%EA%B4%80%EB%A6%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95](https://velog.io/@imnotmoon/JavaScript-V8-Engine%EC%9D%B4-%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A5%BC-%EA%B4%80%EB%A6%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)
- [https://speakerdeck.com/deepu105/v8-memory-usage-stack-and-heap](https://speakerdeck.com/deepu105/v8-memory-usage-stack-and-heap)
