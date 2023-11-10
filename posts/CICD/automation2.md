---
date: "2023-11-09"
title: "[CI/CD] 개인 프로젝트에서 CICD 자동화 구축하기 (2)"
image: automation2.png
rootCategory: Programming
category1depth: Web
category2depth: CICD
keywords: ["CI/CD", "Husky", "Git Hooks"]
excerpt: CI/CD 에 관련된 포스팅 공간입니다.
isFeatured: true
---

### 개요
---

[앞선 포스트](https://hippodevlog.vercel.app/posts/CICD/automation1)에서 구축하려하는 CI/CD 에 대한 개념과 관련된 기술에 대한 이해에 대한 설명을 간략하게 진행하였습니다.

이제 실제로 제가 작성한 프로세스와 디테일한 코드를 기준으로 확인해보겠습니다.

전체적인 프로세스는 아래와 같습니다.

```bash
1. Github Issue 등록
2. branch 생성(dev->feature/XX)
3. 개발완료
4. commit -> Husky 로 lint-staged 검사 및 Commit-msg 에 Issue Number Setting
5. feature -> dev Merge 진행
6. PR 생성(dev -> main) -> Github Action 으로 build Test
7. 통과 후 Main 으로 Merge Confirm 및 push
```

이 과정을 순차적으로 확인해보도록 하겠습니다.

### GitHub Issue 등록

먼저 어떤 문제가 있어서 개발이 필요하거나 이슈가 있는지가 궁금하겠죠? 

이제 해당 Github 의 **Repo에 Issue 를 등록**합니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/86bc5611-534c-47fa-a84a-50efb39272c0)

등록을 하게되면 위와 같이 나오는데 Title 옆에 *#11* 을 이후에 **Husky** 를 활용해서 연동을 할 예정입니다.

그리고 우측에보면 **Label, Project** 를 구성해서 넣는것도 개인적으로는 굉장히 좋았습니다.

**Github** 에서 내가 그동안 했던 **Issue** 들의 상태를 확인할 수 있어서 편리했고, 사용은 상단 메뉴바에서 **Project** 를 만들면 자연스럽게 설정이 가능합니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/e7b4fb2c-e024-481c-a524-bce2a5cd6ab8)

자 이슈를 생성하고 우측 라벨을 설정하면 아래와 같이 댓글이 달리기 시작합니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/c9482275-0e64-46b7-a081-f338fc4a2b2b)

그럼이제 모든 준비가 완료되었습니다. 

### feature branch 생성

![image](https://github.com/hwcho33/nextstudy/assets/134469187/fffc44d0-ded2-43ba-b12e-c87fed5b7612)

위와 같이 새롭게 **Issue** 를 생성하고 아까 앞서 중요하다고 했었던 *Issue Number* 는 *#55* 로 확인할 수 있습니다.

그럼 이제 새롭게 **feature Branch** 를 생성해봅니다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/18ee8fca-a012-4c85-be08-b223337eb981)

branch 는 *feature/55-XXX* 로 생성한것을 확인하실 수 있습니다.

이렇게 생성한이유는 우리가 개발한 후 **Commit** 할때 Message 앞에 **Issue Number** 를 붙여주게되면 이후 push를 하게되면 자동으로 연결이되서 댓글 형식으로 우리가 해당 **Issue 에 Commit 한 상태를 추가해주기** 때문입니다.

그럼 확인을 위해 수정사항에 대한 개발을 완료하고 **Commit & Push** 를 진행해보도록 하겠습니다.

**Commit** 을 완료한 후 **Issue Tab** 으로 가보면 아래와 같이 아래에 commit 내용이 추가된것을 확인할 수 있습니다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/56a2dca6-c862-4f72-a8ea-a70a58aea9fd)

근데 분명 Command 에서 Commit 을 날릴때는 Commit Message 에 *[#55]* 를 붙이지 않았는데 자동으로 붙어서 올라간것을 볼 수 있습니다.

이는 *Husky* 를 통해서 우리가 Commit 을 날릴때 자동으로 Massage 에 *[#55]* 를 붙여주도록 Script 를 작성하였기 때문입니다.

### Husky 란 무엇일까?

Husky 를 알기 전에 우리는 **Git Hooks** 에 대하여 간단히 알고 가면 좋습니다..

>Git Hooks 는 Git 과 관련한 어떤 이벤트가 발생했을 때 특정 스크립트를 실행할 수 있도록 하는 기능이다. 크게 클라이언트 훅 과 서버 훅 으로 나뉘는데 클라이언트 훅 은 커밋, Merge 가 발생하거나 push 가 발생하기 전 클라이언트에서 실행하는 훅이다. 반면 서버 훅 은 Git repository 로 push 가 발생했을 때 서버에서 실행하는 훅이다.

그럼 이제 Husky 는 무엇일까?

**Husky** 는 Git Hooks 를 보다 쉽게 적용할 수 있도록 도와주는 **npm 모듈**입니다.

그럼 이제 Husky 를 설치하고, **lint-staged** 를 통한 코드 검수 및 **Git hooks** 사용을 진행해보록 해보겠습니다.

#### Husky 설치

```bash
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm
```

위 **Command** 를 통해서 의존성 설치를 진행하게 되면 **Husky 가 설치**되고 **Package.json 수정 및 pre-commit hook 샘플이 생성**됩니다.

샘플은 root 하위에 **.husky** 폴더에 생성되게 됩니다.

#### Lint-staged 적용 

우리는 Commit 하기 전에 우리가 수정한 파일들의 Lint 와 Type(Typescript 사용시) 을 체크할 예정입니다.

```bash
npx husky add .husky/pre-commit "pnpm lint-staged"
```

그럼 .husky 폴더 하위에 pre-commit 파일이 생성되었고 아래와 같이 코드를 작성합니다.

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged
```

그리고 **package.json** 에 아래와 같은 **script** 를 추가합니다.

```json
  "scripts": {
    "dev": "next dev",
    "start": "next start",
    "build": "next build",
    "lint": "eslint --cache --fix",
    "typecheck": "tsc --noEmit",
    "postbuild": "next-sitemap --config next-sitemap.config.js",
    "reinstall": "rm -rf ./node_modules && rm -rf pnpm-lock.yaml && pnpm install",
    "prepare": "husky install",
    "lint-staged": "lint-staged" // 추가
  },
  // Staging 된 파일들 중 ts, tsx 파일에 대하여 eslint, tsc 로 검증
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --cache --fix",
      "bash -c tsc"
    ]
  },
