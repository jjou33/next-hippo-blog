---
title: "프로젝트 기술구성 (2) : Typescript VS Javascript"
date: "2023-05-30"
image: script.webp
rootCategory: Programming
category1depth: Framework
category2depth: vue
keywords: ["Project", "Typescript", "Javascript"]
excerpt: Project 에 관련된 포스팅 공간입니다.
isFeatured: true
---

### 개요
---

회사에서는 현재 **Javascript** 를 사용하고 있다.

가장 최근에 진행한 프로젝트에서 **Javascript** 를 사용해서 구축했고 현재까지 운영을 해오다가 이제 차세대 프로젝트를 진행하면서 **Typescript** 로 신규 개발은 진행하기로 하였다.

이번 포스팅에서는 공통팀에서 어떤 이유로 **Javascript** 대신 Typescript 를 선택했는지 그 이유에 대해 포스팅을 진행한다.

###  Typescript 란 무엇일까?
---

**Typescript** 는 **Javascript** 에 정적 타입 문법을 추가한 프로그래밍 언어이다.

여기서 **Typescript** 의 특징에 대해서 잠깐 살펴본다.


### Javscript(인터프리터 언어) VS Typescript(컴파일 언어)
---

자바스크립트는 동적 타입의 인터프리터 언어이다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/8bfa4775-7ffc-4034-88cd-5c9237ec026b)

사전전 차이는 이정도가 있을 수 있다.

### TypeScript 선택한 이유
---

프로젝트의 기술셋을 정하는 과정에서 어떠한 이유로 Typescript 를 선택하였는지 장점과 단점을 통해 알아본다.

#### Typescript 의 장점
---

**첫번째**, **개발 생산성**의 이점 때문이다.

**Javascript** 는 자유도가 높은 언어이기 때문에 타입의 선언이 없더라도 값에 따라 타입이 지정된다. 

여기서 우리가 바라본 가장 큰 문제는 **에러를 발견하는 시점**이 **개발 타임이 아닌 개발 이후 런타임(run-time)에서야 발생**한다는 점이다.

간단하게 설명하면, 개발자는 개발하는 도중에는 에러를 알 수 없고 개발서버를 로컬에서 돌린 후 브라우저에서 런타임 도중 우리가 개발한 코드가 실행 되었을 때 에러를 확인할 수 있다는 말이다.

반면에, **Typescript 의 경우에 컴파일 시점에 에러를 미리 확인할 수 있기에 개발자가 비교적 많은 에러를 사전에 방지**할 수 있다.

**두번째**, 대규모 프로젝트에서 여러 **개발자간의 협업**에 도움이 되었기 때문이다.

현재 진행중인 프로젝트와 같은 인원이 많이 투입되는 프로젝트에서는 **협업을 위해서 타입의 올바른 정의가 중요**하다.

이때, **Typescript**를 사용하면서 **SPA 특성상 많은 컴포넌트가 재사용**되기 때문에 이에 조금 더 명확하게 **props 에 대한 정보를 사전에 확인**할 수 있는 장점이 있었다.

#### Typescript 의 단점
---

물론 단점도 있었다.

**첫번째**, 개발자들이 모두 **Typescript 의 러닝커브를 극복할 의지**가 필요했다.

하지만, 현재 프로젝트에서는 현업보다 프리렌서 구성인력이 많았고, 프론트엔드 파트를 담당하는 현업인력이 많지 않았기 때문에 이는 큰 문제가 되지는 않았다.

**두번쨰**, 코드의 복잡성이 높아지고, Type에 대한 컨벤션 정의 및 룰셋 등등 추가적으로 설정해주는 작업과 시간이 증가하는 부분이었다.

하지만, 개인적으로 이부분 때문에 **Typescript**를 사용하지 않기에는 장점이 너무 많았기에 이부분도 그게 문제가 되지는 않았던것 같다.

### 최종정리
---

결과적으로, 필자는 **프론트엔드 공통 파트**에서 프레임워크의 설계와 환경설정을 진행하면서 수많은 고민을 하였고, 스스로도 많이 공부를 해야했다.

느낀점은 새로나온 기술을 무지성으로 따라가는 것은 분명 문제가 될 수 있을것이다.

이유는 그에따른 러닝커브가 존재하고 조직에서 이를 극복하기 위한 준비가 필요하다고 생각했기 떄문이다.

하지만, 이러한 **과정을 이겨내고 조직에서 특정 기술을 도입한다면 그 자체만으로도 조직의 개발 능력이나 생산성 모두 높아질 수 있는 좋은 기회**라 생각이 들었다.

### 참고 사이트
---

- [https://www.samsungsds.com/kr/insights/typescript.html](https://www.samsungsds.com/kr/insights/typescript.html)
- [https://webisfree.com/2022-01-13/[typescript]-1%ED%8E%B8-%EC%A7%A7%EA%B3%A0-%EC%89%BD%EA%B2%8C-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0](https://webisfree.com/2022-01-13/[typescript]-1%ED%8E%B8-%EC%A7%A7%EA%B3%A0-%EC%89%BD%EA%B2%8C-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)