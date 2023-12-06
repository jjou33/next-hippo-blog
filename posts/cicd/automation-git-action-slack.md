---
date: "2023-11-13"
title: "[CI/CD] 개인 프로젝트에서 CICD 자동화 구축하기 (3)"
image: automation3.jpg
rootCategory: Programming
category1depth: Web
category2depth: cicd
keywords: ["CI/CD", "Github Action", "Slack"]
excerpt: Github Action 을 활용한 Test Job 과 Slack 으로 Reporting 하는 내용에 대한 기록 공간입니다.
isFeatured: true
---

### 개요
---


```bash
1. Github Issue 등록 ✅
2. branch 생성(dev->feature/XX) ✅
3. 개발완료 ✅
4. commit -> Husky 로 lint-staged 검사 및 Commit-msg 에 Issue Number Setting ✅
5. feature -> dev Merge 진행 ✅
6. PR 생성(dev -> main) -> Github Action 으로 build Test 및 Slack 연동
7. 통과 후 Main 으로 Merge Confirm 및 push
```

[이전 포스트](https://hippolog.vercel.app/posts/CICD/automation2)에서는 **Issue** 생성부터 **Husky** 를 적용해서 **dev** 로 자동 배포하는 작업까지 진행해보았습니다.

그럼 이제 실제로 6번 PR 을 통해서 **build, lint, type** 등 테스트 진행과정과 각 단계별 상태를 자동으로 *Slack* 과 연동하여 **Reporting** 및 **Deploy** 해주는 기능에 대해서 알아보도록 하겠습니다.

### Github Action

앞선 포스팅에서 Github Action 에 대해서 간략하게 정의로만 알아보았습니다.

실제로 **Github Action** 은 CI/CD 과정에서 정말 다양한 기능을 추가할 수 있습니다.

예를들어, 주기별로 특정 Job 을 실행하거나 파이프라인 과정에서 여러가지 **Web Hook** 사용한 *연동*, *테스트*, *빌드*, *배포* 등 다양한 기능을 활용할 수 있습니다.

이번 기능에서는 배포, slack 연동, test 등 정도의 연동을 우선적으로 진행해보도록 하겠습니다.

#### Github Action 사용

사용법은 간단합니다.

```bash
1. 프로젝트 Root 에 .github/workflows 폴더 생성
2. sampleTest.yml 생성 # 네이밍은 상관없습니다.
```
이제 우리는 yml 형식으로 Github 에게 우리가 하고싶은 정보를 알려주면 됩니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/ee4acea1-1178-43f5-9555-c4fb3a10949e)


저의 경우에는 **buildtest.yml** 과 **deploy.yml** 두가지를 사용하고 있는데 이제 두가지의 용도 및 기능을 차례로 알아보도록 하겠습니다.

#### 배포 전 사전 테스트

먼저 **buildTest.yml** 파일을 만들고 아래와 같이 작성하였습니다.

```yml
# test.yml

name: 'Build Test Before Merge'

# workflow 를 동작하기 위한 Trigger 내용입니다.
# main Branch 에 대한 PR 이 Open 혹은 Sync 될때 아래의 Job 이 실행됩니다.
on:
  pull_request:
    types:
      - opened
      - synchronize 
    branches:
      - main

# jobs 은 step 으로 구성할 수 있고, 이러한 step 을 병렬로 나누어서 실행도 가능합니다.
# 여러개의 job 을 설정하여 사용이 가능하며, job 간에 정보교환도 가능합니다.

jobs:
  test:
    # job 의 이름을 지정합니다.
    name: Test && Reporting
    # 리눅스 환경에서 사용한다고 명시합니다.
    runs-on: ubuntu-latest
    # Github Action 의 실행전략을 새웁니다.
    # Node Version 을 설치할때 18 버전을 사용하도록 합니다.
    strategy:
      matrix:
        node-versions: [18.x]
    # job 의 step 을 정의합니다.
    steps:
      # 이제 시작에 앞서서 Github Actions 에서 우리는 Linux 환경으로 Checkout 하여 실행하게됩니다.
      - name: Checkout
        uses: actions/checkout@v3

      # 위 에서 명시한 node-version 을 활용하여 Node.js 를 설치 후 그 위에서 진행한다고 명시합니다.
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      # pnpm 글로벌 설치 합니다.
      - uses: pnpm/action-setup@v2
        name: Install pnpm
        with:
          version: 8
          run_install: false

      # 의존성 설치 합니다.
      - name: Install dependencies
        run: pnpm install

      # Lint Test 진행 합니다.
      # if 문에 always() 를 추가하면 이전에 실패한 부분이 생기더라도 무조건 실행하게 됩니다.
      - name: Lint Test
        id: Lint-Test
        run: pnpm lint
        if: ${{ always() }}

      # Type Check Test 진행 합니다.
      - name: Type Check
        id: Type-Check
        run: pnpm typecheck
        if: ${{ always() }}

      # Build Test 진행 합니다.
      - name: Build Test
        id: Build-Test
        run: |
          pnpm build
        if: ${{ always() }}
```

