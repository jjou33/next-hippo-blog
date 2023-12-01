---
date: "2023-06-14"
title: "[SonarQube] 로컬에서 소나큐브 연동하여 코드 Quality 체크하기"
image: sonarqube.png
rootCategory: Tools
category1depth: Quality
category2depth: sonarqube
keywords: ["QA Tools","Sonarqube"]
excerpt: SonarQube 에 관련된 포스팅 공간입니다.
isFeatured: true
---



### 개요
---

프로젝트에서 현재 프론트엔드 **Quality Check** 를 위한 **SonarQube** 관련 미션이 들어왔다.

CI/CD 에 연동된 방식이 아닌 로컬에서 언제든지 현재 **Code Quality** 를 체크할 수 있도록 해달라는 미션이었다.

그래서 일단 목표는 아래와 같다.

> 클론받은 프로젝트의 Quality Score 를 언제든지 SONARQUBE 서버에서 명령어를 통해 볼 수 있도록 한다.

어떻게보면 로컬과 현재 운영중인 소나큐브 서버와 연동하는 일 뿐인것이지만, 관련해서 포스팅한다.

본 포스팅은 **MAC OS 기준**이며, brew 를 통해 설치하는 방식입니다.

### SonarQube / Sonar-Scanner 설치
---

```bash
brew install sonar

brew install sonar-scanner
```

위 커멘드를 통해 **Sonar , Sonar-Scanner** 를 설치한다.

### SonarQube 환경 변수 설정
---

```bash
vi ~/.bash_profile
```

bash_profile 에 vi 로 접근하여 아래 변수를 작성한다.

```bash
export SONAR_HOME=/usr/local/Cellar/sonar-scanner/{version}/libexec 
export SONAR=$SONAR_HOME/bin export PATH=$SONAR:$PATH
```

### SonarQube 실행
---

```bash
brew services start sonarqube
...

Enter http://localhost:9000 in the browser to enter the following page.
Log in to SonarQube and enter the account and password admin/admin
```
위 가이드처럼 이제 로컬에 9000번 포트로 들어가면 아래와 같은 페이지가 뜨고 가이드에서 알려준 아이디와 비밀번호를 치면 로그인이 된다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/bae8d9fe-12fc-4ce9-ba91-92a2f1ecc50a)

### 프로젝트 생성
---

로그인 이후 프로젝트를 생성한다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/097a4649-113b-4656-83c2-e8e64ece263a)

본인이 사용하는 형상관리 툴을 사용해도 되고, Manually 로 해도 무방하다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/5c812534-fb5e-4f70-af89-5bb657081af7)

Manually 를 선택 하면 아래와 같이 프로젝트 명을 작성하고 프런치는 스캔하고 싶은 브런치를 작성한다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/989c7945-5d67-471a-a1ac-aa150537c64e)

이후 설정대로 가고 나의 경우에는 Other CI 를 눌렀다.
Locally 로 해도 무방한듯 하다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/2a3ebd76-0394-4f6b-98d9-56436db9895d)

토큰명을 작성하고 EXPRIRES 는 개인으로 할꺼기 때문에 영구로 선택하여 생성한다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/4d77dd95-8efe-470a-8c68-19db46c395a0)

이후 진행을하고 본인의 *Tool*과 *OS* 를 선택하면 자세하게 방법이 나온다.

하지만, 우리는 이미 로컬에 *Sonar* 와 *Sonar-Scanner* 를 설치했기때문에 상단 명령어는 필요없고 아래의 명령어만 사용하면된다.

그러나, 저 코드대로 커멘드를 날리면 아래와 같은 에러를 만나게 될 것이다.

```bash
INFO: Scanner configuration file: /opt/homebrew/Cellar/sonar-scanner/4.8.0.2856/libexec/conf/sonar-scanner.properties
INFO: Project root configuration file: NONE
INFO: SonarScanner 4.8.0.2856
INFO: Java 11.0.19 Homebrew (64-bit)
INFO: Mac OS X 13.0.1 aarch64
INFO: User cache: /Users/nsh/.sonar/cache
INFO: Analyzing on SonarQube server 9.9.0.65466
INFO: Default locale: "ko_KR", source code encoding: "UTF-8" (analysis is platform dependent)
INFO: Load global settings
INFO: ------------------------------------------------------------------------
INFO: EXECUTION FAILURE
INFO: ------------------------------------------------------------------------
INFO: Total time: 0.723s
INFO: Final Memory: 5M/30M
INFO: ------------------------------------------------------------------------
ERROR: Error during SonarScanner execution
ERROR: Not authorized. Analyzing this project requires authentication. Please provide a user token in sonar.login or other credentials in sonar.login and sonar.password.
ERROR: 
ERROR: Re-run SonarScanner using the -X switch to enable full debug logging.
```

자세히 읽어보니 인증문제이다. 그렇다 우리는 스캐너에게 단한번도 인증토큰을 알려주지 않았다.

커멘드 한줄을 추가한다.

```bash
 sonar-scanner \
  -Dsonar.projectKey=nsm-fo-temp \
  -Dsonar.sources=. \
  -Dsonar.host.url=<YOUR_URL>\ 
  -Dsonar.login=<YOUR_TOKEN>
```

- HOST_URL : 이부분은 **localhost:9000** 번으로 하면되나, 이번경우에는 회사에서 구축된 소나큐브 서버랑 연결해야 되기 때문에 본인은 해당 URL 을 적었다.

- LOGIN : 상단에 프로젝트에서 받은 TOKEN 정보를 작성하면된다.

### 실행
---

이제 본인이 스캔하고 싶은 프로젝트 혹은 폴더 경로로 들어가 커멘드를 치면 연결이된다.

이후 소나큐브 데쉬보드를 들어가보면 아래와 같이 연결된 것을 확인할 수 있다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/874a1a9e-9819-4434-8e02-f4a81ec00131)

### Rule-set
---

**RuleSet** 의 경우 **Quality Profile** 에서 설정할 수 있다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/bc9e56a5-bead-4d50-801b-8673afc78b72)

해당 페이지로 들어가면 *DEFAULT* 로 룰셋이 정해져 있고, 커스텀을 하기 위해서 우측상단 create 버튼을 누른다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/edb750a0-3faa-455d-b450-d2d35ed51506)

커스텀 룰셋을 원하는 언어와 네이밍으로 만든다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/663a8aa5-7a39-4064-9fea-aef87f4463fa)

이후 내가 원하는 룰셋을 추가 및 삭제를 해서 진행하면 되고, 수정이 완료되었으면 우측 상단 **Project Settings** 
에서 **Quality Profiles** 를 선택하여 내가 만든 룰셋을 선택하면된다.

![image](https://github.com/jjou33/hippo-blog/assets/56063287/eec1c46a-b296-4c54-8c8d-5f166baa6d84)
