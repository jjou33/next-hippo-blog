---
date: "2022-06-18"
title: "클로저(Closure) (2)"
image: 'closure.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6', "closure", "Lexical Scoping"]
excerpt: Javascript 에 대한 전반적인 개념 및 학습 내용을 기록하는 포스트 입니다.
isFeatured: true
---

### 개요

---

**클로저(Closure)** 는 **Javascript** 에서 꾀나 기본적인 개념이다.

**Scope** 와도 많이 관련되어 있고 코드를 짜는데 있어서 변수의 **어휘적 범위(Lexical Scoping)** 를 잘 고려해야 실수 없는 소스를 짤 수 있을것 같다.

완벽하지는 않지만 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures#%EC%96%B4%ED%9C%98%EC%A0%81_%EB%B2%94%EC%9C%84_%EC%A7%80%EC%A0%95lexical_scoping) 을 참고하여 **클로저(Closure)** 에 대해 알아보고 기록을 해봐야 겠다는 생각이들어 포스팅을 남긴다.

### 클로저란 무엇일까?

---

**클로저**는 함수들과 함수들이 참조하는 환경(**렉시컬 스코프**)의 결합을 말한다.

---

**Javscript**에서는 **클로저**를 통해서 **내부함수**에서 **외부함수**의 **스코프**로 접근할 수 있다.

**Javscript**에서는 함수가 생성될때마다 **클로저**가 생성된다.

먼저 **클로저**를 사용하기 위해서는 특정 함수 내에 내부함수를 정의하고 외부에 반환하는 형태로 진행된다.

이렇게 되면 **외부 함수**가 반환된 이후에도, **내부 함수** 즉 반환된 함수에서 **외부함수**의 스코프로 접근 할 수 있는 것이다.

### 렉시컬 환경(Lexical Environment) 이란 무엇일까?

---

**클로저(Closure)** 는 함수와 함수가 선언된 **렉시컬 환경(Lexical environment)**의 조합이다.

이는 자바스크립트의 고유의 개념이 아닌 함수를 **일급 객체**로 취급하는 함수형 프로그래밍 언어에서 사용되는 중요한 특성이다.

**클로저(Closure)** 를 알기 전에 먼저 **렉시컬 환경(Lexical environment)** 에 대해서 먼저 알아본다.

### 클로저(Closure) 는 무엇일까?

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

위 코드를 분석해보자.

1. **func1** 함수를 정의하였고 내부에 **func2** 함수를 정의한 뒤 외부에서 반환하였다.
2. **returnFunc** 는 **func1** 즉, 외부함수를 실행하였고 결과적으로 **func1** 이 반환한 **func2** 함수를 할당 받을 것이다.
3. **returnFunc** 함수를 실행하게 되면 반환받은 **func2** 함수가 실행된다.

위 코드에서 **func2**의 함수는 외부 함수인 **func1**의 변수를 사용하고 있다.

이는 **함수**가 생성될때 생긴 두개의 함수간의 **렉시컬 환경**의 접근이 가능하기 때문이다.

**func1** 함수가 생성된다면 실행 컨텍스트가 생성되는 지점에서 이 함수에 대한 **렉시컬 환경**이 생성될 것이다.

그리고 **func2** 함수가 생성될때 또한, **렉시컬 환경**이 생성될 것이고, 이 환경에서 **상위 렉시컬 환경**을 찾아갈 수 있도록 **Environment Record** 생성 시 **outer Environment Reffer** 에 **func1** 의 **렉시컬 환경**을 찾아갈 수 있도록 주소를 포함하고 있을 것이다.

따라서, **func1**이 실행되면 **func2**를 반환하고 끝나는 것 같지만 실제 과정은 아래와 같이 진행된다.

