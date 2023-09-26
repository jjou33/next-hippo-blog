---
title: "Web Browser Process 브라우저 동작 원리"
date: "2021-11-15"
image: browser1.png
rootCategory: Programming
category1depth: Web
category2depth: Browser
keywords: ["Browser Process"]
excerpt: 브라우저에 관한 학습 내용을 기록하는 공간입니다.
isFeatured: true
---

### DOM(Document Object Model) & Window

---

- **_Document_** : 우리가 알고 있는 **HTML 의 전체 코드**로 이해하면 되고 **각 태그들을 객체**로 이해하면 된다. DOM tree 의 **최상위 객체**이다.

![image](https://user-images.githubusercontent.com/56063287/142225234-2ed1d786-0e46-459c-9e30-c6f3e6b34b07.png)

위 이미지에서 보이 듯이 우리는 **Document 라는 모든 HTML 코드를 가지고 있는 요소**아래 각 태그들을 객체로 이해하면 된다.

또한, document 객체를 통해, HTML/CSS 등을 수정할 수 있다 이부분은 javascript 의 기본이기 때문에 나중에 공부하면서 다시 기록해야겠다.

---

- **_window_** : 사용자 웹 브라우저 객체

![image](https://user-images.githubusercontent.com/56063287/142424714-bc5bb2bc-465f-4e46-b8e4-95720ec2d871.png)

window 아래 여러가지 객체들이 존재한다. document 또한 그중 하나이다.

### window 와 BOM(Browser Object Model)

---

- document 가 여러가지 HTML 코드를 조작 할 수 있는 객체라면,
- BOM 은 여러가지 브라우저 환경을 제어할 수 있는 window 란 객체를 만드는데 쓰인다고 이해하면 되겠다.

**예를들어**, 우리가 주로 사용하는 **alert 또한 window. 이 생략된 기능**으로 생각하면 되며 **BOM 의 주요 객체**에는 **_navigator, location_** 객체가 있다.
**_navigator_** 객체는 해당 사용자의 **브라우저와 운영체제 정보를 제공**하며, **_location은_** **url 관련되어 제어**가 가능하다.

```js
// alert("hello")
// window.alert("hihi")

console.log(navigator.userAgent);
// 현재 내가 사용하고 있는 브라우저 환경
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36

console.log(navigator.platform);
// 내가 사용하고 있는 플랫폼 환경
// MacIntel

console.log(location.href);
```

### 웹 브라우저 동작 과정

#### DOM / CSSOM / Render 트리 생성 과정

---

1. 사용자가 **웹 브라우저에서 특정 URL**로 진입하게 되면 서버에 **HTML 파일을 요청**한다.
2. 받은 **HTML 파일**을 **파싱(parsing)** 하여 객체로 구성한 **DOM tree** 를 생성한다.
   - 이 과정에서 **각 태그들간의 관계 및 정보를 분석**하게 된다.
3. **CSS 정보**를 **파싱(parsing)** 하여 **CSSOM tree** 를 생성한다.
   - 이 과정에서 각 태그별 **CSS 정보를 저장**한다.
4. 앞서 만든 **DOM 과 CSSOM** 를 통해서 **Render tree** 를 생성한다.
   - 이 과정에서 모든 **HTML(DOM) 각 태그에 CSS 정보**를 적용하게 된다.
5. 웹브라우저가 **Render tree** 를 기반으로 **사용자에게 페이지를 그려준다.**

####. 브라우저 동작 간 javascript

---

**<head> </head>** 안에 **<script> </script>** 로 넣게되면 서버로부터 HTML 코드를 받아 DOM 트리 구성 전 script 부분에서 자바스크립트 엔진에 제어건을 넘기게 된다.
이후 자바스크립트 엔진이 코드를 실행하고 다시 DOM 트리 구성을 진행하게 된다.

이러한 이유로 아래와 같은 현상이 발생하게 된다.

- **화면 로딩이 느려짐**
- **DOM tree 구성 전 javascript 를 실행**하게 되므로 DOM 을 조작하는 과정에서 **에러 혹은 정상적으로 실행이 되지 않을 수 있다.**

따라서 **<script> </script>**  즉, javascript 코드는 body 태그 종료 전 실행하는것이 좋다.

### 웹 브라우저 동작 과정

####. DOM / CSSOM / Render 트리 생성 과정

---

![image](https://user-images.githubusercontent.com/56063287/144748119-24624b76-cdb3-4173-9207-45b196882deb.png)

1. 사용자가 **웹 브라우저에서 특정 URL**로 진입하게 되면 서버에 **HTML 파일을 요청**한다.
2. 받은 **HTML 파일**을 **파싱(parsing)** 하여 객체로 구성한 **DOM tree** 를 생성한다.
   - 이 과정에서 **각 태그들간의 관계 및 정보를 분석**하게 된다.
3. **CSS 정보**를 **파싱(parsing)** 하여 **CSSOM tree** 를 생성한다.
   - 이 과정에서 각 태그별 **CSS 정보를 저장**한다.
4. 앞서 만든 **DOM 과 CSSOM** 를 통해서 **Render tree** 를 생성한다.
   - 이 과정에서 모든 **HTML(DOM) 각 태그에 CSS 정보**를 적용하게 된다.
5. 웹브라우저가 **Render tree** 를 기반으로 **사용자에게 페이지를 그려준다.**

####. 브라우저 동작 간 javascript

---

**<head> </head>** 안에 **<script> </script>** 로 넣게되면 서버로부터 HTML 코드를 받아 DOM 트리 구성 전 script 부분에서 자바스크립트 엔진에 제어건을 넘기게 된다.
이후 자바스크립트 엔진이 코드를 실행하고 다시 DOM 트리 구성을 진행하게 된다.

이러한 이유로 아래와 같은 현상이 발생하게 된다.

- **화면 로딩이 느려짐**
- **DOM tree 구성 전 javascript 를 실행**하게 되므로 DOM 을 조작하는 과정에서 **에러 혹은 정상적으로 실행이 되지 않을 수 있다.**

따라서 **<script></script>**즉, javascript 코드는 body 태그 종료 전 실행하는것이 좋다.

#### 참고 사이트

---

[https://d2.naver.com/helloworld/59361](https://d2.naver.com/helloworld/59361)

[https://blog.leehov.in/25?category=945934](https://blog.leehov.in/25?category=945934)

[https://davidhwang.netlify.app/Developments/browser-rendering-process/](https://davidhwang.netlify.app/Developments/browser-rendering-process/)

[https://velog.io/@yejineee/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%8F%99%EC%9E%91-%EA%B3%BC%EC%A0%95](https://velog.io/@yejineee/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%8F%99%EC%9E%91-%EA%B3%BC%EC%A0%95)