위 순서대로 작성 후 **main branch** 에 대한 PR 을 생성하면 **Action** 탭에 아래와 같이 신규 **Action** 이 진행되고 들어가보면 아래와 같이 log 를 확인할 수 있습니다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/bce2f1b1-9040-43ae-968e-c472802741e8)

총 *38초*의 시간이 경과되었네요

**Github Action 은 가상의 OS 환경**에서 해당 작업을 실행한다고 생각하면 됩니다.
하지만, 샘플의 경우 의존성이나, 동작이 많지 않았지만 실제 운영환경으로 가게되면 이보다 훨씬 많은 시간과 비용이 발생하게 됩니다.

그래서 우리는 최적화를 진행해야하고, 중복되는 부분은 최대한 줄여나갈 수 있습니다.

#### 의존성(dependencies) Caching 을 통한 시간 단축

위 작업대로라면 우리는 한상 **"pnpm install"** 이라는 명령어를 통해 의존성을 **Action** 이 실행될때마다 새로 다운받고 설치해야합니다.

이 시간은 의존성이 많아질수록 길어지겠죠? 우리는 이부분을 **Caching** 함으로서 시간을 단축할 수 있습니다.

제가 찾아서 적용해본 방법은 두가지입니다.

#### pnpm-store 캐싱

첫번째는, pnpm-store 를 캐싱하여 불필요한 install 을 건너띄는 방법입니다.

```yml
#...
# pnpm-store 의 위치를 찾아 $GITHUB_ENV 에 저장합니다.
- name: Get pnpm store directory
  shell: bash
  run: |
    echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

# pnpm-store 를 캐싱하여 이미 다운로드된 종속성이 로컬에 저장되므로 다시 다운로드 하지 않습니다.
- uses: actions/cache@v3
  name: Setup pnpm cache
  id: Cache-Work
  with:
    path: |
      ${{ env.STORE_PATH }} 
      ${{ github.workspace }}/.next/cache
    key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
    restore-keys: |
      ${{ runner.os }}-pnpm-store-
#...
```
필자는 패키지 매니저로 pnpm 을 사용하고 있습니다.

따라서, **pnpm-store** 를 캐싱하고 만약 캐싱된 정보가 있을경우 해당 정보를 **restore** 하여 사용하게 됩니다.

수정 후 action 을 실행하면 다음과 같은 log 와 *시간 단축*을 확인할 수 있습니다.

**먼저 캐싱의 경우 최초 한번은 캐싱을 위해 작업을 진행하고 그 이후에 캐싱된 데이터가 있을 경우 적용이 되는점 참고 부탁드립니다.**

만약 캐싱된 데이터가 있다면 아래와 같은 로그가 출력됩니다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/4534cae8-b26d-4e30-8384-48fa10ac66e5)

이후 캐싱된 데이터를 restore 후 아래 작업에서는 아래와 같은 시간단축 효과를 확인하실 수 있습니다.

