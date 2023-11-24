---
date: "2021-11-14"
title: "Promise 정리"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: javascript
keywords: ['Javascript', 'ES6', 'Promise']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---



### Promise 란?
---

* 비동기 처리를 위한 콜백함수의 단점을 보완하기 위해 제안됨

1. Promise 객체 생성
2. **Promise 객체**에서는 **executor 라는 함수가 자동으로 실행**되고, **executor** 라는 함수는 **resolve 와 reject** 라는 두 개의 함수를 **인자**로 받아서 **비동기 처리 함수**를 실행
3. **executor** 를 통해 비동기 처리 함수를 실행 완료 후, 해당 작업이 **성공**이면 **resolve**, **실패**면 **reject** 함수를 호출


```js
const promiseObj = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  setTimeout(() => {
    let num = 13;
    if (num >= 11) {
      /* 비동기 작업 성공 */
      resolve(num);
    } else {
      /* 비동기 작업 실패 */
      reject("error");
    }
  }, 5000);
});


// excutor 함수가 Promise 객체 안에 있는 로직을 동기적으로 수행하고 난 뒤
// resolve , reject 를 실행한다.

// 위에서 인자로 받는 resolve 와 reject 함수는 아래와 같이 정의한다.

promiseObj.then(
  (item) => {
    console.log("success : " + item);
  },
  (err) => {
    console.log("error : " + err);
  }
);

```
### then 을 이어서 사용하기
---

```js
const promiseObj = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  setTimeout(() => {
    let num = 13;
    if (num >= 11) {
      /* 비동기 작업 성공 */
      resolve(num);
      console.log("hi");
    } else {
      /* 비동기 작업 실패 */
      reject("error");
    }
  }, 1000);
});

// excutor 함수가 Promise 객체 안에 있는 로직을 동기적으로 수행하고 난 뒤
// resolve , reject 를 실행한다.

// 위에서 인자로 받는 resolve 와 reject 함수는 아래와 같이 정의한다.

promiseObj
  .then(
    (item) => {
      console.log("success : " + item);
    },
    (err) => {
      console.log("error : " + err);
    }
  )
  .then(
    (item) => {
      console.log("next Level");
    },
    () => {
      console.log("next Err");
    }
  );


```

### Promise Status
---

* **대기상태(Pending)** : 비동기 처리가 실행되지 않은 초기 상태
* **이행상태(Fulfilled)** : 비동기 처리가 성공적으로 완료된 상태
* **실패상태(Rejected)** : 비동기 처리가 실패한 상태


### catch
---

```js
const promiseObj = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  setTimeout(() => {
    let num = 13;
    if (num >= 15) {
      /* 비동기 작업 성공 */
      resolve(num);
    } else {
      /* 비동기 작업 실패 */
      reject("error");
    }
  }, 1000);
});

promiseObj
  .then(
    (num) => {
      // 성공 시 then 구문 동작
      console.log("success" + num);
    },
    (num) => {
      // 실패 시 해당 구문 동작
      console.log("fail" + num);
    }
  )
  // reject 함수가 정의되지 않았을때 동작한다.
  .catch((error) => {
    console.log("error" + error);
  });

```

### chaining / return
---

* chaining 된 then 구문에서 return 값을 통해 인자를 다음 chain 으로 넘길 수 있다.

```js
const promiseObj = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  setTimeout(() => {
    let num = 13;
    if (num >= 11) {
      /* 비동기 작업 성공 */
      resolve(num);
    } else {
      /* 비동기 작업 실패 */
      reject("error");
    }
  }, 1000);
});

promiseObj
  .then(
    (num) => {
      console.log("success" + num);
      // 인자 넘긴다.
      return num;
    },
    (num) => {
      console.log("fail" + num);
    }
  )
  // return 을 통해 num값 13을 리턴받아 인자로 사용가능
  .then((returnValue) => {
    console.log("returnValue : " + returnValue);
  })
  .catch((error) => {
    console.log("error" + error);
  });

```

### Promise.all
---

* 작성한 모든 Promise 가 동작한 다음 내부 구문이 실행된다.

```js
const promiseObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 13
    if(num > 12) {
      resolve(num)
    } else {
      reject(num)
    }
  }, 1000);
});

const promiseObj2= new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 13
    if(num > 12) {
      resolve(num)
    } else {
      reject(num)
    }
  }, 2000);
});

Promise.all([promiseObj, promiseObj2])
.then((response) => {
  console.log(response);
})

// 결과는 [13, 13]
// response 에 배열안의 Promise 결과들이 들어가서 리턴된다.
```