1. **returnFunc** 에 **func1** 함수의 반환값 즉, **func2**가 할당되고 실행하게 되면 **func2**가 실행된다.
2. **func2**는 실행되면 **testVal**값을 찾기 위해 **func2**의 **렉시컬 환경**을 뒤지게 되지만, 해당 환경의 **Environment Record**에는 해당 변수가 없기 때문에 **스코프 체이닝**을 통해 **Outer Refference** 에 적힌 주소값을 참조하여 상위 스코프 **func1**의 스코프를 참조하게 된다.
3. 상위 스코프(func1)의 **Environment Record**를 확인하고, 그곳에서 **testVal**의 값이 존재하는 것을 확인하고 해당 값을 참조하여 **testVal**를 실행 시킨다.

이와 같은 과정을 우리는 **클로저**라 부른다.

### 클로저 사용예시

---

**클로저**의 사용 목적은 **객체 데이터 프라이버시**를 제공할 때 사용된다.

**데이터 프라이버시**는 **구현**보다는 **인터페이스**를 초점으로 프로그램을 만들때 필수적인 요소이다.

프로그램을 변경할때, 세부적인 구현사항이 인터페이스 사용시보다 좋지 않은 방식으로 변경될 가능성이 높아지기 떄문에, 이를 **예방**할 수 있는 **소프트웨어**를 만드는데 중요한 개념이다.

**Javscript**는 이러한 개념을 적용하기 위해 **클로저**란 **메커니즘**을 사용한다.

위 코드에서 확인하였듯이, **클로저**를 사용하게되면 **외부, 내부** 함수로 한정된다.

즉, 해당 변수를 가지고 있는 특정 **객체 메서드**를 활용하지 않는한 **데이터**에 접근할 수 없다.

### 사용예시 1

---

```js
function makeAdder(x) {
  var y = 1;
  return function innerFunc(z) {
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

**makeAdder**는 **클로저**를 통해 선언이 되있는 함수이다.

**add5, add10**은 각각의 **클로저**가 생성되고 이에따라 각각의 **렉시컬 환경**이 구성되어 있을 것이다.

**add5**는 인수**x**값이 5로 전달되었으며, **add10**은 10으로 전달되어 구성이 되어 있고 반환된 함수 **add5, 10** 의 인자의 값 **z**와 함께 실행이 되면 상위 **렉시컬 환경**에서 기억되는 **자유변수 x**값과 내부 변수 **y** 그리고 인자 **z**의 값의 합을 노출 시킨다.

### 사용예제 2(Private Method)

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

그리고 리턴되는 객체에 **increment, decrement, value** 등을 정의하여 각각의 함수는 **privateCounter, changeBy(메서드)**에 접근할 수 있지만, 외부에서 직접적으로는 접근할 수 없다.

또한, **makeCounter** 를 통해 여러개의 counter 를 만들어 각각의 고유한 클로저를 통해 노출되는 것을 볼 수 있다.

자세한 사항은 **[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures#%EC%96%B4%ED%9C%98%EC%A0%81_%EB%B2%94%EC%9C%84_%EC%A7%80%EC%A0%95lexical_scoping)** 을 통해 확인할 수 있다.

### 정리

---

**클로저**란 함수와 함수들이 참조하는 **렉시컬 환경**의 조합이다.

**렉시컬 환경**은 변수를 호출하였을때, 함수간의 **스코프**를 참조하여 어떤 변수를 참조할 건지 판단하는 환경구성 정보이다.

**클로저**는 반환된 **내부함수**에서 **외부함수**의 변수에 접근할 수 있으며, **클로저**가 생성되면 **함수**의 실행이 **종료**되고 나서도, 여전히 함수 내부 데이터에 접근하고 실행할 수 있도록 하는 **기술 매커니즘**이라고 볼 수 있다.

보통 **데이터 프라이버시**보호를 위한 목적으로 사용하여, 구현단계에서 목적에따라 정의된 메서드만 특정 데이터에 접근할 수 있도록 구현한다.

또한, **부분 애플리케이션(partial application)**구현 간 사용되는 편이다.

### 참고 사이트

---

- [https://blog.rhostem.com/posts/2017-04-20-curry-and-partial-application](https://blog.rhostem.com/posts/2017-04-20-curry-and-partial-application)
