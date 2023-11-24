---
date: "2023-06-28"
title: "[Next Project] 프로젝트 기술 스택 정의"
image: 'nextjs.webp'
rootCategory: Programming
category1depth: Framework
category2depth: nextjs
keywords: ['NextJS', 'Project SkillSet']
excerpt: NextJS 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---


 ### 개요

최근에 시간이 많이 없어 현재 프로젝트의 기술 셋에 대하여 간략하게 정하였고, 이에 대한 포스팅을 진행한다.

### NextJS v13
---

![image](https://github.com/jjou33/hippo-blog/assets/134469187/ee007c65-cb25-424d-81c1-64f00eaeb925)


이번에 NextJS 가 13버전으로 올라가면서 많은것이 변경되었다고 한다.

이전 버전은 사용해보지는 않아서, 자세한부분은 좀 더 확인해봐야겠지만 전반적으로 NextJS 의 버전업 속도가 생각보다 빠른것 같다.

따라서, 대부분의 기업 혹은 서비스에서는 이전버전을 사용하겠지만 추후 13버전을 토대로 업데이트가 진행 될 것이기 때문에 고민 끝에 13버전으로 진행하기로 하였다.

아직 개발이 시작된것은 아니지만, 초기에 발생한 문제는 호환성이었다.

![image](https://github.com/jjou33/hippo-blog/assets/134469187/bd638ef7-8cd5-455c-bfc3-5c0bf983bf6d)

현재 공식 홈페이지에서는 SSR 을 활용하기 위해서는 styled-component 는 불가능하다고 한다.

개인적으로 **CSS-in-JS(styled component)** 를 선호하기 때문에 이는 치명적일 수 밖에 없었다.

13버전에 주요 변경사항인 **App Directory** 를 활용하기 위해서는 **CSS Module** 혹은 **Tailwind** 를 사용하라고 권장한다.

추후에 **SSR** 에도 **Styled Component** 가 적용될 가능성도 있지 않을까 하는 생각에 이번에는 **NextJS** 13버전 **Page Directory** 를 사용할 예정이다.

아직까지 **APP Directory** 와 **Page Directory** 둘다 사용이 가능하고, 현재까지 많은 회사들이 아마도 **Page Directory** 를 사용하고 있을 거라 생각한다.

**App Directory** 는 변경사항이 많기 떄문에 커뮤니티의 의견을 들어보면 신규 프로젝트가 아닌 이상 대부분의 회사가 점진적인 마이그레이션을 진행 할 것으로 생각된다.

### 전역 상태관리 TOOL
---

전역적으로 상태관리가 필요한 부분이 있다면, 이부분은 **Recoil** 을 사용할 예정이다.

### Tailwind CSS & MUI Design System
---

![image](https://github.com/jjou33/hippo-blog/assets/134469187/8e163ad6-3832-4d86-8603-9772b8419207)

따라서, **styled-components** 를 활용하여 진행을 고려했으나, 아래와 같은 문구가 있었다.

```bash
If you want to style Server Components, we recommend using CSS Modules or other 
solutions that output CSS files, like PostCSS or Tailwind CSS.
```

즉, **서버 컴포넌트**를 스타일링 하기 위해서는 아직까지는 CSS Modules 혹은 Tailwind Css 를 활용하라는 뜻이다.

13버전 이지만 Page Directory 를 사용할 예정이기 때문에 기존과 같이 **Emotion** 프레임워크로 진행 할 예정이다.

### Package Manager(Pnpm) / Language(Typescript)
---

추가적으로 패키지 매니저는 **PNPM** 으로 결정하였다.

**npm** 그리고 **yarn** 보다는 개인적으로 훨씬 편하고 번들링 사이즈라는 요소에서 효율적이기 때문에 괜찮다고 생각을 하였다.

개발언어는 **typescript** 를 활용하여 진행할 예정이다.

### 최종결론
---

아직 시작한건 없지만, 시작이 반이라는 말이 있듯이 시간이 나는데로 조금씩 진행해봐야겠다. -->