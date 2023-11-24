---
date: "2022-06-13"
title: "var, let ,const 의 차이"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6', 'let', 'const', 'var']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

![image](https://user-images.githubusercontent.com/56063287/173000027-1faf3982-ec7a-4bc2-93b0-57b718566a0a.png)

### 개요

---

이번에는 **Javascript** 의 타입 **var**, **let**, **const** 에 대하여 포스팅을 진행한다.

중간중간 **Scope**에 대한 기술도 들어갈 예정이다.

### 함수레벨 스코프와 블록레벨 스코프

---

**스코프(Scope)** 는 식별자의 유효범위를 뜻하며, 선언된 위치에 따라 유효 범위가 달라진다.

전역변수는 어디에서든지 **스코프 체이닝**을 통해 참조가 가능하다.

위 내용은 **실행컨텍스트** 생성과정에서 자세히 확인할 수 있다.

**Javscript**에서 **if, for, while ,try/catch**등이 **지역 스코프**를 만들며, 이러한 특성을 **블록 레벨 스코프**라 한다.

하지만, **var**로 선언된 변수의 경우 오직 함수의 코드블록 만을 지역 스코프로 인정한다.

이를 **함수 레벨 스코프**라 한다.

### var, let, const 의 차이점

---

이제는 **var, let, const** 간 **Scope**의 차이에 대해서 확인해보자.

#### 3-var

---

위 설명에서 이미 **var**의 경우 **함수레벨 스코프**를 가지기 떄문에 **함수**의 **Block**만을 지역 스코프로 인정한다고 했다.

따라서, **var**로 선언된 변수가 **블록 스코프** 안에 있다면 지역변수가 아닌 전역변수와 같은 스코프를 가진다.

아래의 예를 한번보자.

```js
const array = [];

for (var i = 0; i < 10; i++) {
  array.push(function () {
    console.log(i);
  });
}

array[0](); // 10
array[1](); // 10
array[2](); // 10
array[3](); // 10
array[4](); // 10

console.log("i : ", i); // i :  10

function test() {
  var a = 1;
}

console.log("a : ", a); // Uncaught ReferenceError: a is not defined
```

**Javascript** 에서 **var**는 **함수 스코프**에서만 지역변수를 가진다고 하였다.

위 소스에서 보면 **i** 값은 **var**로 선언되었고, **for** 반복문에서는 **var**는 전역변수와 같은 스코프를 가진다.

따라서, **for**문이 다돌고 호출하게되면 **i** 를 호출 할 수 있고 결과는 **10**이 나오게 된다.

반면, **test**함수의 내부 변수인 **a**의 경우 **함수 스코프**에서는 **지역 스코프**를 가지기 떄문에 함수 밖에서는 사용할 수 없는것을 확인할 수 있다.

#### let,const

---

반면 **let,const** 는 **블록 레벨 스코프**를 가지기 때문에 블록 내에서는 **지역 스코프**를 가진다.

```js
const array = [];

for (let i = 0; i < 10; i++) {
  array.push(function () {
    console.log(i);
  });
}

array[0](); // 1
array[1](); // 2
array[2](); // 3
array[3](); // 4
array[4](); // 5

//console.log("i : " ,i) // Uncaught ReferenceError: i is not defined

function test() {
  let a = 1;
}

console.log("a : ", a); // Uncaught ReferenceError: a is not defined
```

위 코드를 보면 **var**와는 사뭇 다른 결과값이 나온다.

우선 **for**문이 돌면서 생성된 **렉시컬 환경**의 변수인 **i**값을 **for**문이 끝나고도 **array**에 담긴 **function** 이 **상위 스코프**의 변수 **i**를 참조할 수 있다.

따라서 이는 정상적으로 값이 노출될 수 있는 것이다.

#### 선언 및 초기화의 차이

---

**Javscript** 는 코드를 실행할때 **실행 컨텍스트**라는 환경정보를 구성하며 실행된다.

자세한 정보는 [실행 컨텍스트](https://jjou33.github.io/executioncontext/%EC%8B%A4%ED%96%89%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8/) 포스팅을 참조하면 된다.

이러한 과정에서 **var, let ,const** 간의 차이가 발생하게 된다.

첫번째로, **var**의 경우에는 **Creation Phase**에서 선언될 떄 **Environment Record**에 **선언**과 동시에 **undefined**로 값을 초기화 한다.

이는 우리가 알고있는 **호이스팅** 이 일어나는 원인이 된다.

반면, **let**의 경우 **렉시컬 환경**을 구성할 때 **Creation Phase**에서는 **선언**만 진행하고 실제 **Execution Phase**에서 값을 할당하게 된다.

이때문에 **var, let, const** 모두 **호이스팅**이라는 상황은 동일하게 발생하지만 **선언**이전에 값을 호출하면 **let**의 경우 **레퍼런스 오류**가 발생하게 되는 것이다.

**const**는 **선언, 초기화, 할당**을 모두 동시에 진행하게 된다.

따라서, **let** 과 동일하게 동작한다.

위와 같은 이유로 **var**의 경우 **재선언, 재할당**이 가능하고, **let** 은 **재할당**만 가능하며, **const**는 **모두 불가 하다**.

### 결과 정리

---

**var** 는 **함수 스코프**를 가지며 **let, const** 는 **블록 스코프**를 갖습니다.

따라서, **var** 로 선언된 변수는 **함수 스코프**외의 스코프에서는 **전역 변수**로 설정된다.
반면, **let, const** 의 경우 **블록 스코프**를 갖기 때문에 **블록 내부**에서만 사용가능하며 **외부에서 사용이 불가능하다.**

**var** 의 경우 **렉시컬 환경**이 구성될때 **선언과 초기화가 동시에 이루어지기**때문에 **호이스팅**이 발생하고 **TDZ** 에 영향을 받지 않습니다.

반면, **let**은 **선언**과 **초기화**가 **분리**되어 **호이스팅**이 발생은 하지만, **TDZ** 의 영향을 받아 **레퍼런스 에러**가 발생합니다.
**const** 는 **선언, 초기화, 할당**이 **동시**에 이루어지므로 **재할당**이 **불가능**합니다.

### 참조 사이트

---

- [https://fromnowwon.tistory.com/entry/for%EB%AC%B8-let](https://fromnowwon.tistory.com/entry/for%EB%AC%B8-let)
- [https://www.howdy-mj.me/javascript/var-let-const/](https://www.howdy-mj.me/javascript/var-let-const/)
