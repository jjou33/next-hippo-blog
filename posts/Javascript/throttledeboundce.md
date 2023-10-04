---
date: "2022-05-11"
title: "쓰로틀링(throttling)과 디바운싱(debouncing)"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6', 'Throttling', 'debouncing']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 개요

---

이번 포스팅에서는 **JavaScript**에서 중요한 프로그래밍 기법중 하나인 **throttling 과 debouncing**에 대하여 개념 및 사용유형에 대해서 포스팅을 기록해본다.

**throttling 과 debouncing**은 하나의 프로그래밍 기법이므로 **개발자의 판단**하에 다양한 기능에 해당 기법으로 녹아들 수 있다.

이제 본인이 **이해한 정의**와 **예를 통해** 조금더 깊이 머리속에 기억해보자!

### throttling(쓰로틀링)

---

**throttling**의 정의는 아래와 같다.


>마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 기법


보통 **throttling**의 사용은 **성능**에 대한 이슈로 인해 사용한다.

가장 많이 예를 들고 있는 부분은 **스크롤 이벤트**이다.

우리가 스크롤을 올리거나 내릴 때 **scroll Event**가 굉장히 많이 발생한다.

만약 **JS**에서 **Listener**를 통해 **scroll Event**에 특정 **handler**를 실행하라고 코드를 작성하였고 이 **handler**는 굉장히 복잡한 로직을 가지고 있다고 하자.

그렇게되면 빠른 스크롤을 내리는 동안 굉장히 많은 호출이 발생할것이고 여러 문제점이 발생할 것이다.

이러한 경우 **throttling**을 걸어서 특정 시간에 특정 횟수만 실행하게 제한을 둘 수 있다.

위 소스 또한 크게 어렵지 않게 확인할 수 있다.

**setTimeout** 에 설정한 **200 밀리초**만큼의 시간 동안 최대 **한번만 발생**한다고 생각하면 된다.

예를들어, **무한 스크롤**의 경우에 **debounce**를 적용하면 아무리 내려가도 최대 한번만 발생하므로 **throttling**을 적용하는게 맞다.

현재 일하고 있는 회사에서도 **throttling**의 경우에는 **scroll Event**에서 사용하고 있다.

현재는 **lodash**에서 제공하는 **throttle** 함수를 이용하고 있다.

위 소스에서 **스크롤**을 통해 **쓰로틀링**을 걸고 안걸고에 대한 차이를 확인 할 수 있다.

### debouncing(디바운싱)

---

**debouncing**의 정의는 다음과 같다.


>연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것


보통의 예로는 **검색창**을 예로 들 수 있다.

검색창에 원하는 **키워드**를 입력하면서 자동으로 **연관검색어** 혹은 **최근 검색어**가 노출 되는 것을 본적이 있을 것이다.

이부분은 어떻게 구현될까? 라는 질문에 가볍게 이렇게 생각할 수 있다.

글자 쓸때마다 호출하여 관련 데이터를 다운트롭해주면 되는거 아닐까?

하지만, 실제 구현해보면 이것이 좋지 않은 방법이란걸 알 수 있다.

보통 **debouncing**의 경우 검색 키워드 **input**에 사용하기도 합니다.

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="main" style="height: 300vh;">
      <h2>Throttling & Debouncing</h2>
      <div style="display: flex; flex-direction: column; position: fixed;">
        <h3>아무 처리도 하지 않았을 때</h3>
        <div>
          <label>작성 검색 키워드 : </label>
          <input id="notDebounce" />
          <ul id="list"></ul>
        </div>
        <h3>디바운스 적용</h3>
        <div>
          <label>작성 검색 키워드 : </label>
          <input id="debounce" />
        </div>
      </div>
    </div>
  </body>
  <script>
    document
      .querySelector("#notDebounce")
      .addEventListener("input", function (e) {
        console.log(e.target.value);
      });

    let timer;
    document.querySelector("#debounce").addEventListener("input", function (e) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        console.log("Ajax", e.target.value);
      }, 200);
    });
  </script>
</html>
```

위 소스를 보면 소스자체는 크게 어렵지 않다.

특정 **input Tag**에 **리스너**를 걸고 **콜백**으로 작동 함수를 넣어준다.

함수 로직은 만약 이전에 **timer**가 존재하면 실행되기 전에 **clear**를 해주고 만약 **200밀리초** 만큼의 시간이 경과될 경우에는 이벤트 루프를 통해 실행이 되게끔 진행하는 것이다.

이러한 방식은 하나의 프로그래밍 기법이기 때문에 검색 키워드 외에도 이와 비슷한 로직이 필요한 경우에 사용이 가능하다.

예로, 현 회사에서는 장바구니의 수량변경에도 이를 적용하여 구현되어 있다.

**수량변경 버튼 이벤트**를 통한 증감이 아닌 **실제 원하는 수량을 입력**하는 경우에는 **debouncing**를 적용하여 고객이 입력을 완료하였을 경우 **마지막 한번 호출**하게 된다.

물론 앞서 설명한 **throttle**과 마찬가지로 **lodash**에 내장되어 있는 **debounce 함수**를 사용하고 있기 때문에 편하게 사용할 수 있다.

### 참고 사이트

---

- [https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa](https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa)
- [https://velog.io/@yujuck/Javascript-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4%EC%99%80-%EC%93%B0%EB%A1%9C%ED%8B%80%EB%A7%81](https://velog.io/@yujuck/Javascript-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4%EC%99%80-%EC%93%B0%EB%A1%9C%ED%8B%80%EB%A7%81)
- [https://webclub.tistory.com/607](https://webclub.tistory.com/607)
