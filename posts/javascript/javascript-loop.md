---
date: "2021-11-07"
title: "forEach, map, filter, reduce"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---

### foreach

---

forEach 문은 배열에 접근할 때 for 반복문 대신 접근할 수 있는 내장 메서드 이다.

```js
let a = [10, 11, 12, 13, 14, 15];
a.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2]
);
```

위 코드를 돌려보면

![image](https://user-images.githubusercontent.com/56063287/146776404-3162c23d-f461-4689-8385-b8d29d460222.png)

여기서 **forEach** 의 결과를 보면 a 배열의 값과 인덱스 값, 매개변수로 준 값이 차례로 호출되는 것을 볼 수 있다.

우리가 사용하는 경우에는 **주어진 배열값을 특정 CallBack Function 에 전달하려 실행하는 경우이고 추가적인 매개변수를 통해 추가 정보를 사용할수 있다는 점을 기억하면 될 것 같다**

즉, 결과적으로만 보았을때는 **아래와 같이 동작**한다고 생각하면 될 것 같다.

```js
function forEach(predicate, thisArg) {
  for (let i = 0; i < a.length; i++) {
    predicate(a[i], i, thisArg);
  }
}
```

forEach 는 함수를 매개변수에 포함해서 받게 되므로 CallBack 함수가 들어가게 되고 내부에서 a 배열 값을 차례로 해당 함수에 넣어주는 방식인 것 같다.

v 에는 a 배열의 값이 들어갔고 i 에는 해당 값의 인덱스 그리고 매개변수가 출력되었다.

위 forEach 코드의 경우에는 실제 내부 함수가 아닌 대략적인 나의 생각을 코드로 정리해본 것이다.

### Map

---

맵의 경우 아래와 같이 동작한다고 유추 할 수 있다.

```js
function map(predicate, thisArg) {
  let list = [];
  for (let i = 0; i < a.length; i++) {
    list.push(predicate(a[i], i));
  }
}
```

아래와 같이 내장함수를 사용하여 콘솔을 찍어보면

```js
let a = [10, 11, 12, 13, 14, 15];
let answer = a.map(function (v, i) {
  return v * v;
});
console.log(answer);
```

![image](https://user-images.githubusercontent.com/56063287/146776742-30cbb809-10db-48e5-9550-a2e83044bcb9.png)

위와 같은 결과를 얻을 수 있다.

**map** 에 function(v, i) 에는 a 의 원소 10 ~ 15 와 각 index 가 들어가게 되고 결과값으로 **v \* v** 가 리턴된다.

리턴된 값은 list 에 담겨져 최종 리턴되게 된다.

```js
let answer = a.map(function (v, i) {
  if (v % 2 == 0) {
    return v * v;
  }
});
console.log(answer);
```

추가적으로 알아야할 점이 만약 아래와 같이 조건별로 return 을 했다면 **조건에 맞는 값만 최종 리턴배열에 들어갈까?**

답은 **_"아니오"_** 이다.

Map의 경우 a 리스트 를 받아와 조건을 걸든 안걸든 **function 을 a 의 length 만큼 실행**하고 **내부 list 에 push** 하기 때문에

만약 조건에 안맞는 결과이더라도 **undefined** 로 추가 되게 된다. 따라서 원본 배열과 같은 길이가 같은 배열을 리턴한다.

이점 유의가 필요하다.

![image](https://user-images.githubusercontent.com/56063287/146777077-6cde1a7e-4ec0-4cab-803b-fe72a98c3d10.png)

### filter

---

위 Map 에서는 어쩔 수 없이 input 된 모든 요소가 어떠한 형태로든 배열에 추가되어 return 되는것을 알아봤다.

만약 원하는 조건의 요소만 리턴받고 싶을 경우 filter 를 사용하면 될 것이다.
**filter 는 Map 과 비슷하다고 생각하면 되나 원하는 요소만 뽑아서 리턴해준다.**

```js
let a = [10, 11, 12, 13, 14, 15];
let answer = a.filter(function (v, i) {
  if (v % 2 == 0) {
    return v * v;
  }
});
console.log(answer);
```

위 코드를 실행시켜보면 v%2 == 0 조건에 맞는 요쇼들만 return 되게 된다.

![image](https://user-images.githubusercontent.com/56063287/146777455-4e15e791-278f-45eb-bed6-f8d7fdc27a6e.png)

추가적으로 알 수 있는 부분은 return 에 조건을 명시하면 조건에 맞는 값만 리턴하게 된다.

```js
memList = memList.filter(function (item) {
  return item !== max;
});
```

따라서 동작을 추측하여 코드로 보면 아래와 같이 구현할 수 있을 것 같다.

```js
function filter(predicate, thisArg) {
  let list = [];
  for (let i = 0; i < a.length; i++) {
    if (predicate(a[i], i)) {
      list.push(a[i]);
    }
  }
}
```

### reduce

---

reduce 가 기본적으로 동작하는 방식을 나름의 생각으로 코드화 해보았다.

```js
function reduce(predicate, val) {
  let result = val;
  for (let i = 0; i < a.length; i++) {
    result = predicate(result, a[i]);
  }
  return result;
}
```

위 방식으로 내장함수가 돌아가게 되고

```js
let a = [10, 11, 12, 13, 14, 15];
let answer = a.reduce(function (acc, v) {
  return acc + v;
}, 0);
console.log(answer);
```

위 로직으로 설명을 남긴다.

먼저 reduce 는 앞서 설명한 다른 3개와는 조금 다르게 복잡하게 돌아간다.

**reduce** 의 **파라메터**로 **function** 과 **초기값**을 보내게 된다.

위 예제에선 **초기값**으로 0을 보냈으므로 처음 result 값은 0으로 선언이 되고 **반복문**으로 들어가 **result 값**은 **첫번째 파라메터** function 에 0으로 선언된 **result값, a 배열의 값 이 매개변수로 들어가게된다.**

그럼 예제에서는 **callback 함수**의 **return** 이 **첫번째 두번째 매개변수의 합**을 리턴하므로 **0 + a[0](10) = 10** 이 리턴된다.

그러면 result 는 10이되고 다시 반복문이 돌게될때에는 callback 함수에 **10, 11** 이 매개변수로 들어가 **10 + a[1](11) = 21** 이 리턴된다.

**결과적으로 reduce 는 callback 함수의 return 값이 첫번째 매개변수에 전달되는것, 2번째 인자는 초기값 인것만 알면 좋을것 같다.**

보통 합을 구할때 주로 사용하는 편이다.

### 참조 사이트

---

**MDN 사이트** [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
