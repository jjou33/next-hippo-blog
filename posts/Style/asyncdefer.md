---
title: "[HTML/CSS] Async / Defer 스크립트"
date: "2022-03-18"
image: async.png
rootCategory: Programming
category1depth: Web
category2depth: Style
keywords: ['HTML', 'Script']
excerpt: HTML / CSS 와 관련된 포스팅 입니다.
isFeatured: true
---

### 개요

---

프론트엔드는 공부하면 할수록 알고싶어지는게 너무 많은것 같다.

이번엔 브라우저에서 화면이 그려질때 즉, HTML 을 읽어내려갈때 **<script>** 태그를 만날때 진행되는 과정에 대해서 기록해본다.

우리가 흔히 웹 어플리케이션을 만들고 화면이 렌더링 되는과정에서 동적인 화면을 만들기 위해서 **Javascript** 호출이 필요하다.

하지만 브라우저가 그려지는 엔진 특성상 복잡한 비즈니스의 **Javascript**를 불러오게 되면 파일 용량이 상대적으로 크다.

그러나 우리가 알고 있는 브라우저는 **DOM**의 **HTML Parsing** 과 **Javscript** 로드를 병렬로 처리하지 않기 떄문에 이부분을 비동기로 불러오는 방법에 대해서 알아보자.

### Async / Defer 가 왜 필요할까?

---

일반적으로 브라우저는 **HTML**파일을 받아서 상단부터 차례로 한줄씩 해석을 시작한다.

중간에 **<script>** 태그를 읽게되면 이전까지 진행되고 있던 **HTML Parsing**작업을 일시적으로 멈추고 **Javascript** 파일을 **Load** 하는 방식으로 진행된다.

