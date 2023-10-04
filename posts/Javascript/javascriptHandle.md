---
date: "2022-02-20"
title: "Javascript HTML 접근 및 조작"
image: 'javascript.png'
rootCategory: Programming
category1depth: Languages
category2depth: Javascript
keywords: ['Javascript', 'ES6']
excerpt: Javascript 에 대한 포스트를 기록하는 공간입니다.
isFeatured: true
---


### HTML 태그 정보 접근

---

예를 들어 아래와 같은 **HTML**의 **XML** 데이터가 있다고 하자.

**Javascript** 를 통해서 이 값에 접근해본다.

```html
<button
  data-category-name="espresso"
  class="cafe-category-name btn bg-white shadow mx-1"
>
  에스프레소
</button>
<button
  data-category-name="frappuccino"
  class="cafe-category-name btn bg-white shadow mx-1"
>
  프라푸치노
</button>
<button
  data-category-name="blended"
  class="cafe-category-name btn bg-white shadow mx-1"
>
  블렌디드
</button>
```

보통 **xml** 데이터를 **String** 으로 주고 태그의 내부 값을 조작하라는 문제가 많이 나온다.

이런경우는 아래와 같이하면 어떨까 생각해 보았다.

```js
let xmlDate =
<button
  data-category-name="espresso"
  class="cafe-category-name btn bg-white shadow mx-1"
>
  에스프레소
</button>
<button
  data-category-name="frappuccino"
  class="cafe-category-name btn bg-white shadow mx-1"
>
  프라푸치노
</button>
<button
  data-category-name="blended"
  class="cafe-category-name btn bg-white shadow mx-1"
>
  블렌디드
</button>


// div 생성
let el = document.createElement("div");
el.innerHTML = xmlData;

let tag = el.getElementsByTagName("button");
```

여기까지 오면 **el** 변수에는 **div** HTML태그가 들어가 있고 **childNode** 인 **button** 들을 접근할 수 있게 된다.

이때 우리는 **button** 태그만 가져오면 되기 때문에 **el.getElementsByTagName("button")** 을 통해서 **button** 태그만 가져올 것이다.

![image](https://user-images.githubusercontent.com/56063287/154837483-da53eb60-b63b-4237-9200-1975387608d1.png)

위 결과와 같이 우리는 3개의 **childNode** 를 확인 할 수 있다.

이안에서 만약 **에스프레소, 프라푸치노, 블렌디드** 이 텍스트만 가져오고 싶을 경우 아래와 같이 접근하면 될것 같다.

```js
// ...xmlData 생략

let el = document.createElement("div");
el.innerHTML = xmlData;

let tag = el.getElementsByTagName("button");

for (let i = 0; i < tags.length; i++) {
  console.log(tags[i].innerText.trim());
}
```

![image](https://user-images.githubusercontent.com/56063287/154837773-d0990c80-77d6-495e-bafa-9e4a0a99edba.png)

간단한 예를 들었으며, **console.dir** 를 통해서 각 객체가 가지고 있는 **properties** 들을 볼 수 있으니 참고한다.
