---
date: "2024-03-19"
title: "[Nginx] Reverse Proxy / Caching / 버전정보 숨기기"
image: nginx.webp
rootCategory: Programming
category1depth: Web
category2depth: nginx
keywords: ['Nginx', 'Caching']
excerpt: 실무에서 사용된 Task 에 대한 내용을 간단하게 정리합니다.
isFeatured: true
---

### 개요

---

현재 업무를 진행하면서 **Nginx 에 대한 설정으로 여러가지 성능과 이슈를 처리**하고 있다.

이부분들을 기억하기 위해 간단하게 Task 에 대한 처리 과정을 남긴다.


### Reverse Proxy 란?
---

리버스 프록시란 **클라이언트와 웹 서버 간의 중개자 역할**을 하는 서버로, 클라이언트로부터의 요청을 대신 받아 웹 서버에 저달하고, 웹 서버의 응답을 클라이언트에게 전달하는 역할을 한다. 이를 통해 리버스 프록시는 **웹 서버의 부하를 분산**시키고, 보안을 강화하는 등 다양한 기능을 수행할 수 있다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/65b7f1cc-88c0-4dae-a5db-1bdd55b2c5f2)

**이미지 출처** : [What is a Reverse Proxy Server? Learn How they Protect You](https://www.upguard.com/blog/what-is-a-reverse-proxy)

기본 작동 원리는 클라이언트가 리버스 프록시에 요청을 보내면, 리버스 프록시는 요청을 웹 서버에 전달하고, 웹 서버는 요청된 데이터를 처리한 후 리버스 프록시에게 응답을 보낸다. 그리고 리버스 프록시는 웹 서버로부터 받은 응답을 클라이언트에게 전달하는 방식으로 동작한다.

### 자사 시스템 활용 내역
---

현재 **MSA Cloud 형태로 환경이 구축**되어있고, **로드 벨런싱은 L4** 에서 진행한다.

웹서버 컨테이너에 Nginx 가 존재하며, Nginx 가 웹서버의 역할을 하고 있는 샘이다.

여기서 이번에 수정했던 부분은 **Static Contents 들(svg, css, Font, JS) 등의 Caching** 을 진행하였고, 페이지 렌더링 시 요청 **네트워크 속도를 감소** 시켰다.

### Cache-Control 수정
---

```yml
# nginx.conf
...

location / {

  ...
  
  # 항상 원본 요청
  add_header Cache-Control "public, max-age=0, must-revalidate";
}

# js, css, woff2, svg 에 대해서 하루 캐싱 및 Hash 변경(배포) 시 원본 검증 
location ~* \.(js|css|woff2|svg)$ {
  root   /app;
  add_header Cache-Control "public, max-age=86400, must-revalidate";
}
...

```

#### Caching 하지 않는 파일들

먼저 Browser 는 렌더링 시 Web Server 로 부터 Bundling 된 파일들과 여러가지 정적 컨텐츠들을 받아온다.

여기서 중요한 부분은 SPA 를 사용하게 되면 현재는 Vue 를 예로 들면 app.vue 를 기준으로 여러가지 Single Component 가 Routing 을 통해 교체되면서 어플리케이션이 동작하게 된다.

따라서, index.html 즉 기준이되는 html 은 <script> </script> 를 통해 Bundling 된 js 파일들을 Module 로 가져오게되는데, **배포 시 js 파일들의 hash 값은 계속해서 바뀌기** 떄문에 이때 index.html 에서 **js module 을 불러오는 스크립트의 src 또한 바뀌게** 된다.

```html
...
<script type="module" crossorigin src="/assets/index-BEY-kAR7.js"></script>
<link rel="modulepreload" crossorigin href="/assets/lottie-DEmz9lSa.js">
<link rel="modulepreload" crossorigin href="/assets/lodash-Dlg9W1Yp.js">
<link rel="modulepreload" crossorigin href="/assets/gsap-Coj0-aKJ.js">
<link rel="modulepreload" crossorigin href="/assets/swiper-BO9Gw2dh.js">
<link rel="stylesheet" crossorigin href="/assets/index-L2Nv1p_s.css">
...
```

따라서, **Cache-control 의 기준은 public, max-age=0, must-revalidate"** 로 잡았다.

이는, *max-age* 가 *0* 이므로 **캐싱되지 않고 요청을 받게되면 무조건 origin 을 참조하여 업데이트 하라는 정책**이다.

이유는 이부분이 캐싱이 되면 신규배포 시 **js bundle 파일의 Hash 값은 바뀌게** 될것이며, **html 은 렌더링을 위해 caching 된 이전 잘못된 bundle 을 계속해서 웹서버에 요청**할 것이다.

실제로, 다른 Task 를 진행하던 중 팀원으로 부터 앱이 업로드 되지 않는다는 문의를 받아 확인해본결과 nginx 의 정책을 걸어놓지 않아 이 파일이 caching 이 되어버린 이유였다.

따라서, 기준은 모든 요청에 Origin 을 참조하도록 하였고, 캐싱이 필요한 부분을 따로 뺴기로 하였다.

#### Caching 이 필요한 파일들

- js

우리가 Build 를 진행하면 Bundler 의 설정에 따라서, 보통 **여러개의 Chunk 로 분리해서 js 파일**을 나눈다.

이유는 한번에 **큰 파일의 Bundle 파일을 받게 되면 너무 무겁고 느리기 때문에 큼직한 부분은 다누어서 브라우저가 요청하게 하는 것**이다.

이때, 각각의 js 에는 hash 를 붙이고 index.html 은 생성된 여러 js 를 불러와 렌더링을 진행하는 것이다.

따라서 bundling 된 js 파일은 **배포가 일어나기 전까지는 사실상 같은 코드**일 것이며, 다시 받을 필요가 없는 것이다.


- css, font, svg

css 와 font,svg 또한 비슷 하다. 설정에 따라 여러개의 파일로 분리되어 렌더링시 브라우저에서 요청을 진행하지만, 

사실상 변경사항이 많지 않은 파일이다. 따라서 Caching 을 걸어서 배포 전까지는 브라우저에 캐싱을 진행한다.

### Caching 전 후 결과

*캐싱 전*

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/7470d4b7-6b31-493f-a397-f612eefbf767)

