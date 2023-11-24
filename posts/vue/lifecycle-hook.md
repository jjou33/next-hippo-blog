---
date: "2022-09-05"
title: "Composition API Life Cycle Hooks 정리"
image: lifecycle.jpg
rootCategory: Programming
category1depth: Framework
category2depth: vue
keywords: ["Vue3","Life Cycle"]
excerpt: Vue3 에 관련된 포스팅 공간입니다.
isFeatured: true
---

### 개요

---

최근 **Vue3** 를 학습하면서 실무 프로젝트 고도화를 위해 설계 및 초기 프로젝트 구성을 진행하고 있다.

기존 **Vue2** 를 사용하면서 **Options API** 구현 방식을 주로 사용해왔다.

기존에도 외부 라이브러리 형태로 **Composition API**를 **Vue2**에서도 사용할 수 있었지만, 보통은 그냥 **Options API**를 사용하였다.

그러나, 이번에 고도화를 진행하면서 **Composition API**를 사용하여 구현하기로 정함으로써 **Composition API**와 **Vue2**와 대비되는 점에 대해서 간단히 기록한다.

### Composition API 등장 배경

---

**Vue2**에서 사용하던 **Options API**는 몇가지 단점을 보완하기 위해 **Composition API**가 등장하였다.

예를들어, 현재 구현하면서 느낀 몇가지를 이야기 하겠다.

**첫번째**, **Options API**는 **data**, **methods** 와 같이 **옵션**을 정의하고 구현하는 위치가 정해져 있다.
이때문에 소스가 커질수록 여러가지 역할을 하는 **함수**와, **변수**들이 선언되고 뒤엉켜 원하는 소스를 찾기가 복잡해지는 경향이 있다.

이러한점이 **Composition API**에서 조금은 해소될 수 있었던것 같다.

기본적인 프레임인 **setup**안에 **Reactivity**한 변수 혹은 함수들을 자유롭게 작성하므로써, 분산되지 않고 역할별로 **코드조각들을** **그룹핑**하기 쉬워졌다.

**두번째**, 앞으로 조금 더 학습이 필요한 부분이지만, **Composables**를 통해 **코드 재사용**을 더 쉽게 할 수 있다고 한다.
이부분은 조금 더 보강해서 추후 작성할 예정이다.

### Typescript 의 안정적인 지원

---

무엇보다 기존 **Vue2**보다 **Typescript**의 사용이 훨씬 안정적인 부분또한 만족스러운 부분이다.

예를들어, **Vue2**의 **Vuex, Route, Vetur** 또한 **Vue3**에서는 조금 더 **Typescript**를 사용하기 편해진 점이다.

### 최종결론

---

현재는 초기 프로젝트 셋팅 단계이기 때문에 많이는 체감하지 못하지만, **Vue2**의 장점을 가지며 동시에 **React**의 장점을 조금은 녹인듯 한 듯 보인다.

따라서, 앞으로 조금 더 진행하면서 관련 글을 포스팅할 예정이다.

### 참고 사이트

---

- [Vue 공식 사이트](https://vuejs.org/)