>Before
![image](https://github.com/hwcho33/nextstudy/assets/134469187/5ee1b320-4f88-47d8-a288-ad9c3dbf0803)
>After
![image](https://github.com/hwcho33/nextstudy/assets/134469187/620b4ae4-ba6b-4a7a-8a54-c25cf789d80e)

*8초 -> 1초* 로 시간이 단축되었습니다.

그런데 여기서 저는 저 1초의 시간조차 불필요하다는 생각이들어 아래와 같이 intall 에 if 문으로 만약 *cache 가 hit* 되었다면 아얘 건너띄어 버리도록 조건을 주었습니다.

결과는 아래와 같았습니다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/b1cceb97-c49d-4a97-9f2c-55df09e12309)

이유는 **pnpm-store** 내부에는 각각의 중복된 **peer dependencies** 의 **Symbolic link** 가 정의되어 있기때문에 이러한 전체적인 설계서를 바탕으로 **pnpm install** 을 진행했을 시 **node_modules** 를 만들게 되는 것 같습니다.

결과적으로 **pnpm-store 만 caching** 한 경우 우리는 어떤 의존성을 사용한다는 전체적인 정의서만 있고, 실제 작업(node_modules)은 안되어있는 상황인겁니다.

#### node_modules 캐싱

```yml
- uses: actions/cache@v3
  name: Setup node_modules cache
  id: Cache-Work
  with:
    path: |
      node_modules
    key: ${{ runner.os }}-node_modules-${{ hashFiles('**/pnpm-lock.yaml') }}
    restore-keys: |
      ${{ runner.os }}-node_modules-
```

![image](https://github.com/hwcho33/nextstudy/assets/134469187/f6305d07-4924-409a-9ccb-05096f4cdade)

정상적으로 캐싱이되고 빌드도 되며, 의존성을 변경하였을때 추가적인 **install** 을 진행도 합니다.

위처럼 key 에 **pnpm-lock.yaml** 을 넣어두면 해당 파일이 변경되었을때만 다시 작업을 진행할 수 있기때문에 *시간단축*을 시킬 수 있다.

#### Build Caching

만약 **Vercel** 에서 본인의 repo 에 배포될때 **자동배포작업**을 해준다면 크게 생각할 필요없는 부분이지만, 현재는 **Github Action** 을 사용하고 있기 때문에 **build cache** 를 적용해주는것이 좋다.

이유는 Build Log 를 보면 확인할 수 있다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/39c69777-fde0-4b93-a809-443b4960791d)


```yml
- name: Get pnpm store directory
  shell: bash
  run: |
    echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

- uses: actions/cache@v3
  name: Setup pnpm cache
  id: Cache-Work
  with:
    path: |
      ${{ env.STORE_PATH }}
      ${{ github.workspace }}/.next/cache
    key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
    restore-keys: |
      ${{ runner.os }}-pnpm-store-
```

그럼 Build cache 를 진행하고 다시한번 돌려보면 아래와 같이 시간이 단축된 결과를 확인할 수 있다.

> Before
![image](https://github.com/hwcho33/nextstudy/assets/134469187/94160262-67f1-412f-815c-0a9f6626ce2a)

> After
![image](https://github.com/hwcho33/nextstudy/assets/134469187/dba1a6b7-b502-4657-bae3-c3b4a3f87953)

총 *23초 -> 14초* 로 **9초**가량 감소한것을 확인할 수 있습니다.

### Slack 연동

이제 추가로 **Slack** 에 대한 연동을 진행해보도록 하겠습니다.

내가 배포를 진행하면서 배포 상황을 계속 지켜볼 수 있겠지만, 자동으로 각각의 Step 에 대한 상태가 **Reporting** 되서 

알람으로 알려준다면 굉장히 좋겠죠?

그럼 제가 연동한 Slack 으로 차근차근 확인해보도록 하겠습니다.

#### Slack Web Hook 생성

먼저 내 **Slack** 에 자동으로 메시지를 남길 수 있도록 [Slack api 사이트](https://api.slack.com/)에 가입 후 **Web hook** 을 만든다.

직접 간단한 **Action** 을 만들어 사용해도 되지만, **Slack** 연동의 경우 이미 만들어진 유용한 포멧이 있기 떄문에 만들어진 **action 을 사용**하도록 하겠습니다. 관련된 사이트는 [여기](https://github.com/marketplace?type=actions&query=slack+)로 들어가시면 볼 수 있습니다.

저의 경우에는 **BuildTest Job** 이 시작하는 시점에 시작 메시지를 보내고 그 안에 **PR 주소**를 담아둡니다. 이렇게 하면 PR 생성 후 자리를 비워도 모바일로 전체적인 프로세스를 관리할 수 있는 장점이 있기에 이렇게 하였습니다.

```yml
- uses: act10ns/slack@v2
  with:
    status: starting
    webhook-url: ${{ secrets.SLACK_INCOMING_URL }}
    message: "📣 Opened Pull Request & Build Test Start\n<${{ github.event.pull_request.html_url }}|🚀 View Pull Request>"
  if: always()
```

이후 **Job** 이 시작되고 테스트가 완료되면 마지막으로 각각의 task 들의 성공 여부에 대해서 리포팅한 내용의 알람이 **slack** 으로 오도록 마지막에 추가해 주었습니다.

```yml
- uses: act10ns/slack@v2
  with:
    status: ${{ job.status }}
    steps: ${{ toJson(steps) }}
    channel: '#workflows'
    webhook-url: ${{ secrets.SLACK_INCOMING_URL }}
    config: .github/config/slack.yml
  if: always()
```

>여기서 **secrets.SLACK_INCOMMING_URL** 의 경우 Github -> Repo -> Setting -> 좌측 사이드바 Secrets and variables 하위 Action 에서 secret 을 만들어서 사용하면 됩니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/bf847780-60a0-45a3-a48b-bdc09432970a)

전체적인 코드는 아래와 같습니다.

```yml
# test.yml
# test.yml

name: 'Build Test Before Merge'

# workflow 를 동작하기 위한 Trigger 내용입니다.
# main Branch 에 대한 PR 이 Open 혹은 Sync 될때 아래의 Job 이 실행됩니다.
on:
  pull_request:
    types:
      - opened 
      - synchronize 
    branches:
      - main 

# jobs 은 step 으로 구성할 수 있고, 이러한 step 을 병렬로 나누어서 실행도 가능합니다.
# 여러개의 job 을 설정하여 사용이 가능하며, job 간에 정보교환도 가능합니다.

jobs:
  test:
    # job 의 이름을 지정합니다.
    name: Build Test
    # 리눅스 환경에서 사용한다고 명시합니다.
    runs-on: ubuntu-latest
    # Github Action 의 실행전략을 새웁니다.
    # Node Version 을 설치할때 18 버전을 사용하도록 합니다.
    strategy:
      matrix:
        node-versions: [18.x]
    # job 의 step 을 정의합니다.
    steps:
      # Action 준비
      - uses: act10ns/slack@v2
        with:
          status: starting
          webhook-url: ${{ secrets.SLACK_INCOMING_URL }}
          message: "📣 Opened Pull Request & Build Test Start\n<${{ github.event.pull_request.html_url }}|🚀 View Pull Request>"
        if: always()

      # 이제 시작에 앞서서 Github Actions 에서 우리는 Linux 환경으로 Checkout 하여 실행하게됩니다.
      - name: Checkout
        uses: actions/checkout@v3

      # 위 에서 명시한 node-version 을 활용하여 Node.js 를 설치 후 그 위에서 진행한다고 명시합니다.
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      - uses: pnpm/action-setup@v2
        name: Install pnpm
        with:
          version: 8
          run_install: false

      
      # pnpm-store 의 위치를 찾아 $GITHUB_ENV 에 저장합니다.
      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

      # pnpm-store 를 캐싱하여 이미 다운로드된 종속성이 로컬에 저장되므로 다시 다운로드 하지 않습니다.
      # node_module 과 next Cache 를 caching 하여 시간을 단축할 수 있습니다.
      - uses: actions/cache@v3
        name: Setup pnpm & next Build cache
        id: cache
        with:
          path: |
            node_modules
            ${{ github.workspace }}/.next/cache
          key: cache-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            cache-

      - name: Install dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: pnpm install

      # Lint Test 진행 합니다.
      # if 문에 always() 를 추가하면 이전에 실패한 부분이 생기더라도 무조건 실행하게 됩니다.
      - name: Lint Test
        id: Lint-Test
        run: pnpm lint
        if: ${{ always() }}

      # Type Check Test 진행 합니다.
      - name: Type Check
        id: Type-Check
        run: pnpm typecheck
        if: ${{ always() }}

      # Build Test 진행 합니다.
      - name: Build Test
        id: Build-Test
        run: |
          pnpm build
        if: ${{ always() }}

      - uses: act10ns/slack@v2
        with:
          status: ${{ job.status }}
          steps: ${{ toJson(steps) }}
          channel: '#workflows'
          webhook-url: ${{ secrets.SLACK_INCOMING_URL }}
          config: .github/config/slack.yml
        if: always()


```

이후부터는 배포후 아래와 같은 *알람*을 받으실 수 있습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/504a7de6-3d70-43a9-a60d-65f1c0297663)


제가 사용하는 *Slack Action* 은 [이곳](https://github.com/marketplace/actions/slack-github-actions-slack-integration)에서 확인하실 수 있으며, 가이드에 따라서 확인해보면 **config/slack.yml** 파일 안에 실제 보내지는 메시지 포멧에 대한 커스텀을 진행하실 수 있습니다!

긴글 읽어주셔서 감사드리며, 다음 포스트는 마지막 **vercel** 로 배포하는 yml 에 대한 포스팅으로 이어가겠습니다!

### 참고 사이트

- [Vercel 공식문서](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)
- [김명재님 블로그](https://myeongjae.kim/blog/2019/02/02/prepare-commit-msg-hook-issue-number)
- [카카오웹툰 기술 블로그](https://fe-developers.kakaoent.com/2022/220106-github-actions/)
- [do_dadu.log](https://velog.io/@do_dadu/%EB%82%B4%EA%B0%80-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-GitHub-Actions)