*캐싱 후*

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/4b959266-599d-4839-b7b4-dfd8feafd774)

결과는 브라우저가 첫 사이트 렌더링 시 Web Server 에서 받아오는 Load 시간 및 요청 자체가 크게 줄어든 것을 볼 수 있다.


### Version 정보 숨기기

Nginx 를 사용할때 Error Page 를 보통은 Default Page 를 사용한다.

```yml

# nginx.conf
...

error_page   500 502 503 504  /50x.html;
location = /50x.html {
  root   /usr/share/nginx/html;
}

...
```

50x 번대의 에러의 경우에는 하위 Path 에 있는 50x.html 을 사용하게 설정하였다.

나머지 정의하지 않은 에러 페이지는 같은 폴더 내 index.html 페이지를 사용하게 된다.

이건 사실 **회사의 정책에따라서 커스텀하여 페이지를 구성할 수도 있는 부분**이기 떄문에 이부분에 대해서는 작성하지 않겠다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/5d8f7bbc-e644-4491-9a95-4aaa9cc2780a)

다만, 문제가 된 부분은 프로젝트를 진행하면서 정보보호실에서 취약점 진단을 진행하였는데 아래와 같이 **버전정보가 나타나는것에 대해서 문제를 제기**하였다.

**인프라쪽에서도 해당 부분이 문제가될 수 있다고 하여 버전정보를 삭제**하였다

방법은 아래와 같다.

```yml
# nginx.yml

...

server {
  listen       80;
  server_name  localhost;
  server_tokens off; # <--- 이부분 추가
  ...
 

```

간단하게 **server tokens 설정을 off** 하면 해결 된다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/eb6253c3-e953-4a0a-a620-ad34183af892)

