---
date: "2023-11-14"
title: "[CI/CD] 개인 프로젝트에서 CICD 자동화 구축하기 (4)"
image: automation4.png
rootCategory: Programming
category1depth: Web
category2depth: cicd
keywords: ["CI/CD", "Github Action", "Deploy", "Vercel"]
excerpt: Github Action 을 활용해서 Vercel 로 Deploy 하는 방법에 대한 내용을 공유하는 포스트입니다.
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
6. PR 생성(dev -> main) -> Github Action 으로 build Test 및 Slack 연동 ✅
7. 통과 후 Main 으로 Merge Confirm 및 push ✅
8. Vercel Deploy Github Action 
```

[이전 포스트](https://next-hippo-blog.vercel.app/posts/cicd/automation3)에서는 **PR 생성** 및 **Github Action Trigger** 를 통한 테스트 Action 실행과 Slack 으로 연동해서 최종 **Reporting** 하는 방법까지 알아보았습니다.

이제 마지막 Vercel 로 Deploy 를 진행하는 방법을 포스팅하도록 하겠습니다.

### Vercel Deploy Github Action

PR 머지 후 Confirm 이 완료되고 나면 Main branch 에 dev 소스가 **merge** 됩니다.

우리가 할 일은 main 에 소스가 push 되면 Trigger 가 동작하여 Action 을 실행하고, 그 Action 은 **Vercel** 로 **Deploy** 하면 되는거겠죠?

사실 **Vercel** 의 경우 **Repo** 를 연결하면 **자동으로 호스팅 및 배포**를 진행해줍니다. 그런데 **직접 배포를 하는 이유**는 **Slack 과 연동해서 배포 상태**를 실시간으로 받아보기로 하였기 떄문에 이번기회에 한번 직접 배포를 진행해보도록 하겠습니다.

#### GITHUB_TOKEN 발급 및 Secrets 등록

Github Token 은 *Github 우측 프로필 > Settings > Developer Settins > Personal access tokens > tokens* 에서 발급이 가능하며, **Generate new token** 선택 후 토큰 발급시 하위 체크박스에 **workflow** 는 체크를 해주고 생성하면 됩니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/31521e30-96d0-42fc-b988-97c8ab60cfa2)

이전 포스트에서 설명하였지만, 발급받은 **TOKEN** 은 *repo > Settings > Secrets and variables > Actions* 로 들어가서 Secrets 에 GITHUB_TOKEN 을 등록해주도록 하겠습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/6ac0ac24-40cd-45f2-a783-90b24d323fdc)

#### Vercel Token 발급 및 Secrets 등록

이제 **Vercel Token** 을 발급 받기 위한 작업이 필요합니다.

먼저 [Vercel 사이트](https://vercel.com/)로 진입하고 상단 tab 에 *Settings > Tokens* 로 들어가 신규 Token 을 발급받으면 됩니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/46f389a3-1ea9-4ffb-bd9b-e7accf563376)

#### VERCEL_ORD_ID 및 VERCEL_PROJECT_ID 받기

프로젝트로 돌아와 vercel cli 를 통해 받아올 수 있습니다.

```bash
# Vercel cli 설치
pnpm add -g vercel

# Vercel Login
vercel login

# Vercel 배포
vercel
```

위 과정이 정상적으로 동작하게되면 아래와 같이 .vercel 폴더가 생성되고 그 안에 project.json 에 우리가 필요로 하는 **VERCEL_ORG_ID** 와 **VERCEL_PROJECT_ID** 가 생성되어 확인하실 수 있습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/614b1491-45fa-432e-81f7-6a2f066a69bb)

이제 위 두가지 ID 를 **Action Secrets** 에 동일하게 등록해주면 됩니다.

이제 배포를 위한 환경은 모두 완료되었고, Action 을 통해서 실제 배포를 진행해보도록 하겠습니다.

#### Vercel Deploy 

먼저 **workflows** 하위에 **deploy.yml** 파일을 생성합니다.

```yml
# deploy.yml

name: "Vercel Production Deployment"

# Vercel 조직 ID와 프로젝트 ID에 대한 환경 변수를 정의합니다.
# 하위 job 에서 env. 으로 사용할 수 있습니다.
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

# 이 부분은 워크플로가 'main' 브랜치로의 푸시 이벤트에 반응하도록 설정합니다.
on:
  push:
    branches: [main]

