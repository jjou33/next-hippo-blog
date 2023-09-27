---
title: "[Git] Git 대소문자 구분 이슈"
date: "2023-06-02"
image: giterror.jpg
rootCategory: OS & Management
category1depth: Management
category2depth: Git
keywords: ['Git', 'Git Error']
excerpt: OS 와 Management Tool 과 관련된 포스팅을 기록하는 공간입니다.
isFeatured: true
---


### 오류사항

---

블로그를 개발하던 중 문득 파일구조 상 네이밍을 변경해야 할 경우가 생겼다.

**1deps** 의 파일 네이밍을 대문자로 하여 소문자로 통일하기 위한 작업을 진행하였고, 아무 생각없이 여느떄와 같이 **PUSH!**

그때부터 지옥이 내 눈앞에 펼쳐지고 말았다.

**module** 을 **import** 할 때마다 나타나는 **빨간줄..** 계속해서 에러 내용을 체크해갔다.

여러번의 시행착오 끝에 해결하였으나.. 너무나 간단한 문제였다.

문제는 **git** 은 대소문자 구분을 안한다는 것이었다.

해결방법을 기록한다.

### 해결과정

---

우선 에러 내용은 아래와 같았다.

```bash
Parsing error: ESLint was configured to run on `<tsconfigRootDir>/component/TestComponent.cy.ts` using `parserOptions.project`: <tsconfigRootDir>/../../../../../../users/tduke/desktop/dev/blog/cypress/tsconfig.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
```
처음엔 프로젝트의 **tsconfig** 에 문제가 있는듯 하여 이것저것 고쳐보았으나, 일시적으로 해결되더라도 **push** 후 다시 **pull** 을 받으면 재발하게 된다.

또하나의, 문제점은 분명히 대문자에서 소문자로 변경한 파일이 뜨문뜨문 다시 원복되어서 **pull** 이 된다는 것이었다.

계속 생각을 하다가 설마하는 생각에 **git repository** 에 들어가봤다.

문제는 **git** 이었다는걸 알게 되었다..

본인이 변경한 파일 네이밍이 하나도 변경되지 않은 채로 **repo** 에 저장되어 있던것이다.

### 해결방법

---

이제 원인을 찾앗으니, 키워드를 **ts -> git** 으로 변경해서 검색을 하게된다.

나와 같은 경험을 하신분들이 많았고, 문제는 **git 은 대소문자를 구분하지 않는다(deault)** 이다.

아래 커멘드를 통해 설정을 변경해줘야 한다.

```bash
git config core.ignorecase false
```
위 명령어를 치는 순간 저장소 변경내용이 우수수 생겨나기 시작한다.

이후에 **commit & push** 를 진행하니 정상적으로 잘 올라갔다.

하지만, 몇몇개의 파일이 **repo** 에 그대로 남아 있는것을 발견했다.

이는 캐시가 남아있는 상태여서 그런것이기 떄문에 캐시를 지우고 다시 **commit & push** 를 진행해 주면 해결되었다.

```bash
git rm -r --cached .

git add .

git commit -m "remove Cache"
```

### 결과정리

---

해결은 간단했지만, 실제로 내가 본 블로그 분은 **CamelCase -> cabab case** 로? 변경할때 이러한 현상이 발생했다고 한다.

다만, 해당 커멘드에서는 주의사항이 한가지 있다.

내 PC 의 **깃 설정(ignorecase)** 을 **false** 로 변경한 것이기 떄문에 신규로 클론받는 경우는 모르겠지만, 같이 공용성을 둔 **repo** 에서 작업할 경우 받을 때 문제가 발생할 수 있다.

따라서, 혹시나 공용적으로 사용할 경우 받는 분들에게 **공유**를 해야한다.

이러한 사소한 부분을 기억해두어 실무에서는 실수하지 말아야 할것이다.

### 참고 사이트
---

- [Blog](https://papababo.tistory.com/entry/git-%EC%9D%80-%ED%8F%B4%EB%8D%94%ED%8C%8C%EC%9D%BC%EB%AA%85%EC%9D%98-%EB%8C%80%EC%86%8C%EB%AC%B8%EC%9E%90%EB%A5%BC-%EA%B0%9C%EB%AC%B4%EC%8B%9C%ED%95%9C%EB%8B%A4-%EA%B7%B8%EB%9F%BC-%EC%9A%B0%EC%A7%B8)

- [Blog2](https://kangdanne.tistory.com/148)