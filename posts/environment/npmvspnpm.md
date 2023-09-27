---
title: "[PackageManager] npm vs pnpm 비교 및 사용기"
date: "2023-05-24"
image: npmpnpm.png
rootCategory: Programming
category1depth: Web
category2depth: Environment
keywords: ['Package Manager', 'Pnpm']
excerpt: 개발환경에 필요한 도구들과 관련된 포스팅 입니다.
isFeatured: true
---


### 개요
---

이번 프로젝트에서 **프로젝트 환경** 을 구성하면서 **package** 의존성을 관리할 수 있는 **Package Manager** 에 대한 고민을 하게 되었다.

결과적으로는 **pnpm** 을 선택했고 왜 **pnpm**을 선택하였는지, 그리고 **npm** 과의 차이점을 기록한다.

### Node Package Management 의 역할
---

먼저 **Node Package Management** 는 기본적으로 우리가 사용하는 다양한 **의존성** 들을 **설치** 하고 **관리** 하는 기능을 제공한다.

- metadata 작성 및 관리
- 의존성(dependencies) 관리
- command 정의 및 실행

위의 역할이 대표적인것 같고 이제 우리는 이러한 기능들을 제공하는 여러가지 **선택지** 를 고려해봐야 한다.

### npm / pnpm
---

**npm** , **pnpm** 이렇게 총 3가지에 대한 고려를 하였다.

**yarn** 이 최근 **yarn 2.0(berry)** 의 형태로 버전업을 하면서 많이 개선되었다는 것을 봤다.

하지만, 현재 **npm** 을 사용함에 큰 문제가 없는 상황에서 본 프로젝트에 고도화를 하는데에 먼저 우선된것은 **pnpm** 이었다.

또한, **pnpm** 이 **yarn** 과 **npm** 을 쓰레기통에 넣은 이미지를 볼때 나쁘지 않은 선택인것 같은 생각을 하였다.

## npm


**npm** 은 본인과 실제 **운영** 및 **개발자** 입장에서 굉장히 익숙하기 때문에 문안하게 갈 수 있는 선택지였다.

초창기 이러한 **management** 개념을 이끌어 낸것이 **npm** 이기 때문에 초기 프레임웍을 셋팅하고 개발하는 입장에서 많은 **레퍼런스** 또한 좋은 선택지였다.

**npm** 또한 이러한 시대의 변화에 맞춰서 **v2** 에서 **v3** 으로 올리면서 **Flatted Dependency** 개념을 적용하였다.

 **npm** 의 경우 공식 **github** 에 작동 방식을 자세히 알 수 있다.

### 작동 방식
---

먼저 **A** 모듈은 **B** 를 필요로 한다고 가정하자.

이때 **v2** 와 **v3** 는 아래와 같이 설치가 된다.

