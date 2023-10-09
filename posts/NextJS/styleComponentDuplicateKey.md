---
date: "2023-09-14"
title: "[Next Project] Recoil Duplicate Key Error 이슈 "
image: 'nextjs.webp'
rootCategory: Programming
category1depth: Framework
category2depth: NextJS
keywords: ['NextJS', 'Recoil']
excerpt: NextJS 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 개요
---

현재 개발하고 있는 **NextJS** 에서 전역 상태관리할 부분이 생겨서 **Recoil** 을 사용하려던 찰나, 아래와 같은 에러가 발생하였다.

```bash
Expectation Violation: Duplicate atom key "XXX". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.
    at expectationViolation (/Users/nsh/Desktop/PersonalDev/blog/next-hippo-blog/node_modules/.pnpm/recoil@0.7.7_react-dom@18.2.0_react@18.2.0/node_modules/recoil/cjs/index.js:671:19)
    at checkForDuplicateAtomKey (/Users/nsh/Desktop/PersonalDev/blog/next-hippo-blog/node_modules/.pnpm/recoil@0.7.7_react-dom@18.2.0_react@18.2.0/node_modules/recoil/cjs/index.js:752:9)
    ...
```

원인은 **NextJs** 에서 **HMR** 시 상태 **Key** 가 재생성 되는 부분이 문제인것이다.

HMR 의 경우 개발환경에서만 지원하기 떄문에 사실 **Production** 에 올렸을 때는 아마 나타나지 않을 것이다.

하지만, 개발하는데 이러한 에러로그가 계속해서 올라오는 부분은 나로서는 참기가 힘든 고통이다.

해결하는 방법은 간단했다.

### 해결 방법
---

이와 같은 문제로 고민하는 개발자들은 당연히 많을것이고 역시나 [Github Issue](https://github.com/facebookexperimental/Recoil/issues/733) 에 해당 이슈가 존재하였다.

```bash
I updated to version 0.7.6 and added the 
RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false environment variable 
and it solved it for me. I think this ticket can be closed now.
```
다행이 **0.7.6 버전 이후**부터 **RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED** 값을 통해서 문제를 해결할 수 있다.

.env 파일에 **RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false** 라인을 추가하면 문제가 해결된다.

### 참고 사이트
---

- [https://github.com/facebookexperimental/Recoil/issues/733](https://github.com/facebookexperimental/Recoil/issues/733)

