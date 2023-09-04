---
date: "2023-05-07"
title: "[Algorithm] DFS 알고리즘 정리1"
image: 'dfs1.png'
rootCategory: Programming
category1depth: Algorithm
category2depth: dfs
keywords: ['Algorithm', 'BFS']
excerpt: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다.
isFeatured: true
---

## 개념
---

**깊이 우선 탐색(DFS)** 의 경우 재귀함수와 각각의 재귀마다의 로직을 잘 세워서 작성해야 한다.

### 일반
---

일반적인 경우 DFS 를 풀때 주어진 조건이 선택적으로 주어지는 경우가 있다

예를들어, 아래와 같은 문제일 것이다.

```text
자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요.
```

이와 같이 부분집합 즉, 1부터 N 까지의 원소 중 중복이 되지 않은 어떤 조건을 걸러야하는 부분이다.

![image](https://github.com/jjou33/hippo-blog/assets/134469187/ee007c65-cb25-424d-81c1-64f00eaeb925)

![image](dfs.png)

#### 풀이
---

```ts
function solution(n){
    let answer=[];
    // 뽑아야 하는 갯수만 큼의 체크 배열을 만든다.
    let ch=Array.from({length:n+1}, ()=>0);

    // DFS 함수를 깊이 우선 탐색한다.
    function DFS(L){
        if(L===n+1){
            let tmp="";
            for(let i=1; i<=n; i++){
                if(ch[i]===1) tmp+=(i+" ");
            }
            if(tmp.length>0) answer.push(tmp.trim());
        }
        else{
            // L 번째 원소를 뽑는 경우 체크배열에 1 로 표시한다.
            ch[L]=1;
            DFS(L+1);

            // L 번째 원소를 뽑지 않는 경우 체크배열에 0으로 표시한다.
            ch[L]=0;
            DFS(L+1);
        }
    }
    DFS(1);
    return answer;
}
```

위 문제처럼 뽑는경우, 안뽑는경우를 나누어서 작성하면 생각보다 간단하게 풀리는 경우가 있다.

일반적인 DFS 를 활용하는 방법이다.

### 순열
---

순열 즉, 중복을 포함한 경우는 반복문이 필요하다.
또한, 한번 체크한 숫자를 중복해서 뽑을 수 없기 떄문에 check 할 수 있는 배열을 통해서 확인을 하면서 DFS 의 깊이를 높여가는 방법을 택한다.

```ts
let ch=Array.from({length:n}, ()=>0);
let tmp=Array.from({length:m}, ()=>0);;
function DFS(L){
    if(L===m){
        answer.push(tmp.slice()); 
    }
    else{
        for(let i=0; i<n; i++){
            if(ch[i]===0){
                ch[i]=1;
                tmp[L]=arr[i];
                DFS(L+1);
                ch[i]=0;
            }
        }
    }
}
```

### 조합

조합의 경우에는 중복된 경우를 제외해야 하기 떄문에 DFS 에서 변수를 받을 때 다음 시작 지점을 받아서 진행하는게 핵심이다.

```ts
function solution(n, k, arr, m){         
    let answer=0;
    function DFS(L, s, sum){
        if(L===k){
            if(sum%m===0) answer++;
        }
        else{
            for(let i=s; i<n; i++){
                DFS(L+1, i+1, sum+arr[i]);
            }
        }
    }

    DFS(0, 0, 0);
    return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
```

위와 같이 우리는 s 라는 변수를 통해서 기존에 시작 시점이었던 s 에 1 을 더해서 그다음 로직을 실행하게 된다.



