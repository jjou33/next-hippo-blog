---
date: "2022-03-10"
title: "[Javascript] ExecuteContext(실행 컨텍스트) 원리"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6', 'Execute Context']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### 개요

---

좋은 기회로 **실행컨텍스트(Execution Context)** 에 대한 궁금증을 갖게 되었다.

중요한 부분은 이 **실행 컨텍스트**가 **Javascript** 에서 굉장히 중요한 역할을 하고 있다는 것이고 아직까지 깊게 공부를 해본적이 없어 이번 기회에 정확히 짚어가고 싶어서 기록을 시작해본다.

여러 기술블로그들을 보며 나름대로 정리해 보았다.

### 실행 컨텍스트란 무엇일까?

---

실행 컨텍스트는 아래와 같은 개념을 가지고 있다.


>실행 컨텍스트의 정의
실행 컨텍스트란 자바스크립트 코드가 실행되고 연산되는 범위를 나타내는 추상적인 개념이다.
코드가 실행된다면 실행 컨텍스트 내부에서 실행되고 있는 것이다.



즉, **실행 컨텍스트**란 **실행할 코드에 제공할 환경 정보들을 모아놓은 객체**로서, 동일한 스코프에 있는 코드들을 실행할 때 필요한 환경 정보를 모아 컨텍스트를 구성하고, 이를 **Call Stack**에 쌓아서 실행 순서를 보장한다로 **코어 자바스크립트**책에서는 정의하고 있다.

실행 컨텍스트와 실행 스택(Execution Stack) 개념은 자바스크립트에서 **호이스팅, 클로져, 스코프**와 같은 개념을 이해하는데 깊게 연관이 되는 중요한 내용이므로 정리를 해본다.

### 실행 컨텍스트(Execution Context) 구성

---

여러가지 **Javascript**에서 발생하는 현상들과 **실행 컨텍스트**는 많은 관련이 있기 때문에 관련되서도 조금 더 공부가 필요할 것 같다.

**실행 컨텍스트**는 아래와 같은 경우에 **Call Stack**에 쌓이고 실행되게 된다.

- 전역 컨텍스트(Global Execution Context)
  - **전역공간**은 자동으로 컨텍스트로 구성된다. 여기서 변수 객체를 생성하는 대신 **this**를 **전역 객체(Global Object)** 로 활용한다.
- 함수 컨텍스트(Functional Execution Context)
  - **함수**를 실행할 경우 **실행 컨텍스트**가 생성되고, 함수가 동작을 다하면 **Call Stack**에서 삭제된다.
- **eval()** 함수를 실행할 경우(Eval Function Execution Context)

실행컨텍스트 요소는 다음과 같이 구성된다.

#### Execution Stack(호출 스택)과 함수 실행 순서
---

**Execution Stack**과 **Call Stack**은 의미상 동일하다.

스택은 **LIFO(Last in, First Out)** 자료구조로 실행하며 실행 컨텍스트들이 저장되는 구조이다.

자바스크립트 엔진이 **<script></script> Tag** 를 만나게 되면 **전역 컨텍스트(Global Context)** 를 만들고 실행되고 있는 호출 스택에 이를 **push** 한다.

그리고 해당 **script** 코드를 읽어 내려가며 스택에 쌓게 된다.

그리고 자바스크립트 엔진은 **Call Stack** 가장 위에 있는 함수를 실행하고 끝나면 **pop**하여 제거한다.

아래에서 예시를 통해 자세히 알아보자.

### 실행 컨텍스트의 Call Stack 순서와 기능
---

```js
var a = 1; // 전역 컨텍스트
function outer() {
  // outer 컨텍스트
  function inner() {
    // inner 컨텍스트
    console.log(a); // undefined
    var a = 3;
    console.log(a); // 3
  }
  inner();
  console.log(a); // 1
}
outer();
console.log(a); // 1
```

위와 같은 소스가 실행되게 되면 어떤 순서로 **Call Stack**이 쌓이는지 알아본다.

- Javascript 실행: **[전역컨텍스트]**
- outer 실행 : **[전역컨텍스트, outer]**
- inner 실행 : **[전역컨텍스트, outer, inner]**
- inner 종료 : **[전역컨텍스트, outer]**
- outer 종료 : **[전역컨텍스트]**

