---
date: "2023-11-08"
title: "[CI/CD] 개인 프로젝트에서 CICD 자동화 구축하기(1)"
image: automation.png
rootCategory: Programming
category1depth: Web
category2depth: CICD
keywords: ["CI/CD", "GitHub Action", 'Husky']
excerpt: CI/CD 자동화에 대한 기본적인 개념과 앞으로의 포스팅 내용을 간단하게 설명한 포스팅입니다.
isFeatured: true
---

### 개요
---

회사에서 운영하는 프로젝트는 여러가지 절차가 존재하게 되는데요.

**CI(Continuous Integration, 지속 통합)** 과 **CD(Continuous Deploy,지속 배포)** 는 어느 프로젝트이건 필요한 절차이며, 관리입니다.

그러나, 개인 프로젝트를 하는동안 "혼자하는건데뭐.." 라는 생각으로 이러한 절차는 크게 상관없이 [블로그 프로젝트](https://github.com/jjou33/next-hippo-blog) 를 진행을 하고 있었습니다.

그런데 우연히 클릭한 [기술 블로그](https://myeongjae.kim/)가 너무 마음에 들어서 여러 포스트를 정독하다보니 이러한 생각이 잘못되었음을 인지하였고, 블로그의 **UI 및 기능개선**이 어느정도 완료된 현재 시점에서 앞으로 추가 기능개선 및 개발건은 어느정도 절차를 만들어서 진행할 예정입니다.

1인 프로젝트라 하더라도 **Git** 을 활용한 형상관리의 중요성은 말할 필요가 없을 것이며, 위 블로그의 글쓴이의 철학을 보면서 다시한번 느끼는 바가 많았고 이참에 혼자하는 프로젝트이지만 조금 더 정교한 프로세스 하에서 진행을 하고 싶은 생각이 들었습니다.

또한, vercel 에서 웹 호스팅와 배포를 진행하게 되는데 개인적으로 사용하는 Slack 을 통해서 배포 상황과 완료 여부를 전달받고 싶었습니다.

### CI/CD 프로세스 설계
---

일단 가장 먼저 진행한 부분은 프로세스 설계입니다.

혼자 프로젝트를 진행함에 있어서, **어느정도까지의 프로세스**를 두어야 할지와 **어느 시점에서 어떠한 부분에 대한 확인이** 필요한지를 고민해보았습니다.

#### Git Issue && Project 활용
---

우리는 누구나 Github 를 사용할 수 있고, 그 안에는 **Git Issue, Git Action** 등 너무나도 좋은 기능들이 많기 떄문에 이번에 이에 대한 활용법을 알아보려 합니다.

이번 프로세스 정립에서 가장 먼저 진행될 부분은 **Git Issue** 인데요

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/33b278d2-5d46-4731-84b9-50b1474a1041)

이슈를 들어가보면 우측에 **New issue** 를 클릭하여 내가 무엇을 할 지 개선점이 무엇이 있을지에 대한 이슈를 기록할 수 있습니다.

이때 우측에 **Label, Projects, Assignees** 등 해당 이슈에 대한 정보 **Keyword** 를 추가할 수 있습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/18635d15-786a-4979-9dcb-db0d17784522)

여기서 **Project** 를 만들어서 함께 추가해주면 Project 화면에서 내가 어떤 Issue 를 해결하고 있고, 어떤 Issue 가 완료되었는지 확인할 수 있는 **DashBoard** 를 제공합니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/8ad95c8e-04f6-4947-97f3-488b0dd48d7e)

일단 개인적으로 활용한건 이정도이며, 물론 회사에서 여러 팀원들끼리 진행하게 되면 추가적인 요소들이 있지만, 개인 프로젝트인 만큼 이정도로 마무리를 하도록 하겠습니다.

#### Github Action 이 무엇일까?
---

**Github Actions**는 GitHub에서 제공하는 서비스로, 빌드, 테스트, 배포 파이프라인을 자동화할 수 있는 **CI(Continuous Integration**)와 **CD(Continuous Deployment)** 플렛폼입니다.

**Github Actions** 를 사용하면 GitHub Repo 에서 손쉽게 CI/CD **결과를 확인하고 관리**할 수 있으며, YAML 포멧으로 여러가지 Action 을 완성하여 활용하며 CI/CD 플로우를 작성할 수 있습니다.
#### Git Branch 전략
---

먼저 Git 의 Branch 전략은 **main(master), dev, feature/XXX** 이렇게 3줄기로 가져가도록 하였습니다.

개인프로젝트를 진행하면서 보통의 **Git flow** 전략처럼 *Release* 까지 두는건 너무 번거롭다는 생각에서 위와 같이 결정하였습니다.

- main(master)

>운영에 배포되는 Branch 로 항상 완전한 코드를 유지한다.

- dev

>dev branch 의 경우에는 main 으로 merge 전 테스트하는 단계이며, merge 후에는 main 과 동일한 코드를 유지한다.

- feature

>추가 혹은 수정/개발이 필요한 건이 있을경우 **dev 에서 branch** 를 갈라서 **feature/XX-XXX** 로 브렌치를 만든다.

**Branch** 명은 **feature/XX(Issue Number)-XXX(Branch Name)** 와 같이 생성하는데 이유는 이후에 설명하도록 하겠습니다.

### CI/CD 배포

코드에 개발을 완료하였다면, 이제 호스팅 및 배포는 어떻게 진행해야할까에 대한 고민을 하게되는데요? 

제가 정한 전체적인 프로세스는 아래와 같습니다.

```bash
1. Github Issue 등록
2. branch 생성(dev->feature/XX)
3. 개발완료
4. commit -> Husky 로 lint-staged 검사 및 Commit-msg 에 Issue Number Setting
5. feature -> dev Merge 진행
6. PR 생성(dev -> main) -> Github Action 으로 build Test
7. 통과 후 Main 으로 Merge Confirm 및 push
```

대략적으로 위와 같은 순으로 진행되며, 이후 추가적으로 **Jest** 혹은 **Playwright** 를 추가하여 테스트도 진행할 예정이고, 자세한 부분은 [다음 포스트](https://hippodevlog.vercel.app/posts/CICD/automation2)에서 자세하게 진행하도록 하겠습니다!





