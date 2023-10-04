---
date: "2022-06-07"
title: "클로저(Closure) (1)"
image: 'closure.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6']
excerpt: Javascript 에 대한 전반적인 개념 및 학습 내용을 기록하는 포스트 입니다.
isFeatured: true
---

### 1. 개요

---

**클로저(Closure)** 는 **Javascript** 에서 꾀나 기본적인 개념이다.

**Scope** 와도 많이 관련되어 있고 코드를 짜는데 있어서 변수의 **어휘적 범위(Lexical Scoping)** 를 잘 고려해야 실수 없는 소스를 짤 수 있을것 같다.

완벽하지는 않지만 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures#%EC%96%B4%ED%9C%98%EC%A0%81_%EB%B2%94%EC%9C%84_%EC%A7%80%EC%A0%95lexical_scoping) 을 참고하여 **클로저(Closure)** 에 대해 알아보고 기록을 해봐야 겠다는 생각이들어 포스팅을 남긴다.

### 2. 어휘적 범위(Lexical Scoping) 이란 무엇일까?

---

**클로저(Closure)** 는 함수와 함수가 선언된 **어휘적 환경(Lexical environment)**의 조합이다.

이는 자바스크립트의 고유의 개념이 아닌 함수를 **일급 객체**로 취급하는 함수형 프로그래밍 언어에서 사용되는 중요한 특성이다.

**클로저(Closure)** 를 알기 전에 먼저 **어휘적 범위(Lexical Scoping)** 에 대해서 먼저 알아본다.

```js
function func1() {
  var testVal = "hello";
  function func2() {
    console.log(testVal); // hello
  }
  func2();
}

func1();
```

위 소스에서 console 은 **hello** 를 출력한다.

**func2** 는 부모 함수 **func1** 의 내부함수 이기 때문에 자신의 내무 변수가 없음에도 부모함수의 에서 선언된 변수인 **testVal** 에 접근할 수 있다는 것이다.

이 소스에서 우리가 이해해야 할 부분은 **어휘적 범위 지정(Lexical Scoping)** 과정에서 우리가 사용하는 변수가 어디까지 사용가능하며 어디에 선언되어 있는지를 고려한다는 것이다.

**Lexical** 이란 의미도 이러한 것을 의미한다.

즉, 중첩된 함수는 외부 범위에서 선언된 변수를 자식 함수에서 접근할 수 있다는 것이다.

### 3. 클로저(Closure) 는 무엇일까?

---

이제는 그럼 클로저는 무엇인지 MDN 의 예제를 참고하여 알아본다.

```js
function func1() {
  var testVal = "hello";
  function func2() {
    console.log(testVal);
  }
  return func2;
}

var returnFunc = func1();

returnFunc(); // hello 출력
```

위 소스는 동일하게 **hello** 를 출력하게 되는데 우리가 주의깊게 봐야할 부분이 있다.

**returnFunc** 변수에 **func1** 함수의 리턴함수인 **func2** 가 저장되고 실행한 것이다.

보통의 우리의 생각은 함수 내부의 지역변수들은 그 함수가 처리되는 동안에 존재한다고 생각하였고, **func1** 의 실행이 끝나면 **testVal** 변수에는 더이상 접근할 수 없다고 생각하였다.

그러나 자바스크립트에서는 **func1** 에서 함수를 리턴하고 리턴하는 함수가 **클로저(Closure)** 를 형성하기 때문에 **returnFunc** 를 통해서 계속해서 **testVal** 변수에 접근할 수 있다.

위 예시로 보면 **returnFunc** 는 **func1** 이 실행될때 리턴된 **func2** 함수의 인스턴스를 참소하고 있는 변수가 된다.

이때 **func2** 는 **testVal** 이라는 변수의 **어휘적 환경(Lexical Environment)**에 대한 참조를 유지한다.

따라서, 우리는 **returnFunc** 함수를 실행할 때 func2 에서 유지하고 있는 **testVal** 의 값을 사용할 수 있는 것이다.

MDN 의 다른 예제도 이해하기 쉽게 설명하고 있다.

```js
function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
```

구조는 첫번째 예제와 비슷하지만 여기서 이해해야 하는 부분은 **add5, add10** 이란 두개의 클로저가 각기 다른 **어휘적 환경(Lexical Environment)** 를 가지고 있다는 점이다.

**add5** 의 클로저 내부의 **x** 는 5로 저장된 반면, **add10** 내부의 **x** 는 10인걸 알 수 있다.

또한, 두개의 클로저는 **z** 인자로 갖는 함수를 리턴된 함수이며 함수 내부 스코프에는 y 가 선언되어 있지 않은것을 볼 수 있다.

그러나 결과로 보면 **y** 값을 100으로 재할당하여 계산값을 리턴하는것을 볼 수 있다.

이부분에서 **클로저가 리턴된 후에도 외부함수의 변수들에 접근 가능하다는 것을 보여주는 포인트**로 이 글에서는 설명하고 있다.

### 클로저를 이용한 프라이빗 메소드 연습

---

**MDN** 에 나와있는 프라이핏 메소드를 클로저를 활용하여 구현하는 연습을 통해 조금 더 클로저를 이해하는데 도움이 된 것 같다.

```js
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* 2 */
counter1.decrement();
alert(counter1.value()); /* 1 */
alert(counter2.value()); /* 0 */
```

위 예저에서 보면 counter 변수에 익명함수 안에서 **privateCounter, changeBy(메서드)** 두개의 공유되는 어휘적 환경(Lexical Evnironment) 가 형성되는 것을 볼 수 있다.

그리고 리턴되는 객체에 **increment, decrement, value** 등을 정의하여 각각의 함수는 **privateCounter, changeBy(메서드)** 에 접근할 수 있지만, 외부에서 직접적으로는 접근할 수 없다.

또한, **makeCounter** 를 통해 여러개의 counter 를 만들어 각각의 고유한 클로저를 통해 노출되는 것을 볼 수 있다.

자세한 사항은 **[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures#%EC%96%B4%ED%9C%98%EC%A0%81_%EB%B2%94%EC%9C%84_%EC%A7%80%EC%A0%95lexical_scoping)** 을 통해 확인할 수 있다.

### 참고 사이트

---

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
