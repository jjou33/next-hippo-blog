---
date: "2022-03-20"
title: "[Event] 이벤트 캡처링(Event Capture)"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6', 'Event Capture']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---


### 개요

---

**Javascript**를 공부하면서 굉장히 많이 보이는게 **Event**관련 기능들이다.

이번에는 앞선 이벤트 버블링에 이어 **Event**의 전달 과정의 두번째로 **이벤트 캡쳐**을 기록해보고자 한다.

### 이벤트 캡쳐란?

---

**이벤트 캡처링**이란 **이벤트 버블링**과는 반대로 동작한다고 이해하면 된다.

**DOM**의 최상단 즉, **window** 로부터 이벤트가 발생한 요소까지 이벤트를 전파한다.

아래 이해하기 쉬운 사진을 참고해보자.

![image](https://user-images.githubusercontent.com/56063287/159166689-1cbc3635-8fd1-40d2-a602-dc34bd877528.png)

브라우저에서 제공하는 이벤트 리스너 메소드(addEventListener) 함수는 아래와 같은 파라미터 값을 받는다.

```js
target.addEventListener(type, listener[, useCapture]);
```

**useCapture** 파라미터는 **boolean** 값으로 지정해주면 되고 **default** 로 **false** 가 들어간다.

따라서, 캡처를 위해서 **true** 로 설정을 해주면 된다.

```js
var divs = document.querySelectorAll("div");

divs.forEach((div) => div.addEventListener("click", logEvent,{
  capture: true;
}));

function logEvent(event) {
  console.log(event.currentTarget.className);
}
```

이벤트 버블링이랑 동일한 예제로 진행해보면 결과는 반대로 나오는 것을 확인할 수 있다.

```html
<body>
  <div class="one">
    <div class="two">
      <div class="three">Div Three</div>
    </div>
  </div>
</body>
```

![image](https://user-images.githubusercontent.com/56063287/159166849-e16ef1dd-cf12-4106-95f7-f66e4661b2e3.png)

### stopPropagation

---

버블링, 캡처링과 같은 이벤트 전파를 막기 위한 방법은 없을까?

방법은 **stopPropagation()** 메서드를 사용하는 것이다.

특정 태그 단계에서 이벤트 요소에 **stopPropagation** 함수를 실행하면 캡처링을 막을 수 있다.

하지만, 이와 관련해서는 권장하지 않는 몇몇가지의 이유가 있으니 코드를 고려해서 사용해야 한다.
참고 사이트 : [https://ko.javascript.info/bubbling-and-capturing](https://ko.javascript.info/bubbling-and-capturing)

### 참고 사이트

---

1. [https://wormwlrm.github.io/2021/03/01/Async-Defer-Attributes-of-Script-Tag.html](https://wormwlrm.github.io/2021/03/01/Async-Defer-Attributes-of-Script-Tag.html)
2. [https://blog.asamaru.net/2017/05/04/script-async-defer/](https://blog.asamaru.net/2017/05/04/script-async-defer/)
3. [https://mygumi.tistory.com/315](https://mygumi.tistory.com/315)
