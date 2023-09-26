---
title: "[Algorithm] 앞 수들 보다 큰 수만 구하기"
date: "2023-09-10"
image: headImage.png
rootCategory: Programming
category1depth: Algorithm
category2depth: Basic
keywords: ['Algorithm', 'Basic']
excerpt: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다.
isFeatured: true
---

### 문제 요건

N 명의 점수를 입력한 **배열** 이 주어지고 그 배열의 등수 구하기


### 코드

---

기본 솔루션

```js
function solution(arr) {
  let n = arr.length; // 길이
  // 신규배열 생성(등수초기화) 및 1로 초기화
  let tarr = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    // 실제 arr 배열 값 특정
    for (let j = 0; j < n; j++) {
      // arr 값(i) 에 대해 큰값 확인
      if (arr[i] < arr[j]) {
        // arr[i] 값 보다 크면 등수 업
        tarr[i]++;
      }
    }
  }
  return tarr;
}

let arr = [87, 86, 92, 100, 76];
```

### 결과정리

---

주어진 배열의 값에 대하여 등수를 구하는 문제였다.
여기서 **기억**할 것은 **신규 배열로 등수를 초기화 후 반복문을 통하여 큰 값에 대한 갯수만큼 등수를 업하는 아이디어** 이다.

```js
Array.from({ length: arr.length }, () => 1);
```

이런 아이디어를 바로바로 생각해 내어야 한다.
나의 경우 모든 배열을 검증하려는 식으로 접근을 하였는데 **최대한 외적으로 간단하게 풀 수 있는 방법**을 계속해서 고민해야할 것이다.