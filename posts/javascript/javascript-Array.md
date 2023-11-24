---
date: "2021-11-09"
title: "ES6 Array 배열"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6', 'Array']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---



### 배열 선언 및 사용
---

#### 객체처럼 생성
---
```js
const arrObject = new Array();

arrObject[0] = 1;
arrObject[1] = "hi";
```

#### 다양한 배열 사용법
---
```js
cconst arr1 = [1, 2, "String", null];

// 배열 안에 객체 저장
const arr2 = [
  { value1: 1, value2: "hi" },
  { value1: 2, value2: "hello" }
];
// 배열 안에 배열
const arr3 = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(arr1[0]);
console.log(arr2[0].value1, arr2[0].value2);
console.log(arr3[0][0], arr3[1][2]);

}

const temp = new myClass();
console.log(temp.v1, temp.v2, temp.getMydate());
```

#### 삭제
---
- 삭제는 **Array.splice(시작Index, 삭제갯수)**

```js
const arr = [1, 2, 3, 4];

arr.splice(1, 2); // [1,4]
```

### 배열 추가, 삭제, 이동 외 사용함수
---

#### push
---

- 마지막에 값을 넣는다.

```js
const Arr = [1, 2, 3];
Arr.push("Value");

console.log(Arr); // [1, 2, 3, 'Value']
```

#### pop
---

- **배열의 끝에 있는 값을 리턴**해주고, **해당 아이템은 배열에서 삭제**
- 우리가 아는 **자료구조의 push, pop** 으로 이해해도 된다

```js
const Arr = [1, 2, 3];
let popData = Arr.pop();

console.log(popData); // 3
```

#### shift
---

- 배열의 첫번째 값을 삭제하고, 뒤에 있는 아이템을 앞으로 당긴다.

```js
const Arr = [1, 2, 3];
Arr.shift();

console.log(Arr); // 2,3
```

#### concat
---

- 명시된 두 배열을 합친다.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);

console.log(newArr); // [1,2,3,4,5,6]
```

#### join
---

- 아이템 사이에 특정 문자열을 넣어서, 모든 아이템을 합쳐 하나의 문자열로 만든다.

```js
let arr1 = [1, 2, "value", 10];

arr1 = arr1.join("|");
arr1 = arr1.join("");
console.log(arr1); // 1|2|value|10
console.log(arr1); // 12value10
```

#### reverse
---

- 배열을 역순으로 뒤집어 변경한다.
- 변경 값을 리턴하는게 아닌 해당 배열을 변경함

```js
let arr1 = [1, 2, "value", 10];

arr1.reverse();
console.log(arr1); // [10, "value", 2, 1]
```

#### reverse
---

- 배열을 역순으로 뒤집어 변경한다.
- 변경 값을 리턴하는게 아닌 해당 배열을 변경함

```js
let arr1 = [1, 2, "value", 10];

arr1.reverse();
console.log(arr1); // [10, "value", 2, 1]
```

#### slice 배열 반환
---

- 배열의 부분을 반환한다.
- slice(a,b) 는 a 인덱스 부터 b-1 인덱스 까지의 값을 추출

```js
let arr1 = [1, 2, "value", 10];

console.log(arr1.slice(1, 3)); // 2, "value"
```

#### forEach
---

- 반복문 처럼 배열의 값을 차례로 가져온다.

```js
let arr1 = [1, 2, "value", 10];

arr1.forEach((v) => {
  console.log(v);
});
```

#### forEach
---

- 반복문 처럼 배열의 값을 차례로 가져온다.

```js
let arr1 = [1, 2, "value", 10];

arr1.forEach((v) => {
  console.log(v);
});
```

#### map

---

- 배열의 값에 대해 로직을 정의해 리턴

```js
let arr1 = [1, 2, 3, 10];
let newArr = arr1.map((v) => v * 2);

console.log(newArr); // [2, 4, 6, 20]
```

#### indexOf
---

- 배열에 특정 값의 위치를 반환하는 함수

```js
let arr1 = [1, 2, 3, 10];
let index = arr1.indexOf(10);

console.log(index); // 3
```

#### findIndex
---

- 배열의 아이템이 객체일 경우, 해당 객체에서 지정한 데이터의 위치를 찾을 수 있는 방법을 제공한다.

```js
let arr1 = [
  { id: 1, name: "ave" },
  { id: 2, name: "ali" },
];

console.log(arr1.indexOf("ali")); // -1
console.log(arr1.findIndex((v) => v.name === "ali")); // 1
```

#### find
---

- findIndex 는 객체의 위치를 리턴하지만, find의 경우는 데이터 객체를 리턴

```js
let arr1 = [
  { id: 1, name: "ave" },
  { id: 2, name: "ali" },
];

console.log(arr1.indexOf("ali")); // -1
console.log(arr1.findIndex((v) => v.name === "ali")); // 1
console.log(arr1.find((v) => v.name === "ali")); // {id: 2, name: "ali"}
```

#### filter
---

- 특정 조건에 맞는 값만 배열에서 추출한다.

```js
let arr1 = [1, 2, 3, 4, 5, 6];

let even = arr1.filter((v) => v % 2 === 0);

console.log(even); // 2,4,6
```

### some() / every()
---

- some()

배열의 요소 중 하나라도 콜백함수의 조건을 충족하는 요소가 있는지 없는지를 검사하는 메서드

리턴값은 **boolean** 이된다.

- every()

배열의 모든 요소가 콜백함수의 조건을 충족하는지 검사하는 메소드

마찬가지로 리턴값은 **boolean** 이다.

forEach, filter 는 모든 요소를 루프로 돌지만 원하는 조건에 만족되었을때 나오게 하고 싶다면 위 **some** 이나 **every** 를 사용하는것도 좋은 팁이다.

### reduce() / reduceRight()
---
- reduce()

루프를 돌며 배열 요소들에 대해 콜백함수를 실행하고 누적된 값을 리턴한다.

현재값이 다음 loop에서 이전값이 되어 전달된다.

즉, 배열을 돌면서 특정 시작점 값에 콜백함수가 실행된 값을 누적해 나간다.

**원본 배열은 변경하지 않음**

reduce 를 통해서 2중 배열만들기 Tip

```js
const resultArray = new Array(5).fill(0).reduce((acc, curr) => {
  acc.push(new Array(5).fill(0));
  return acc;
}, []);
```

- reduceRight()

reduce 와 동일한 메커니즘으로 실행되지만 반대로 배열을 순회한다.
