---
title: "[Git] Git Flow 정리"
date: "2023-06-26"
image: gitflow.jpg
rootCategory: OS & Management
category1depth: Management
category2depth: git
keywords: ['Git', 'Git Flow']
excerpt: OS 와 Management Tool 과 관련된 포스팅을 기록하는 공간입니다.
isFeatured: true
---

### 개요
---

현재 회사에서 진행하고 있는 프로젝트에서도 **Git Flow** 기반으로 소스 관리를 진행하고 있다.

이번에 **Nextjs 13** 버전으로 아는 지인과 함께 프로젝트 하나를 기획하고 진행하려 한다.

환경 옵션을 잡는 중 해당 프로젝트도 협업이다 보니 **Git Flow** 를 적용하여 진행하려 하기에 간단하게 정리한다.



### GIT FLOW 란?
---

-  Git Flow : 협업시 브랜치들의 효율적 관리를 위한 브랜치 관리 전략 또는 방법론

![image](https://github.com/jjou33/discover-and-share/assets/134469187/ad87321f-2ba0-4179-bd09-e9444a60d57d)

참고 : [우아한 형제들 기술블로그](https://techblog.woowahan.com/2553/)

```bash
master(main), develop => 항상 유지되는 브랜치들
feature, release, hotfix => 일정 기간 동안만 유지되는 보조 브랜치들
```

### 활용 branch
---

git flow 과정에서 활용하는 branch 는 5가지이다.

아래 각 branch 의 역할에 대해 정리한다.

#### master(main)
---

tag 를 이용해서 버전을 기록하는 최종 branch

#### develop 
---

master branch 에서 시작된 개발을 진행하는 branch

#### feature
---

기능을 개발하는 branch

develop 에서 시작되어 기능을 개발할때 별도로 따서 진행한다.


#### release
---

실제 main branch 에 **배포를 진행하기 전 오류 검수(QA) 및 버그 Fix** 를 진행하게 되는 **branch**

#### HotFix
---

**갑작스러운 버그 및 장애 대응**을 위해 개발 후 바로 main 에 merge 하는 branch


### Git flow 과정 정리
---

실제 **Git flow 를 적용하는 과정**을 정리한다.

다만, 실무가 아닌 개인적인 프로젝트에서는 생략될 수 있는 점이 있다는 것을 참고한다.

#### develop branch 생성
---

프로젝트를 clone 받고 remote URL 까지 적용 했다는 가정으로 진행한다.

```bash
// develop 브랜치 생성
git branch develop

// 중앙 저장소로 push
git push -u origin develop
```

우리는 develop branch 를 생성하였고, 이제 모든 개발의 시작점은 develop branch 로 진행한다.

#### default branch 설정
---

**github repo** 에 진입하여 아래의 순서에 따라 **develop branch** 를 **default** 로 셋팅한다.

![image](https://github.com/jjou33/discover-and-share/assets/56063287/cf4261c3-fd42-4e34-999d-a1a8289b68b8)

이유는 아래와 같다.

**Git-flow** 의 단계에서 우리는 **develop branch** 를 기준으로 작업을 진행한다.

따라서, 우리는 **feature branch** 를 생성해서 작업을 하고 **develop branch** 에 merge 를 진행하게 되는데 default 가 **main 혹은 master 로 설정**되어 있으면 그쪽으로 **merge가 되기 때문에 develop branch 에 병합**되도록 하기 위함이다.

**단, 이부분은 사용하는 전략에 따라 변경될 수 있다.**

#### feature branch 사용
---

이제 개발을 진행하기 위해서 feature/[기능명] 에 대한 branch 를 생성한다.

기본은 develop branch 로 진행하기 때문에, feature branch 를 생성 한 후 원하는 프로덕트를 개발하게 된다.

```bash
// develop 기준으로 feature/XXX branch 를 생성한다.
git checkout -b feature/XXX develop
```

개발을 완료 하게 되면 feature/XXX branch 의 원격 저장소에 push 를 진행한다.

```bash
git add .

git commit -m "feature/XXX branch Commit"

git push origin feature/XXX
```

이 과정을 진행하게 되면 이제 두가지 방법으로 나뉜다.

첫번째, **Github 의 pull/request 를 활용하여 Merge 를 진행하는 방법**

필자도 회사에서 여러사람과 함께 규모가 큰 프로젝트를 진행하다보니 첫번째 방법으로 진행한다.

**코드 리뷰 담당자는 개발자**가 push 한 feature 프로젝트의 소스와 develop branch 를 Merge 하기 위한 권한을 갖는다.

github page 에 들어가서 직접 Merge 과정을 진행할 수 있다.

![image](https://github.com/jjou33/discover-and-share/assets/134469187/1b947b1b-7995-4d60-bd0f-3c461bf72f23)

위와 같이 github 페이지에서는 작업을 진행할 수 있다.

두번째, **스스로 develop branch 에 merge 를 하는 방법이 있다.**

큰 프로젝트가 아닌 사이드 프로젝트를 소수의 인원으로 진행하는 경우이다.

현재 본인이 진행하고 있는 사이드 프로젝트의 경우 한명의 지인과 함께 작업을 진행하고 있는데 이때는 사실 따로 코드 리뷰어를 정하고 하기에는 불필요한 부분이 없지않아 있다.

혹은 프로젝트 내에 코드를 리뷰할 수 있는 인원이 없을 경우 개발자에게 **온전히 merging** 을 맡길 수 있다.

```bash

// feature branch 원격 저장소에 push(Pull/Request 사용 시)
git push origin feature/XXX

// develop branch 로 이동
git checkout develop

// develop branch 의 변동사항이 있을 수 있으니 동기화
git pull origin develop

// feature/XXX 의 코드를 develop 에 merge
git merge --no-ff feature/XXX

// 원격 저장소에 merge 된 소스 push
git push

// feature/XXX branch Local && Remote 삭제
git branch -d feature/XXX

&&

git push origin -d feature/XXX

```

### 배포 과정
---

위와 같은 과정으로 여러 개발자는 develop branch 에 본인들의 feature 개발 내용을 merge 하였다.

이제 각 조직의 주기에 맞춰서 배포하는 과정이 진행된다.

이 주기는 조직에서 정하기 나름이며 release branch 를 생성함으로서 시작된다.

#### release branch 활용
---

**QA 및 Bug Fix** 를 찾아내고 수정하기 위한 **release branch 를 생성**한다.

이 release branch 의 경우 **develop branch 를 기준**으로 생성한다.


```bash
// develop branch 로 이동
git checkout develop

// release branch 생성
git checkout -b release/X.X develop

```

release branch 에서 **여러 테스트 및 버그에 대한 확인이 완료**되었고 수정이되었으면

**develop 및 master(main) branch 에 merge** 를 진행한다.

#### hotfix
---

만약에 master(main) branch 에서 즉, **운영**되고 있는 소스에서 **긴급한 문제가 발생**하였을때를 가정해보자.

다시 develop 에서 feature 를 따고 개발을하고 merge 해서 release 에서 테스트를 하는 과정을 거칠 시간이 없을 수 있다.

이런 경우 **hotfix** 로 일단 운영되고있는 main branch 에서 **hotfix/XXX branch 를 생성**한다.

이후 문제가 되는 부분을 수정 후 바로 **master(main) 에 merge** 를 진행한다.

```bash
// master branch 기반 branch 생성
git checkout -b hotfix/XXX master

// ...수정완료후
git checkout master

git merge --no-ff hotfix/XXX

git tag -a XXX

git push origin master

// 변경된 내용을 develop 에도 적용
git checkout develop

git merge --no-ff hotfix/XXX

git push origin develop

// hotfix branch 삭제
git branch -d hotfix/XXX
```

### 참고 사이트
---

- [https://woovictory.github.io/2019/01/23/Etc-Git-Flow-2/](https://woovictory.github.io/2019/01/23/Etc-Git-Flow-2/)