jobs:
  # "Deploy-Production"이라는 작업을 정의합니다. 이 작업은 최신 버전의 Ubuntu에서 실행되며, Node.js의 버전을 18.x로 설정합니다.
  Deploy-Production:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-versions: [18.x]
    steps:
      # GitHub 리포지토리를 체크아웃하는 두 번째 단계입니다.
      - name: Checkout
        uses: actions/checkout@v3
      
      # 원하는 Node.js 버전을 설정합니다.
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      
      # pnpm을 설치합니다. 버전 8을 사용하며, 설치 스크립트를 실행하지 않도록 설정합니다.
      - uses: pnpm/action-setup@v2
        name: Install pnpm
        with:
          version: 8
          run_install: false

      # pnpm 저장소 디렉토리를 가져오는 다섯 번째 단계입니다. 환경 변수에 저장합니다.
      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

      # pnpm 캐시를 설정하는 여섯 번째 단계입니다. 이전에 저장된 캐시가 있다면 사용합니다.
      - uses: actions/cache@v3
        name: Setup pnpm cache
        id: cache
        with:
          path: ${{ env.STORE_PATH }}
          key: v1-cli-${{ runner.os }}-${{ hashFiles('vercel.json') }}
          restore-keys: |
            v1-cli-${{ runner.os }}-

      # Vercel CLI를 설치하는 일곱 번째 단계입니다. 이전에 캐시된 내용이 없을 때만 설치합니다.
      - name: Install Vercel CLI
        if: steps.cache.outputs.cache-hit != 'true'
        run: pnpm add -g vercel@latest

      # 여덟 번째 단계로, Vercel 환경 정보를 가져오는 명령을 실행합니다.
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

      # Build 정보 캐시를 설정하는 단계입니다.
      - name: Cache Vercel build
        uses: actions/cache@v3
        id: Build-cache
        with:
          path: .vercel
          key: ${{ runner.os }}-vercel-${{ hashFiles('vercel.json') }}
          restore-keys: |
            ${{ runner.os }}-vercel-

      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      # 프로젝트 아티팩트를 빌드하는 아홉 번째 단계입니다.
      - name: Build Project Artifacts
        id: BuildProject
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      # Vercel에 프로젝트 아티팩트를 배포하는 열 번째 단계입니다.
      - name: Deploy Project Artifacts to Vercel
        id: DeployProject
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
        
      # 배포 상태와 관련된 정보를 Slack에 알리는 마지막 단계입니다.
      - uses: act10ns/slack@v2
        with:
          status: ${{ job.status }}
          steps: ${{ toJson(steps) }}
          webhook-url: ${{ secrets.SLACK_INCOMING_URL }}
          config: .github/config/slack.yml
        if: always()

```

일단 저는 [공식문서](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)에 나와있는 내용을 참고해서 진행하였습니다.

저는 앞선 포스트에서도 말씀드렸지만, 최대한 **Caching** 을 적용할 수 있는 부분들을 찾아서 적용하였습니다.

만약 캐싱을 하지 않게 되면 아래와 같이 총 *1분 42초*의 배포 시간이 소요되는것을 보실 수 있습니다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/93a4385f-0c0a-42a3-a5f6-61a36f5bf442)

그럼 만약 캐싱을 진행하게 되면 어떻게될까요?

![image](https://github.com/hwcho33/nextstudy/assets/134469187/387e7c6c-b66b-4739-ac86-2110ef11100c)

총 *1분 4초*가 걸린것을 보실 수 있습니다.

*1m 42s > 1m 4s*로 총 **40%** 정도 감소한것을 볼 수 있습니다.

이와같이 중복되는 경우 Caching 을 진행해주는것이 좋습니다.

추가로 위에서 필요로하는 **TOKEN** 혹은 **SLACK_INCOING_URL** 과 같은 정보는 이미 사전에 **GITHUB_SECREAT** 에 저장되어 있기 떄문에 가져와서 적용할 수 있습니다.

이렇게 모든 일련의 **CI/CD 과정을 제 개인프로젝트에 적용**해보았습니다.

### 최종정리

이렇게 모든 과정이 끝이 났습니다. 최종 단계는 아래와 같습니다.

```bash
1. Github Issue 등록 ✅
2. branch 생성(dev->feature/XX) ✅
3. 개발완료 ✅
4. commit -> Husky 로 lint-staged 검사 및 Commit-msg 에 Issue Number Setting ✅
5. feature -> dev Merge 진행 ✅
6. PR 생성(dev -> main) -> Github Action 으로 build Test 및 Slack 연동 ✅
7. 통과 후 Main 으로 Merge Confirm 및 push ✅
8. Vercel Deploy Github Action && Slack 알람 ✅
```

해당 CI/CD 를 만들면서 **"괜스레 너무 번거롭게 할필요가 있나..?"** 라는 생각을 하기는 했습니다.

다만, 이제 어느정도의 블로그 UI 및 기능 개발이 완료된 만큼 앞으로의 과정은 실무에서 하고 있듯이 한번 구축해보고자 하였습니다.

더불어, Slack 을 통해서 내가 작업한 내용을 Reporting 하는 부분도 생각보다 괜찮았고, 이를 최적화 하는 것도 생각보다 재미있는 경험이었습니다.

이후에는 추가적인 **Testing Library** 를 추가하여 *Unit 테스트 혹은 E2E 테스트*를 함께 진행할 예정입니다.

### 참고 사이트

- [Vercel 공식문서](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)
- [김명재님 블로그](https://myeongjae.kim/blog/2019/02/02/prepare-commit-msg-hook-issue-number)
- [카카오웹툰 기술 블로그](https://fe-developers.kakaoent.com/2022/220106-github-actions/)
- [do_dadu.log](https://velog.io/@do_dadu/%EB%82%B4%EA%B0%80-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-GitHub-Actions)








