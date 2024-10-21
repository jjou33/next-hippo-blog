---
date: "2024-09-20"
title: "[Monorepo] Turborepo, mf-app 환경구성"
image: moduleFederation.png
rootCategory: Programming
category1depth: Framework
category2depth: monorepo
keywords: ["Monorepo", "Webpack", "Turborepo"]
excerpt: Monorepo 에 관련된 포스팅 공간입니다.
isFeatured: true
---

### 개요

**Monorepop** 프로젝트를 구성하기 위해 **Turborepo** 의존성 설치 및 환경 구성을 진행한다.

### Project 생성

- corepack 설치

```bash
# 폴더 생성
mkdir folder

# pnpm 초기화
pnpm init

# corepack 실행
corepack use pnpm@[version]
```

### pnpm-workspace.yaml 생성

이제 Root 에 pnpm-workspace.yaml 을 생성합니다.

저의 경우 apps 폴더 하위에 ui-kit 을 사용하는 프로젝트들을 만들예정이기 때문에 아래와 같이 작성합니다.

```bash
packages:
  - "apps/*"
  - "packages/*"

```

### apps 폴더에 shell 프로젝트 생성 및 package.json 이름 수정

여러가지 프로젝트들을 감쌀 수 있는 shell 프로젝트를 생성합니다.

```bash
pnpm create mf-app
```

이후 root 폴더로 이동하여 **pnpm install** 을 통해 전체적인 의존성 설치를 진행합니다.

설치가 완료되었으면 **package.json** 의 **name** 항목을 원하는 네이밍으로 변경합니다.

```json
// root package.json

{
    "name": "@hippolog/monorepo",
}

// shell package.json

{
    "name": "@hippolog/shell",
}
```

변경 후 **pnpm install** 로 정리 진행합니다.

### turborepo 설치

여러가지 프로젝트들을 관리하기 위한 도구인 **turborepo** 를 설치합니다.

```bash
pnpm -w add turbo -D
```

설치 후 root 하위에 turbo.json 을 만들고 스키마를 설정합니다.

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "start:live": {
      "cache": false,
      "persistent": true
    },
    "build:start": {
      "cache": false,
      "persistent": true
    }
  }
}
```

이는 turbo 명령어를 사용할 때 동작할 script 를 설정하는 것이고, 이후 root 의 dev 는 아래와 같이 변경합니다.

```json
"scripts": {
    "dev": "turbo start:live",
    "build": "turbo build",
    "serve": "turbo build:start"
},
```

이후 **turbo dev** 를 실행하면 하위에 있는 패키지들을 병렬로 실행하게 됩니다.
