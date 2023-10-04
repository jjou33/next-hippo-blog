---
date: "2022-03-19"
title: "[Event] 이벤트 버블링(Event Bubbling)"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6', 'Event Bubbling']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 개요

---

**Javascript**를 공부하면서 굉장히 많이 보이는게 **Event**관련 기능들이다.

이번에는 **Event**의 전달 과정의 첫번째로 **이벤트 버블링**을 기록해보고자 한다.

대충은 알고 있지만 모든 정리를 하면 더욱 내것이 되는 기분이라 좀 더 자세히 다뤄봐야 겠다.

### 이벤트 버블링(Event Bubbling)이란?

---

이벤트 버블링이란 무엇일까?


>이벤트 버블리은 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 즉, 트리로 구성되어 있는 HTML 요소 중 구조상으로 상위에 있는 요소들로 전달되어 가는 특성을 의미한다.


간단히 예를 보자면 아래와 같은 코드가 있다고 가정한다.

```html
<body>
  <div class="one">
    <div class="two">
      <div class="three">Div Three</div>
    </div>
  </div>
</body>
```

이에 이벤트 버블링은 아래와 같이 전달된다.

![image](https://user-images.githubusercontent.com/56063287/159124999-e24ace96-5dbf-4c00-92e3-baadcc7f674b.png)

이제 버블링이 어떻게 진행되는지 **Javascript**로직을 통해 확인해본다.

```js
var divs = document.querySelectorAll("div");

divs.forEach((div) => div.addEventListener("click", logEvent));

function logEvent(event) {
  console.log(event.currentTarget.className);
}
```

첫번째로 우리는 **querySelectorAll**을 통해 **div**태그의 **Elements**를 모두 **divs**변수에 할당하였다.

그리고 순회하면서 각 **div** 태그에 **click** 이벤트를 걸고 **logEvent()** 함수가 실행되게 끔 하였다.

여기서 우리가 3번째 **div** 태그를 클릭하면 어떻게 로그가 출력이 될까?

각 **div**에 이벤트 리스터를 통해 클릭 이벤트를 감지하도록 하였기 때문에 **three**만 출력되지 않을까?
처음엔 이렇게 생각했지만 결과는 아래와 같다.

![image](https://user-images.githubusercontent.com/56063287/159125295-2cafce9b-80b7-4404-8659-3f1a76192351.png)

**three** 부터 **two, one** 차례로 전파가 되는것을 볼 수 있다.

진행 순서는 아래와 같다.

1. **3번째(class="three")** div 를 클릭하면 **Click 이벤트 헨들러**가 동작한다.
2. 동작 후 상단의 **2번째 div**에 할당된 **이벤트 헨들러**가 동작한다.
3. 후 **1번째 div**에 할당된 **이벤트 핸들러** 동작
4. **document** 객체를 만날 때까지, 각 요소에 할당된 **이벤트 핸들러**가 동작한다.

이렇게 동작하는 이유는 **브라우저가 이벤트를 감지하는 방식** 때문이다.

결과적으로 정리하면 위와 같은 동작을 아래와 같이 정리할 수 있다.


>브라우저는 특정 화면 요소에서 이벤트가 발생했을 때 그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파 시킨다.
이런 흐름을 이벤트 버블링이라고 부른다.  
이벤트가 제일 깊은 곳에 있는 요소에서 시작해 부모 요소를 거슬러 올라가며
발생하는 모양이 마치 물속 거품(bubble)과 닮았기 때문이다.


참고로 위 **이벤트 버블링**은 **모든 이벤트가 버블링 된다**는 아니다.
**focus** 같은 이벤트는 버블링 되지 않고 몇몇 버블리이 되지 않는 이벤트도 존재한다.

### 참고 사이트

---

1. [https://wormwlrm.github.io/2021/03/01/Async-Defer-Attributes-of-Script-Tag.html](https://wormwlrm.github.io/2021/03/01/Async-Defer-Attributes-of-Script-Tag.html)
2. [https://blog.asamaru.net/2017/05/04/script-async-defer/](https://blog.asamaru.net/2017/05/04/script-async-defer/)