```
여러가지 **Git Hooks** 중 우리는 **pre-commit** 즉, **commit 이 되기 전에 작동하는 hook** 을 사용하였으며, 이제 이로서 우리가 commit 을 진행하게되면 pre-commit 파일 내부에 작성한 커멘드인 *pnpm lint-staged* 가 실행되고 *ts,tsx 확장자*를 가진 모든 파일에 대한 **linting 과 type 검수**를 진행하게 됩니다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/efb20187-5c7d-4289-9a0d-6943084fc068)

### Pre-commit Message 적용

이제 위에서 봤던 Commit Message 수정에 대한 기능을 적용해보도록 하겠습니다.

*.husky* 폴더 하위에 **pre-commit-msg** 파일을 하나 만들어줍니다.

```bash
npx husky add .husky/prpare-commit-msg
```

그럼 prepare-commit-msg 파일이 생성되는것을 확인 후 아래와 같이 코드를 작성합니다.

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 실제 작성한 Commit Message 
COMMIT_EDITMSG=$1

# branch Name 에서 마지막 문자열 가져오기
# feature/11-sample => 11-sample
NAME=$(git branch | grep '*' | sed 's/* //' | sed 's/^.*\///') "/" 

# 11-sample 에서 Issue Number 11 을 가져옴
ISSUE_NUMBER=`echo $NAME | cut -d '-' -f1` 
# Commit Message 앞에 [#11] 를 추가
echo "[#$ISSUE_NUMBER] $(cat $COMMIT_EDITMSG)" > $COMMIT_EDITMSG
```
위와 같이 내가 최초 작성한 **Commit Message** 에 Issue Number 를 붙여줄 수 있습니다.

커밋을 진행 후 해당 브렌치에 **push** 를 진행하고 **Issue Tab** 으로 가보면 아래와 같이 이력이 추가된것을 보실 수 있습니다.

![image](https://github.com/hwcho33/nextstudy/assets/134469187/876e3cbd-100d-4856-b008-da8b59f2b9ce)

여기까지 진행이 되었다면 우리는 개발변경 사항을 각자의 **feature branch** 에 push 를 진행한 상태이고, 이제는 dev branch 에서 이 **feature branch** 에 올린 코드를 **dev branch** 에 *merge* 해야할 차례입니다.
### feature -> dev Merge 

현재는 혼자 프로젝트를 하고 있기 때문에 저는 우선 feature branch 를 dev 로 rebase 해줍니다.

```bash
# feature/55-branch

git rebase dev
```

**dev branch** 로 commit 내용을 리베이스하면 현재 브렌치의 커밋들이 **dev branch** 로 옮겨가게 되고, *commit history* 가 깔끔하게 나오기 떄문입니다.

>rebase 를 공용 브렌치에서 하게되면 기존 커밋을 변경하기 떄문에 협업간에 사용할 경우 주의가 필요하다는점은 숙지를 해야합니다.

```bash
# 변경사항을 리베이스(로컬브렌치로) 적용하지만, 병합 커밋은 리베이스를 하지 않도록 한다.
git pull --rebase=merges

git merge feature/55-XXX
```
위 과정을 통해서 **merge** 를 진행하게 됩니다.

#### post-merge hook

저의 경우에는 dev 에서 feature 브렌치를 merge 할때 완료되면 자동으로 push 를 하도록 설정하였습니다.

이 역시 husky 를 활용해서 자동화할 수 있습니다.

```bash
npx husky add .husky/post-merge
```

위 커멘드를 실행하면 post-merge 파일이 생기게 되는데 이 훅은 merge 가 이루어질때 실행되는 hook 입니다.

```yml
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 현재 Branch
BRANCH_NAME=`git rev-parse --abbrev-ref HEAD`

# 색상 코드
RED='\033[1;31m'
GREEN='\033[1;32m'
BOLD='\033[1m'
RESET='\033[0m'
YELLOW='\033[1;33m'
BLUE='\033[1;34m'

# 개발환경에서 Feature Merge 진행 시 동작
if [ "$BRANCH_NAME" = "dev"  ]; then
  echo "${BOLD}Feature branch merged into develop. Running automation...${RESET}"
    # DEV BRANCH 로 자동 배포
    git push origin dev

    if [ $? -eq 0 ]; then
      echo "${GREEN}Merge into main successful. Pushing to main...${RESET}"
    else
      echo "${RED}Merge into main failed. Aborting the push to main.${RESET}"
    fi
  fi
fi

```

저는 먼저 현재 Head branch 가 어딘지를 먼저 확인합니다.

확인 후 만약 dev branch 일 경우에는 안내문구가 출력되고 dev branch 에 push 를 진행합니다.

이후 push 작업의 상태를 출력해줍니다.


























