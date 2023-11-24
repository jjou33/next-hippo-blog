---
date: "2022-07-28"
title: "[Typescript] typescript 의 모듈화"
image: typescript.webp
rootCategory: Programming
category1depth: Languages
category2depth: typescript
keywords: ["Typescript", "Module"]
excerpt: Typescript 개발관련 포스팅을 기록하는 공간입니다.
isFeatured: true
---

### 1. 개요

---

외부 **라이브러리** 를 사용하는 경우 만약 해당 **라이브러리** 에 **type** 이 정의되어 있지 않다면 어떻게 **type** 을 정의해서 사용할까? 에 대한 내용을 포스팅하도록 한다.


### 2. axios
---

**npm** 을 통해서 **axios** 에 대한 **라이브러리** 를 설치 후 **import** 를 통해 사용해 보도록 하자.

```bash
npm install axios
```

이후 **ts** 파일에서 사용해보면 별 다른 오류 없이 사용할 수 있는 것을 볼 수 있다.

그 이유는 **node_modules** 내부 **axios** 폴더 아래는 이미 **type** 에 대한 정의가 declare 되어 있기 때문이다.

내부로 들어가보면 **index.d.ts** 파일에 axios 에 대한 **type** 이 정의되어 있다.

따라서, 만약 내가 필요한 **라이브러리** 를 설치했는데 **ts** 파일에서 사용 시 **type** 에 대한 정의가 없다면? 

우리는 스스로 **type** 을 정의하는 파일을 만들어야 할 것이고, 아니면 관련되서 **type** 을 정의한 **외부 라이브러리** 를 설치하여 사용해야 한다.

앞으로 **프로젝트** 에서 사용할때 유의해야 할 것이다.

### 참고 사이트
---

- [인프런 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%EC%A0%84/unit/61104?tab=community)
