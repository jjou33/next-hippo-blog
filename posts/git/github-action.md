---
title: "[Git] Github Action 설정 오류"
date: "2023-10-29"
image: githubAction.png
rootCategory: OS & Management
category1depth: Management
category2depth: git
keywords: ['Git', 'Git Flow']
excerpt: OS 와 Management Tool 과 관련된 포스팅을 기록하는 공간입니다.
isFeatured: true
---

### 개요
---

**husky, git hook, github Action** 을 사용해서 현재 **CI/CD 를 자동화** 시키려고 진행중이다.

짬을 내서 진행하는 도중 갑작스럽게 **오류**가 발생하여 확인해보니 간단한 깃헙 설정이 필요한 부분이었다.

이부분은 기록해두면 나중에 좋을 것 같아서 기록해 놓는다.

### Git Work Flow
---

에러 내용은 아래와 같다.

```bash
git push

...
 ! [remote rejected] develop -> develop (refusing to allow a Personal Access Token to create or update workflow `.github/workflows/test-push.yml` without `workflow` scope)
error: failed to push some refs to 'https://XXX'
```

고친 내용을 올리려고 하다 보니 위와 같은 오류가 발생하였다.

원인은 **Token authentication** 을 진행하는데 있어서, **Personal access token** 을 사용하게 될때 입력했던 **Access Token** 에 **workflow** 를 쑤정할 수 있는 권한이 없어서 발생하는 문제이다.

이를 해결하기 위해서는 Repository 의 셋팅을 확인해야 한다.

### 해결방법
---

깃헙 사이트에 들어가서 프로필 클릭 후 **Setting** 으로 들어간다.

> Setting -> Developer setting -> Personal Access Token -> Tokens (classic) 으로 접속한다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/95cdb3bf-60c9-4b17-bd18-f14320e1993c)

그 안에서 만들어놓은 Token 정보로 들어가면 아래와 같이 셋팅할 수 있는 화면이 나온다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/ebf54672-8eb8-4ffd-b9e7-114f0b4e2766)

여기서 위와 같이 **workflow** 에 체크를 해주면 이상 없이 push 가 진행된다.

### 참고 사이트
---

- [https://tigris-data-science.tistory.com
](https://tigris-data-science.tistory.com/entry/workflow-scope-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
)