![image](https://user-images.githubusercontent.com/56063287/157466130-18ea5664-1c0d-40e4-a86d-950dea34f04a.png)

- 이미지 참조 : [https://velog.io/@vlfflq2004/%EC%8B%A4%ED%96%89%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-Execution-Context](https://velog.io/@vlfflq2004/%EC%8B%A4%ED%96%89%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-Execution-Context)

**javascript**파일이 최초 실행 시점에 **전역 컨텍스트**가 활성화되고 **Call Stack**에 쌓이게 된다.

이후 **outer** 함수가 실행되면 **자바스크립트 엔진**은 **outer**에 대한 **환경 정보**를 수집해서 **outer** 실행 컨텍스트를 생성 후 **Call Stack**에 쌓는다.

이후 **outer** 함수 내부의 **inner** 함수의 실행과 동시에 **inner**실행 컨텍스트가 생성되어 스택에 쌓이게 되면 **outer** 컨텍스트는 중단하고 **inner** 함수 내부 코드를 실행한다.

**inner** 함수의 실행이 종료되면 **Call Stack**에서 해당 컨텍스트가 제거되고 **outer** 함수가 이어서 진행된다.

### 실행 컨텍스트의 구성과 설명

---

자바스크립트엔진이 실행 컨텍스트를 만드는 과정에는 두가지 단계로 진행된다.

1. Creation Phase
2. Execution Phase

#### Creation Phase

---

**Creation Phase** 단계에서는 중요한 환경정보를 구성한다.

1. Lexical Environment
2. Variable Environment

**Variable Environment**는 **Lexical Environment**와 비슷하거나 혹은 동일하다고 보면되나 몇가지의 차이점이 있기 때문에 분리하여 설명한다. 하지만, 대부분이 비슷하다고 생각하면 될 것 같다.

#### Lexical Environment

---

**Lexical Environment**는 **Javascript Engine**이 현재 읽고 있는 코드의 **Scope** 혹은 **Environment**를 말한다. 또한 **identifier-variable mapping**이 이루어지는 곳이다.

참조 대상 식별자인 **identifier**는 함수와 변수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름이다.

따라서, **Lexical Environment**에서는 변수와 그 값이 매핑되는 곳이라고 이해하자.
**Variable Environment**와는 다르게 **let,const** 변수가 매핑되는점과 매핑은 되지만 초기값이 할당되지 않는다는 점이 중요하다.

예를 들어 아래와 같은 코드가 있다고 하자

```js
var a = 20;
var b = 40;

function foo() {
  console.log("bar");
}
```

위 코드에 대한 **Lexical Environment**는 아래와 같다.

```js
lexicalEnvironment = {
  a : 20,
  b : 40,
  foo : <ref. to foo function>
}
```

### Lexical Environment 의 구성요소

---

**Lexical Environment**는 **environment record** 와 **outer environment reference** 그리고 **ThisBinding** 의 세가지 프로퍼티를 가지고 있다.

#### _Environment Records_

**Lexical Environment** 안에 함수와 변수를 기록한다.

또한 **Environment Records**는 두가지 저장 레코드를 가진다.

- **Declarative environment record** -- 변수와 함수 선언을 저장하는 곳이다.
- **Object environment record** -- 전역 코드에 대한 **lexical environment**는 **objective environment records** 를 포함한다. 변수와 함수의 선언과 다르게 **object environment record**는 글로벌 오브젝트도 기록한다. 각각의 객체의 속성을 바인딩하기 위해서 record에 새로운 엔트리가 형성된다.

#### _outer environment reference_

상위 **Lexical Environment**를 참조하는 포인터로 생각하면된다.
중첩된 자바스크립트 코드에서 스코프를 탐색하기 위해 사용한다.

즉, 자바스크립트 엔진이 현재의 **Lexical Environment**에서 변수를 찾지 못한다면 **외부 환경을 참조하여 해당 변수를 찾는다**라 이해하면 될 것이다.

예를 통해 이해해보자.

```js
// global
const globalA = "globalA";

function foo() {
  const fooA = "fooA";

  function bar() {
    const barA = "barA";

    console.log(globalA); // globalA
    console.log(fooA); // fooA
    console.log(barA); // barA
    console.log(unknownA); // Reference Error
  }

  bar();
}

foo();
```

위 코드를 실행할때 생성되는 환경은 아래와 같다.

```js
GlobalEnvironment = {
  // Global Environment Record에는
  // Object Environment Record와 Declarative Environment Record 생략
  environmentRecord: {
    globalA: 'globalA'
  },
  outer: null
	ThisBinding: <Global Object>
};

fooEnvironment = {
  environmentRecord: {
    fooA: 'fooA'
  },
  outer: globalEnvironment // foo는 Global에서 생성됐다.
	ThisBinding: <Global Object>
}

barEnvironment = {
  environmentRecord: {
    barA: 'barA'
  },
  outer: fooEnvironment // bar는 foo 안에서 생성됐다.
	ThisBinding: <Global Object>
}
```

먼저 각각의 전역 컨텍스트와 함수 컨텍스트가 구성된다.

1. **bar()** 함수에서 **console**을 통해 **fooA** 값을 찾지만 **barEnvironment**의 **environment Records**에는 해당 변수가 없다.
2. **barEnvironment**의 **outer**인 **fooEnvironment**를 참조하기 때문에 상위 식별자인 **fooEnvironment**로 올라가 **fooA**값을 찾는다.

만약 **unknownA**를 호출하였을 경우는 어떻게될까?

1. **bar()** 함수에서 **unknownA**를 찾을 수 없어 **fooEnvironment**를 참조한다.
2. **fooEnvironment**에서 찾지 못하여 **outer**인 **globalEnvironment**식별자로 올라가 해당 값을 확인한다.
3. **globalEnvironment**의 **environment Records**에서도 해당값이 없고, **outer**또한 **null** 이기 떄문에 이는 더이상 찾지 못하고 **Refereence Error**를 발생 시킨다.

#### _ThisBinding_

**this**의 값이 여기서 결정된다.

글로벌 실행 컨텍스트에서 **this**는 **global object** 이다.

함수 실행 컨텍스트에서는 **this** 값은 어떻게 함수가 호출되었는지에 따라 달라진다.

만약 함수가 **object reference**로 호출되었다면 **this**는 해당 객체를 가리키게 된다.
그렇지 않으면 **this**는 글로벌 객체(window)를 가리키거나 **strict mode**에서는 **undefined**를 가리키고 있다.

예를 들어 이해해보자.

this와 함수 호출

```js
const person = {
  name: "peter",
  birthYear: 1994,
  calcAge: function () {
    console.log(2018 - this.birthYear);
  },
};
person.calcAge();
const calcuateAge = person.calcAge;
calculateAge();
```

**person.clacAge()** **calcAge**는 **person object reference**로 호출되었기 때문에 여기서 **this**는 **person**을 가리키게 된다.

**calculateAge()** 여기서는 주어진 객체 참조값이 없기 때문에 **this**는 글로벌 **window** 객체를 가리키게 된다.

#### Variable Environment

---

**LexicalEnvironment**와 구성요소의 대부분이 동일하다고 생각할 수 있다.

- **var**로 선언된 변수가 메모리에 매핑되며 초기값으로 **undefined**가 할당된다.
- 선언형 함수가 메모리에 매핑되며 함수 전체가 메모리에 할당된다.

단지 **ES6**부터 **LexicalEnvironment**와 **VariableEnvironment** 둘의 차이점은 아래와 같다.

- **LexicalEnvironment** : 함수선언과 변수(let, const)를 저장, TDZ 영향
- **VariableEnvironment** : 변수(var) 저장

의 차이점이 있다고 기억하면 될 것 같다.

결국 **Creation Phase**에서는 아래와 같이 일들이 일어난다고 생각하면 된다.

- Scope Chain, 변수, 함수, 인자들을 만든다.
- this 를 결정한다.
- 자바스크립트 엔진의 Syntax Parser가 코드를 읽으면서 컴퓨터가 알아들을 수 있는 언어로 변환된다.
- 자바스크립트 엔진은 코드를 읽으면서 변수와 함수의 선언된 것을 찾고 메모리에 해당 변수와 함수를 저장한다. (호이스팅)

### _호이스팅(hoisting)_

위 내용을 읽다보면 알겠지만 우리가 흔히 **위로 끌어올린다**라고 이해하고 있던 **호이스팅(hoisting)** 이 발생하는 이유에 대해서 알 수 있다.

이는 코드의 실행 환경 정보를 구축하는 **Creation Phase** 단계에서 발생하며, 실질적으로는 끌어올리는것이 아닌 **Creation Phase**단계에서 변수 식별자가 **Memory**에 우선적으로 매핑되는 특징으로 발생하는 현상이란 것을 알 수 있다.

**Lexical Environment**에서 매핑되는 **let,const**의 경우에는 위에서 설명했듯이 **Creation Phase** 단계에서 메모리에 매핑이 되긴 하지만 **값이 할당되지는 않는다.**

**Execution Phase**에서 자바스크립트 엔진이 소스 코드중 **let**변수의 값이 선언된 곳을 찾지 못하면 **undefined**를 할당한다.

하지만 **var**의 경우 **Variable Environmnet**에서 메모리에 매핑 후 **undefined**로 할당하기 때문에 **오류**가 발생하지 않고 **undefined** 값이 출력된다.

하지만 결과적으로 **let, const**또한 호이스팅 현상이 발생한다.
TDZ(Temporal Dead Zone)에 의해 **ReferenceError**가 발생하여 우리는 실제로 호이스팅 현상이 발생하지 않는것처럼 생각할 수도 있다.

**TODO TDZ에 대한 포스팅은 따로 정리를 해야하겠다.**

#### Execution Phase

---

**Execution** 단계에서부터는 코드를 위에서부터 읽으며 실행하는 단계이다.

변수 값이 할당되는 코드가 실행될 경우 위에서 설명했듯이 **Environment Record**에 저장되어 있던 식별자의 메모리에 값을 **수정** 또는 **할당** 한다.

실행단계에서 이루어지는 과정을 상세하게 설명해논 블로그 포스팅이 있어 해당 이미지를 참조하여 작성해 보겠다.

참조 : [https://dkje.github.io/2020/08/30/ExecutionContext/](https://dkje.github.io/2020/08/30/ExecutionContext/)

#### _코드_

```js
console.log(globalValue);
var globalValue = "nowVisible";

function sayHiOneTime() {
  var isMorning = true;
  let hi = "Good morning!";
  while (isMorning) {
    var name = "Jack";
    let question = "How are you?";
    console.log(**${name} ${hi} ${question}**);
    isMorning = false;
  }
}
sayHiOneTime();
```

위 코드에 대한 **Creation Phase**가 끝나고 **Execution Phase**가 실행되는 과정을 아래와 같다.

#### _동작과정_

![image](https://user-images.githubusercontent.com/56063287/158087936-c9f12171-843c-4c73-9987-0fc8e40cfe89.png)

![image](https://user-images.githubusercontent.com/56063287/158087949-5522714c-f35f-4c89-bc26-df9f754ea682.png)

![image](https://user-images.githubusercontent.com/56063287/158087958-edccf52c-fa13-40e9-8a63-bdb48273995b.png)

![image](https://user-images.githubusercontent.com/56063287/158087965-3083cffc-d1bf-4b66-baef-eb5f486250ad.png)

![image](https://user-images.githubusercontent.com/56063287/158087971-a9f33f5a-3874-487f-8286-fab097b83953.png)

![image](https://user-images.githubusercontent.com/56063287/158087979-2e1d0acc-3980-4c4a-81d3-63e7519458a2.png)

![image](https://user-images.githubusercontent.com/56063287/158087990-d099f4e2-5ceb-463b-b554-fe0ac6107fa4.png)

![image](https://user-images.githubusercontent.com/56063287/158087999-b5114afd-c1c6-45c6-a462-64af5b36555d.png)

### 참고 사이트

---

1. [https://blog.leehov.in/28](https://blog.leehov.in/28)
2. [https://junilhwang.github.io/TIL/Javascript/Domain/Execution-Context/#\_3-environmentrecord%E1%84%8B%E1%85%AA-hoisting-%E1%84%92%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%B5%E1%86%BC](https://junilhwang.github.io/TIL/Javascript/Domain/Execution-Context/#_3-environmentrecord%E1%84%8B%E1%85%AA-hoisting-%E1%84%92%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%B5%E1%86%BC)
3. [https://velog.io/@vlfflq2004/%EC%8B%A4%ED%96%89%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-Execution-Context](https://velog.io/@vlfflq2004/%EC%8B%A4%ED%96%89%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-Execution-Context)
4. [https://muscardinus.tistory.com/190](https://muscardinus.tistory.com/190)
5. [https://velog.io/@hoo00nn/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%ED%96%89-%ED%99%98%EA%B2%BDExecution-Context](https://velog.io/@hoo00nn/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%ED%96%89-%ED%99%98%EA%B2%BDExecution-Context)
6. [https://velog.io/@imacoolgirlyo/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-Hoisting-The-Execution-Context-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-6bjsmmlmgy](https://velog.io/@imacoolgirlyo/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-Hoisting-The-Execution-Context-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-6bjsmmlmgy)