![image](https://user-images.githubusercontent.com/56063287/159010116-ee9fa78a-2d80-4cb2-9bf4-0c5f8140663d.png)

이러한 과정은 몇가지 문제점을 일으킬 수 있다.

1. 위치에 따라 동일한 동작을 하는 코드의 동작 가능 여부가 달라진다.

예를 들어 아래와 같은 코드가 있다고 해보자.

```html
<script>
  // 1. div 가 해석되어 DOM에 부착 전 호출
  console.log(document.getElementById("greet").innerHTML);
</>

<div id="greet">Greet Div</div>

<script>
  // 2. div 가 해석되어 DOM에 부착된 후 호출 / Greet Div 출력
  console.log(document.getElementById("greet").innerHTML);
</script>
```

위 예시는 많이 극단적이기는 하지만 당연히 **<div>** 가 그려지기 전인 1번의 경우 오류가 발생할 것이다.
이처럼 동기적인 해석 방식으로 인해 개발자의 역량에 따라 에러가 발생할 수 있다.

2. 큰 용량의 파일을 불러올때 그 다음 태그가 보이지 않는다.

예를들면

```html
<script src="XXX.js">
  // 1. 용량이 큰 파일로 5초 이상 걸리는 JS 파일
</script>

<div id="greet">Greet Div</div>

<script>
  // 2. div 가 해석되어 DOM에 부착된 후 호출 / Greet Div 출력
  console.log(document.getElementById("greet").innerHTML);
</script>
```

이 구문이 실행될때 1번 **JS**파일을 다운받기 위해 5초간의 파싱이 멈추게 된다.

사용자는 **Greet Div**를 화면에서 볼 수 없고 멈춘것 처럼 보인다.
이러한 서비스는 사용자에게 불편한 사용경험을 제공한다.

### 해결방안


#### 시점 조정



위와 같은 경우를 해결하기 위해 **<body>** 태그 최 하단에 **<script>** 태그를 몰아서 넣는 방식으로 해결하기도 하였다.

하지만, 이러한 방식은 **절반의 성공**일 것이다.

이유는 고객은 모든 **DOM**이 부착되어 그려진것 처럼 보이지만 실제로 인터렉티브한 동작을 할 경우 즉, 버튼을 누른다거나? 여타 기능을 시도했을때 이러한 기능이 담겨진 **Javascript** 파일이 로드되지 못하였으므로 동작하지 않는다.

이러한 경험또한 마찬가지로 부정적이기 때문에 **이러한 해결법은 좋지 않다.**

### Async / Defer

---

이제 현재 해결방안으로 알고 있는 **Async / Defer** 에 대하여 이야기해 보자.

해결법은 **Javascript**가 로드될 때 **HTML 파싱**을 멈추지 않고 병렬로 진행하는 방식이다.

#### Async

---

**Async** 스크립트는 **HTML**의 파싱을 중단시키지 않고 진행된다.
즉, 중단없이 병렬로 스크립트 파일을 다운받는다는 뜻이다.

![image](https://user-images.githubusercontent.com/56063287/159010216-440b72f1-a6c7-44b4-baad-8261ed7f1ad8.png)

이러한 방식은 **HTML** 파싱을 통해 **DOM**을 구성하면서 동시에 백그라운드에서 **Javascript**파일을 불로올 수 있어 해결책으로 볼 수 있다.

하지만, 여기도 문제점이 발생한다.

_첫번째_ **Async**의 경우 **스크립트 파일을 받아오는 것만 병렬로 실행**으로 인한 문제점이다.

파일의 로딩이 끝나는 즉시 **DOM** 렌더를 멈추고 **Script**파일의 해석을 시작한다.
이로 인해서 **Async** 속성으로 파일을 불러와도 스크립트의 오버해드 즉, 로드 시간이 길게 되면 문제가 발생할 여지가 있다는 뜻이다.

따라서, **DOM**에 접근하는 기능을 갖는 **Script**의 로드를 **Async**방식으로 불러오는것은 위험한 방법일 수 있다.

아래 코드를 확인해보자.

```html
<!-- Async1.js 는 로드되는데 5초가 걸립니다 -->
<script src="Async1.js" async></script>

<!-- Async2.js 는 로드되는데 1초가 걸립니다 -->
<script src="Async2.js" async></script>
```

**Async1.js** 파일은 로드에 5초의 시간이 걸리는 반면 그보다 아래에 있는 **Async2.js** 파일의 로드 시간은 1초 이다.

만약 **Async2.js** 파일이 먼저 로드되고 만약 **Async1.js** 의 스크립트와 의존성이 있다면 비정상적인 동작이 발생할 여지가 있을 수 있다.

_두번쨰_ 브라우저 함수 중 **DOMContentLoaded** 이벤트 콜백으로 시스템은 로드를 보장 후 관련된 기능을 실행할 수 있다.

하지만 **Async**의 경우 **완전 비동기**로 동작하기 때문에 먼저 **DOM**의 렌더가 완료되었다 해도 의존성이 있는 **Script**로드가 끝나지 않은 시점이기 떄문이다.

결과적으로 **Async** 스크립트의 경우 아래와 같은 경우에 효과적일 수 있다.

```bash
Async 스크립트는 DOM에 직접 접근하지 않거나, 다른 스크립트에 의존적이지 않은 스크립트들을 독립적으로 실행해야 할때 효과적이다.
```

#### Defer

---

**Defer** 스크립트 또한 **DOM**렌더와 병렬로 진행된다.

![image](https://user-images.githubusercontent.com/56063287/159012058-e647156d-417d-4a5c-a23d-602ba24c8af7.png)

**Async**와 다른점은 아래와 같다.

첫번쨰, **Script**로드가 완료된 후 **모든 DOM이 로드된 후 실행**된다는 점이다.

두번째, **defer** 스크립트는 **선언 시점의 순서를 보장한다**

```html
<!-- Async1.js 는 로드되는데 5초가 걸립니다 -->
<script src="Async1.js" defer></script>

<!-- Async2.js 는 로드되는데 1초가 걸립니다 -->
<script src="Async2.js" defer></script>
```

**defer** 스크립트의 경우 로드 시간은 상이할 수 있어도 모든 **DOM**의 렌더가 끝나는 시점에서부터 **Script**의 실행이 시작되고 선언한 순서대로 실행된다.

**DOMContentLoaded** 이벤트 콜백의 경우에도 **defer** 스크립트의 경우 로드된 **Script**들의 시점을 지연시키는 것이기 떄문에 **DOMContentLoaded** 이벤트가 발생하기 전에 이미 실행된 상태이다.

따라서, 기본적으로 **DOM**이 구성된 이후 모든 엘리먼트에 접근이 가능하고, 실행순서가 보장된다.

### 참고 사이트

---

1. [https://wormwlrm.github.io/2021/03/01/Async-Defer-Attributes-of-Script-Tag.html](https://wormwlrm.github.io/2021/03/01/Async-Defer-Attributes-of-Script-Tag.html)
2. [https://blog.asamaru.net/2017/05/04/script-async-defer/](https://blog.asamaru.net/2017/05/04/script-async-defer/)
