---
date: "2023-06-19"
title: "[Playwright] Playwright 를 활용한 E2E 테스트 구축"
image: playwright.webp
rootCategory: Programming
category1depth: Testing
category2depth: Playwright
keywords: ["Testing","Playwright", "E2E"]
excerpt: Testing Library 에 관련된 포스팅 공간입니다.
isFeatured: true
---

### 개요
---

현재 프론트엔드 공통팀에서 **QC 팀**으로 업무를 이동해서 현재 테스트 프레임워크 구축 하는 업무를 진행하게 되었다.

그 과정을 간단하게 포스팅으로 기록한다.

### Cypress VS Playwright
---

처음 해당 업무를 맡았을때 고려했던 부분은 **"어떤 툴을 사용할까?"** 이었다.

이전에 사용해보기도 했고, 익숙했던 **Cypress 와 MS 에서 최근 출시한 Playwright 둘간의 차이**를 확인해야 했다.

#### Cyrpess 의 장단점
---

Cypress 의 **장점**은 아래와 같다.

- 풍부한 레퍼런스
- 쉽고 직관적인 UI
- 강력한 명령어 및 assertion 라이브러리

Cypress 에서 가장 눈여겨볼 부분은 풍부한 레퍼런스와 쉽고 직관적인 UI 이다.

#### Playwright 의 장단점

Playwright 의 **장점**은 아래와 같다.

- 다양한 크로스 브라우저에 대한 테스트 가능
- 네트워크 가로채기, 파일 업로드 및 다운로드, 모바일 디바이스 시뮬레이션 등 기능 지원
- Javascript 로 비동기에 강점

### 최종선택 Playwright
---

결국 팀장님과 논의 후 **최종 선택한 프레임워크는 Playwright** 이다.

선택이유는 아래와 같다.

**첫번째**, Playwright 의 **codegen Mode** 를 활용하면 테스트 코드 작성이 훨씬 수월해지는 부분이다.
CodeGen 은 아래와 같이 실제 브라우저서 사용자가 동작하는 Action 을 **자동으로 코드로 작성**해주는 부분이다.

이러한 부분은 생각보다 테스트 코드 작성 시간이 크게 단축된다.

**두번째**, Axios 및 Await 를 활용한 비동기 코드를 작성하는데 수월하다.
**세번째**, Javascript 및 Typescript 까지 지원이 가능하다.

다만, Playwright 의 경우 Cypress 보다 **추가적인 복잡한 환경설정이 필요**하고 javascript 의 개념이 많이 들어가는 부분은 감수해야 할 부분이었다.

### 참고 사이트
---

- [Playwright 공식문서](https://playwright.dev/)


