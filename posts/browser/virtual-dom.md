---
title: "Virtual Dom (가상돔)"
date: "2022-02-06"
image: virtualdom.png
rootCategory: Programming
category1depth: Web
category2depth: browser
keywords: ["VirtualDom", "SPA"]
excerpt: 브라우저에 관한 학습 내용을 기록하는 공간입니다.
isFeatured: true
---

### 개요

---

실무에서 Vue.js 라는 SPA 개념의 프레임워크를 사용하면서 가상돔에 대한 궁금증이 생겼다.
가상돔은 무엇이며 왜 사용해야할까? 간단하게만 정리해 보았다.

### Virtual DOM 은 무엇일까?

---

앞선 포스팅에서 브라우저가 그려지는 과정에 대해서 공부한적이 있다.

간단하게 복기하자면 브라우저는 아래와 같은 루트로 사용자의 호출부터 그려지기 까지의 과정이 실행된다.

![image](https://user-images.githubusercontent.com/56063287/152685826-6677ed83-921a-4853-8e4c-9163ec28d859.png)

이렇게 진행되면 되는데 왜 **가상DOM** 이란 개념이 나온것일까?

### Virtual DOM 은 무엇을할까?

---

위와 같은 과정으로 사용자가 호출하고 서비스가 흘러간다면 문제될 것이 없을 것이다.

하지만, 근래에 프론트엔드의 트랜드의 변화로 **SPA(Single Page Application)** 의 프레임워크가 생겨나면서 서버에 요청해서 **HTML** 소스를 받아오는게 아닌 수시로 **DOM** 의 데이터를 변경해달라고 브라우저에게 요청하는 방식이 생겨났다.

이렇게 되면 브라우저는 자바스크립트가 요청하는 모든 **DOM 변경** 요청에 대해 실행하려 한다.
브라우저는 요청이 오면 **DOM** 트리를 분석하고 **Javascript** 가 요청한 **Node** 를 찾아 요청사항을 수행하고 **CSS** 트리를 만들고 둘을 합쳐 **Render Tree** 를 민들어 그리고 노출시킬 것이다.

하지만 수천개의 요청이 계속해서 온다면? 굉장히 효율적이지 못할 것이다.

**Virtual DOM** 은 이러한 단점을 개선하기 위해 등장하였다.

만약 10000번의 **DOM** 변경 요청이 온다고 가정하자.

**Virtual DOM** 은 브라우저에서 그려지기 전에 먼저 10000번의 요청을 **DOM** 을 추상화한 **가상DOM** 에 업데이트 하고 **최종 완성된 DOM**만 브라우저에서 위 과정을 통해 그리고 화면을 노출하면 된다.

즉, 불필요한 랜더링 횟수를 줄일 수 있는 것이다.

### Virtual DOM 은 어떻게 빠르게 가능할까?

---

가상돔은 **자바스크립트 객체** 의 형태로 표현되고 **메모리**상에서 동작하기 때문에 실제 렌더링되는 것이 아니어 시간이 빠르게 최소화 된다.

**React나 Vue** 에서 이러한 **가상돔** 을 통해 메모리 상에서 완성됨 **DOM** 을 실제 브라우저 DOM 과 동기화해준다고 한다.

### 참고 및 출처 사이트

---

- [https://velog.io/@planethoon/Virtual-DOM](https://velog.io/@planethoon/Virtual-DOM)
- [https://www.hanumoka.net/2018/08/15/web-20180815-web-virtual-dom/](https://www.hanumoka.net/2018/08/15/web-20180815-web-virtual-dom/)
