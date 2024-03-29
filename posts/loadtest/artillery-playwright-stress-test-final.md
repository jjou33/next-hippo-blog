---
date: "2024-03-28"
title: "[Stress Test] Artillery / Playwright / AWS 와 함께하는 Stress Test (2)"
image: 'loadtest2.jpg'
rootCategory: Programming
category1depth: Web
category2depth: loadtest
keywords: ['Artillery', 'Playwright', 'StressTest', 'AWS', 'EC2']
excerpt: Artillery & Playwright & AWS(EC2, Fargate)를 활용한 부하테스트(Stress Test) 도전기
isFeatured: true
---

### 개요

이전에 진행했던 부하 테스트가 어느정도 마무리 되었다.

이제 그동안 했던 이슈사항과 결과정리를 해본다.

### Resource 용량 부하로 인한 실패

처음에는 *CPU Rosource* 의 부족으로 서버 3대로 진행하였다.

그러나, *Artillery* 와 *Playwright* 자체가 *Chronium* 브라우저가 올라가기 때문에 엄청나게 많은 CPU 를 소모 하게 되는것이 문제였다.

부하를 주게되면 브라우저가 올라가고 Playwright 에서 작성했던 시나리오가 진행되게 되는데 이때 매 초당 계속해서 브라우저가 생성되다보니,**시간이 갈수록 동시에 생성되는 chronium 세션이 많아지게 된다.**

그렇게되면 결국에 *CPU* 가 올라가게되고 브라우저 자체가 느려져서 *Playwright* 에서 지정한 **Timeout 이 발생하게 되는 문제**가 있다.

이를 해결하기 위해서 *80 코어*, *500기가* 서버 3대로 진행하였지만, 이또한 20000명의 부하를 원하는 시나리오를 통해서 진행하기에는 부족했다.

결국 차선책으로 **AWS에서 제공하는 Computing 자원을 이용하여 진행하기로 했으며, Fargate 를 활용해서 진행을 하게 되었다.**

### ECS AWS Fargate 활용과 실패

*AWS Fargate* 를 데브옵스 팀에서 구성을 해 주었고, Artillery 에서 *Fargate* 를 연동하여 진행을 해 보았다.

```bash
artillery run-fargate --count 100 --region ap-northeast-2 --subnet-ids subnet-0a65ab2d2a8dda6a3 --security-group-ids sg-06a6c4b670f45f20f  --cpu 1 --memory 2 event.yml
```

여기서 *count* 는 *Fargate 의 Container 의미*하기 때문에 100대에서 초당 5명씩 90초간 돌려보았다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/ab1014e6-d117-4da7-99f9-b4f4e1cdd119)

하지만, 위와 같이 에러가 발생하였고 AWS 어드민에게 문의를 넣자 **Fargate 는 같은 리전에서 동시에 사용할 수 있는 양이 정해져 있기** 때문에 우리 원하는 동시에 100개를 컨트롤하는 방식은 불가능 하였다.

### EC2 활용 

급하게 방법을바꿔서 그럼 *EC2 서비스*를 활용해서 비용은 좀 나오겠지만, **AWS 의 EC2 서버를 활용**해서 대수를 늘려보자고 의견이 모아졌다.

빠르게 구성을 진행하였고, **EC2 총 44대의 서비스를 AWS 상에 오픈**하였다.

44대의 EC2 서버에서 동시에 Artillery 서비스를 구동하였고, 이제서야 **20000명의 테스트를 진행할 수 있었다.**

### Artillery & Playwright 의 한계

실제 20000명의 테스트는 가능했지만, Timeout 으로 인한 실패건수가 너무나도 많았다.

그래서 곰곰히 생각해본 결과 결론은 Playwright 자체가 **Headless Browser 를 올리기 때문에 잡아먹는 Resource 가 너무나도 많은것**이 문제라고 생각이 되었다.

단순 진입 시나리오는 상관없지만, 우리가 원하는대로 여러 페이지를 돌아다니면서 **체류시간을 늘리게 되면** 초당 계속해서 **브라우저 세션이 쌓이기 때문에 브라우저의 속도가 느려져서 실제로는 문제가 없음에도 불구하고 Timeout 이 발생하게 되는 것**이다

그래서 결국에 여러 시나리오를 삭제하고 홈 페이지 진입 혹은 상품 상세 페이지 진입과 같은 **단순 페이지 진입으로 진행했을 경우 진입 후 세션 종료까지 시간이 짧기 떄문에 30000 까지도 테스트가 가능**했다.

이때 오히려, 클라우드 자원에 조금 더 부하가 높게 올라갔고 테스트가 잘 되었던 것 같다.

### 최종정리

Artillery 와 Plawright 를 활용해서 부하테스트를 진행하기 위해서는 우리가 E2E 테스트 코드를 작성하는것과 같이 **체류시간이 긴 여러가지 상황을 구현하기에는 하드웨어 Resource 의 충분한 자원이 필요하다.**

그렇지 않다면, **최대한 세션이 동시에 떠있지 않고 API 호출하고 빠지는 형태로 페이지 진입 후 잠시 대기했다가 빠지는 방식으로 테스트하는게 가장 효율적**인것 같다.

결과적으로 우리는 오픈전 30000명의 부하를 주었고, 뒷단의 클라우드 파드가 잘 버텨주었다.

이 과정에서 쿠버네티스로 구축된 Container 의 파드들의 자원을 잘 배분할 수 있어서 의미 있었던 작업이었던 것 같다.


### 참고 사이트

- [Artiller 공홈](https://www.artillery.io/docs)
- [Playwright 공홈](https://playwright.dev/docs/api/class-browser#browser-new-context)
















