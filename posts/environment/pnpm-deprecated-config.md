---
title: "[PNPM] deprecated 된 버전 로그 및 unmet peer Allow 설정"
date: "2023-05-31"
image: npmpnpm.png
rootCategory: Programming
category1depth: Web
category2depth: environment
keywords: ['Package Manager', 'Pnpm', 'Deprecated']
excerpt: 개발환경에 필요한 도구들과 관련된 포스팅 입니다.
isFeatured: true
---

### 개요
---

**React Project** 에서 패키지 매니저를 **PNPM** 을 사용하고 있다.

**Gatsby 4버전** 을 사용하는데 몇가지 플러그인에서 **Deprecated**된 **Peer-dependency** 를 사용하기 때문에 Install 시에 아래와 같은 로그가 발생한다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/c1be0c70-b966-4119-b99b-b562dc7cc907)

**5버전**으로 마이그레이션을 하거나 혹은 **Peer-dependency** 를 **Override** 하여 문제를 해결하는 방법도 있지만..개인적인 프로젝트이기 때문에 이 프로젝트에 더이상 큰 시간을 소모하고 싶지는 않았다.

추가적으로 또 하고 싶은 프로젝트가 있기 때문에 **Blog Project** 는 추가적인 포스팅을 위한 기능만을 유지보수하고 따로 해보고 싶었던 **Next.js** 를 활용한 프로젝트를 지인과 함께 기획중이다.

그러나, 이 프로젝트를 **Install**할때 위와 같은 로그가 찍히는게 너무 찝찝하여 해결하고자 공식문서와 Git Issue 를 찾아보니 역시나 해결법은 간단했다.

### "AllowedDeprecatedVersions" 를 활용한 해결방안
---

공식문서에 보면 **PNPM** 진영에서는 이미 이러한 문제를 설정값으로 제어할 수 있도록 가이드 하고 있다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/58397625-3bcd-49e9-aea4-f7f8474f3071)

참고 페이지 : [https://pnpm.io/next/package_json](https://pnpm.io/next/package_json)

**Package.json** 에 **pnpm**에 필요한 설정들을 통해 이를 해결할 수 있었다.

```json
...
  "pnpm": {
    // 각각의 의존성에 우측에 명시한 버전의 deprecated warning 은 print 하지 않는다.
    "allowedDeprecatedVersions": {
      "express-graphql": "0",
      "string-similarity": "1",
      "stable": "0",
      "core-js": "2",
      "async-cache":"1",
      "request": "2",
      "uuid": "3",
      "har-validator": "5",
      "babel-eslint": "10",
      "uglify-es": "3",
      "source-map-resolve": "0",
      "resolve-url": "0",
      "source-map-url": "0",
      "urix": "0"
    }
  }
...
```
설정 후에 다시 **Install** 을 진행하면 아래와 같이 깨끗한 **Terminal**을 확인할 수 있다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/079c3a3c-ee5c-40d1-838d-6cd24df9f657)

### Unmet Peer Warning 제거
---

특정 의존성은 Gatsby 4버전 5버전에서 가능하나 5버전이 아닐 경우 아래와 같이 Warning 로그를 출력하게 된다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/960466b6-9012-49d0-8e42-d0b07f147d79)

이러한 이유로 5버전을 올리자니 또 이에 맞는 peer-dependency 트러블슈팅을 해야한다.

물론, 실제 운영되는 어플리케이션은 맞추도록 해야하지만 개인 프로젝트에서는 넘어갈 수 있는 정도이기 때문에 이부분도 공식문서를 찾아보면 정확하게 나온다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/02a8422c-4df5-4e49-909b-e82543222aa9)

**peerDependencyRules** 에서 **allowedVersions** 옵션을 주게 되면 해결된다.

```json
...
    "peerDependencyRules": {
      "allowedVersions": {
        "gatsby": "4",
        "eslint": "8",
        "react": "18"
      }
    }
...
```
### 참고 사이트

- [pnpm 공식 사이트](https://pnpm.io/next/package_json)
- [Git Issue](https://github.com/pnpm/pnpm/issues/4306)



