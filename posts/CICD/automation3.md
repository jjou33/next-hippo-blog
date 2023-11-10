---
date: "2023-11-10"
title: "[CI/CD] 개인 프로젝트에서 CICD 자동화 구축하기 (3)"
image: automation3.jpg
rootCategory: Programming
category1depth: Web
category2depth: CICD
keywords: ["CI/CD", "GitHub Action", "Web hook"]
excerpt: Gihub Action 으로 배포자동화 및 Slack 연동에 대한 포스트입니다.
isFeatured: true
---

### 개요
---

```bash
1. Github Issue 등록 ✅
2. branch 생성(dev->feature/XX) ✅
3. 개발완료 ✅
4. commit -> Husky 로 lint-staged 검사 및 Commit-msg 에 Issue Number Setting ✅
5. feature -> dev Merge 진행
6. PR 생성(dev -> main) -> Github Action 으로 build Test
7. 통과 후 Main 으로 Merge Confirm 및 push
```

[이전 포스트](https://hippodevlog.vercel.app/posts/CICD/automation3) 에서는 Github Issue 등록부터 dev branch 등록까지 진행을 해보았습니다.

이제 본 포스트에서는 dev PR 부터 배포, Slack 연동까지 진행을 할 예정입니다.

사실 이번 작업을 진행한 이유에 Slack 연동또한 포함되어있습니다.

배포 혹은 커밋한 내용들에 대한 상황과 실패에 대한 분석을 어디서나 볼 수 있도록 하기 위함입니다.

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



