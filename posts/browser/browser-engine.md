---
title: "Web Browser Process 브라우저 동작 원리2"
date: "2021-12-02"
image: browser2.png
rootCategory: Programming
category1depth: Web
category2depth: browser
keywords: ["Browser Process"]
excerpt: 브라우저에 관한 학습 내용을 기록하는 공간입니다.
isFeatured: true
---



### Browser 요소(Elements)

---

![image](https://user-images.githubusercontent.com/56063287/144439265-c4362193-2fa7-4a2f-8533-76746b85e31e.png)

- **_사용자 인터페이스_** : 우리가 브라우저에서 볼수 있는 **주소표시줄, 버튼** 등 사용자가 컨트롤 할 수 있는 부분
- **_브라우저 엔진_** : **사용자 인터페이스**와 **렌더링 엔진** 사이 동작을 제어
- **_렌더링 엔진_**
  - 사용자가 요청한 **URI** 를 **브라우저 엔진** 으로부터 받아 **서버에 요청**한다.
  - 서버로 URI 요청하여 **응답받은 데이터**(**HTML**, **CSS** , **JavaScript**) 를 받아서 **파싱 후 렌더링**한다.(Chrome webkit)
- **_통신_** : **렌더링 엔진**으로부터 **HTTP 요청** 등을 받아서 **네트워크 처리** 후 응답을 전달
- **_자바스크립트 해석기_** : JavaScript 를 파싱한다(chrome V8)
- **_자료 저장소_** : **쿠키** 등의 자료를 **컴퓨터 하드디스크**에 **저장**한다.
  (**HTML5** 부터 **Web Database** 에 저장가능)
- **_UI 백엔드_** : render tree 를 Browser 에 그리는 역할을 담당

### Browser Rendering Process

---

1. **브라우저 주소 표시줄**에 URI 입력 후 **브라우저 엔진에 전달**
2. **브라우저 엔진**은 **자료 저장소**에서 **URI** 에 해당하는 **자료**를 찾고, 해당 자료를 **쿠키**로 **저장 후 렌더링 엔진으로 전달**
3. **렌더링 엔진**은 브라우저 엔진으로부터 받은 자료(**HTML**, **CSS**, **image** 등)를 **분석**한다. **동시에** **URI 데이터**를 **통신**, **자바스크립트 해석기**, **UI 백엔드**로 전파한다.
4. **렌더링 엔진**은 통신 레이어에 URI 에 대한 **추가 데이터**가 있다면 요청하고 응답을 기다린다.
5. 응답받은 데이터에서 **HTML** ,**CSS** 는 **렌더링 엔진이 파싱**한다.
6. 응답받은 데이터에서 **JavaScript**는 **Javascript 해석기가 파싱**한다.
7. **JavaScript 해석기**는 파싱한 **결과**를 **렌더링 엔진**에 전달하여 3번과 5번에서 파싱한 **HTML** 의 결과인 **DOM tree** 를 조작한다.
8. 조작이 완료된 **DOM node(DOM Tree 구성요소)**는 **render object(render tree 구성요소)** 로 변한다.
9. **UI 백엔드**는 **render Object** 를 **브라우저 렌더링 화면에 띄어준다.**

### Rendering Engine Working Process

---

렌더링 엔진은 URI 를 통해 요청을 받아서 해당하는 데이터를 렌더링하는 역할을 담당
chrome 과 IOS 는 webkit 이라는 rendering engine 을 사용

#### Rendering 동작 과정

![image](https://user-images.githubusercontent.com/56063287/144630479-09e01c18-48e7-4366-a2fe-85f5fedb3d69.png)

1. **DOM tree 구축**을 위한 HTML parsing, CSS, Javascript parsing : HTML 문서를 파싱한 후, content tree 내부에서 tag(a, div)를 DOM node 로 변환한다. 그 다음 CSS 파일과 함꼐 모든 스타일 요소를 파싱한다. 스타일 요소와 HTML 표시 규칙, Javascript 의 파싱 결과물은 render tree 를 생성한다

2. **render tree 구축** : HTML 과 CSS 를 파싱해서 만들어진 render tree 는 색상 또는 면적 등 시각적 속성을 갖는 사각형을 포함한다. 정해진 순서대로 렌더링한다

3. **render tree 배치** : render tree 가 생성이 끝나면, 배치가 시작된다. 각 node 가 정확한 위치에 표시되기 위해 이동한다

4. **render tree 그리기** : 각 node 배치를 완료하면 UI 벡엔드에서 각 node를 가로지르며 paint 작업을 한다

### 참고 사이트

---

[https://d2.naver.com/helloworld/59361](https://d2.naver.com/helloworld/59361)

[https://blog.leehov.in/25?category=945934](https://blog.leehov.in/25?category=945934)

[https://davidhwang.netlify.app/Developments/browser-rendering-process/](https://davidhwang.netlify.app/Developments/browser-rendering-process/)

[https://velog.io/@yejineee/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%8F%99%EC%9E%91-%EA%B3%BC%EC%A0%95](https://velog.io/@yejineee/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%8F%99%EC%9E%91-%EA%B3%BC%EC%A0%95)