![image](https://user-images.githubusercontent.com/56063287/188060712-04c63381-007e-4a6f-a4ed-40fbe60fdee6.png)


**v2** 의 경우에는 **중첩** 된 방식으로 설치되는 반면, **v3** 의 경우 **Flat** 한 즉, **depth** 가 동일한 평평한 형태로 설치가 되게된다.

추가로 모듈 **C** 를 추가해야 하는 경우가 생겼는데, 이 **C** 모듈의 경우 기존 **v1** 버전의 **B** 모듈이 아닌 **v2** 버전의 **B** 모듈이 필요한 상황이다.

이러한 경우 이미 **A** 모듈은 **v1** 버전의 **B** 모듈에 의존하고 있기 때문에, 추가로 **2depth** 를 가지는 **C** 모듈의 의존성으로 **v2** 버전의 **B** 모듈을 추가 설치하게 된다.

반면, **npm 3 version** 의 경우 **Flat**한 형태로 최대한 **depth** 를 깊게 들어가지 않고 다른 **C** 를 설치하여 **의존성** 을 중첩하여 처리한다.

![image](https://user-images.githubusercontent.com/56063287/188061403-c58c2189-aa96-4a6c-b8c8-58da26e4ee2e.png)

## pnpm

**pnpm** 은 위에서 설명한 **npm** 의 복잡성을 개선한다는 슬로건을 내걸고 등장하였다.

**npm** 의 경우 **A** 라는 의존성을 사용하는 프로젝트가 100개가 있다면, **Disk** 상에 의존성에 대한 복사본이 **100** 개가 저장되게 된다고 한다.

하지만, **pnpm** 은 이부분을 **link** 를 통해 **content-addressable** 저장소를 사용함으로써 해결한 것 같다.

따라서, 공식 홈페이지에서는 **pnpm** 의 장점 두가지를 아래와 같이 설명하고 있다.

- 다른 버전의 의존성에 여러분이 의존하는 경우, 다른 파일만이 저장소에 추가됩니다. 예를 들어, 100개의 파일이 있고 새 버전이 해당 파일 중 하나만 변경되면, pnpm update 는 단일 항목의 변경에 대해 전체 파일이 복제되는 대신, 저장소에 1개의 새로운 파일만 추가합니다.

- 모든 파일은 디스크 상에서 단일 위치에 저장됩니다. 패키지가 설치될 때 그 파일들은 단일 위치에서 하드링크되며 추가적인 디스크 공간을 소비하지 않습니다. 이를 통해 프로젝트 간에 동일한 버전의 의존성을 공유할 수 있습니다.

![image](https://user-images.githubusercontent.com/56063287/188062534-175eee27-9306-48f8-8896-557a9e04a5bd.png)

**pnpm** 의 **node_modules** 생성을 보면 **npm** 의 **flattend** 한 구동방식 대신 **link** 형태 및 **store** 형태로 구성되는 것을 볼 수 있다.

이와 관련된 [symlink 된 node_modules 구조](https://pnpm.io/ko/symlinked-node-modules-structure) 는 공식 사이트에 굉장히 자세히 설명이 되어 있으니, 꼭 한번 정독해보길 바란다.

가장 중요한 점은 **재사용성** 인것 같다.

위에서 말한 **disk** 저장소의 효율성 모두 **Symbolic Link** 를 통한 재사용이 관건인것 같다.

위 공식문서를 요약하자면 아래와 같다.

```bash
node_modules
├── foo -> ./.pnpm/foo@1.0.0/node_modules/foo
└── .pnpm
    ├── bar@1.0.0
    │   └── node_modules
    │       ├── bar -> <store>/bar
    │       └── qar -> ../../qar@2.0.0/node_modules/qar
    ├── foo@1.0.0
    │   └── node_modules
    │       ├── foo -> <store>/foo
    │       ├── bar -> ../../bar@1.0.0/node_modules/bar
    │       └── qar -> ../../qar@2.0.0/node_modules/qar
    └── qar@2.0.0
        └── node_modules
            └── qar -> <store>/qar
```

**foo** 의 경우 **bar** ,**qar** 를 의존성으로 가지고 있다고 가정하자

**pnpm** 은 설치 시 **bar@1.0.0**, **foo@1.0.0**, **qar@2.0.0** 을 모두 **hard link** 로 콘텐츠 주소 지정 저장소를 링크하게 된다.

따라서, **.pnpm** 하위 **node_modules** 하위 파일은 실제 존재하는 파일이다.

이후 **foo** 의 경우 실제 프로젝트 의존성이기 떄문에 **root node_modules** 폴더에 **Sysmbolic link** 로 연결되게 된다.

따라서, **foo** 를 사용하게 되면 **Node** 는 **Symbolic Link** 로 연결된 의존성을 확인하면 되는 것이다.

추가로 **foo** 의 경우 **bar 와 qar** 를 의존성으로 가지고 있기 때문에 **bar, qar** 를 **Symbolic Link** 로 걸어놓고 실제 사용할때 **Node** 는 실제 **bar ,qar** 를 확인해서 추가적인 작업을 진행하면 되는 것이다.

따라서, 중요한 부분은 **동일한 파일이 계속되서 추가되는 것이 아닌 Link 를 통해 충분히 재사용 된다는 것이다.**

### npm 과 pnpm 실제 install 비교
---

실제로 프로젝트에서 가지고 가는 **의존성** 을 대상으로 **npm** 으로 **install** 했을때와 **pnpm** 을 통해 **install** 했을때 **시간** 과 **크기** 에 대해서 비교해보았다.

### 실제 Performance 비교
---

|Node Package Management|install 속도|개발환경 구동 속도|
|------------------------|-----------|---|
|npm                     |   37 초 | 2.3초|
|pnpm                     |10.9 초     | 1.9초|

실제 프로젝트에서 **package.json** 내 의존성을 **install** 하는 경우 속도 차이가 굉장히 큰걸 확인하였다.

또한, 로컬 개발환경 실행을 위한 구동 속도 또한 나름 큰 차이를 보이는 것을 볼 수 있다.

초기 프로젝트임을 감안하고 이정도면 추후 프로젝트가 무거워지면 질수록 더 큰 효과를 볼 수 있을 것 같았다.

### 최종 정리
---

현재 **pnpm** 을 적용해서 프로젝트를 세팅하고 구현하는 입장에서 느낀점은 **굉장히 빠르다** 이다.

위에서 설명한 **install** 속도와 **개발환경 구동 속도** 또한 체감이 될 정도로 빠르게 느껴졌다.

프로젝트 초기인만큼 조금은 가벼울 수 있는 상태이지만 추후 엔터프라이즈 급으로 무거운 프로젝트가 되었을 경우 더욱 큰 차이가 발생할 것 같아 **pnpm** 을 사용해서 프로젝트를 진행하게 되었다.

### 참고 사이트

- [pnpm 공식 사이트](https://pnpm.io/ko/motivation)
- [npm 공식 깃허브페이지](https://npm.github.io/how-npm-works-docs/npm3/how-npm3-works.html)



