---
date: "2024-02-20"
title: "[Stress Test] Artillery + Playwright 와 함께하는 Stress Test"
image: 'loadtest.webp'
rootCategory: Programming
category1depth: Web
category2depth: loadtest
keywords: ['Artillery', 'Playwright', 'StressTest']
excerpt: Artillery 와 Playwright 를 활용하여 부하테스트(Stress Test) 도전기
isFeatured: true
---

### 개요

최근에 프로젝트의 오픈이 다가오면서 **부하테스트**를 해야되는 시점이 오게 되었는데, 팀장님께서 혹시 오픈소스로 할 수 있는 방법이 없는지에 대한 문의를 주셨고, 가능한지에 대한 검토를 진행하였습니다.

찾아본결과 의외로 한번 시도해볼법한 **Artillery 라는 오픈소스**를 찾았고, 진행해 보기로 하였습니다..

더군다나, 현재 **E2E 테스트로 Playwright 를 활용**하고 있는데 **Artillery** 에서 **Playwright** 를 지원한다고 하여 생각보다 좋은 시너지를 낼 수 있을 것 같아 진행해보았고, 해당 내용을 기록에 남기도록 하겠습니다.

#### Artillery 란 무엇일까?
---

우선 **Artillery** 가 무엇인가부터 시작을 해야합니다.

**Artillery** 는 웹 어플리케이션의 성능 테스트를 수행하기 위한 오픈 소스 로드 테스팅 도구 입니다.

주로 웹 *어플리케이션의 성능 및 내구성을 테스트하고, 요청률, 응답 시간, 에러율 등을 측정하여 어플리케이션의 특정 작업 또는 서비스가 얼마나 많은 부하를 견딜 수 있는지를 평가하는 데 사용*됩니다.

**Artillery** 는 **YAML** 또는 **Javascript** 를 사용하여 시나리오를 정의하고, *이를 기반으로 가상 사용자들이 서버로 요청을 보내고 응답을 기다리는 방식으로 동작*합니다.

*사용자의 행동 패턴, 부하 시나리오, 요청률 등 세밀하게 제어할 수 있으며, 대규모 트래픽이 발생하는 상황에서도 실제 사용자와 유사한 부하를 시뮬레이션* 할 수 있습니다.

현재 실무에서는 **Artillery** 를 활용해서 **Cloud** 에 구축된 **K8S** 및 여러가지 파드들에 대한 병목 현상을 식별하고 현 운영 패턴에 맞춰서 부하를 주며 테스트를 진행하였습니다.

### 환경 구축 

아래는 **Artillery** 와 **Playwright** 를 활용한 설치과정을 기록해보도록 하겠습니다.


#### Artillery 설치
---

먼저 Artillery 를 설치해야 합니다.

```bash
npm install -g artillery@latest
```

전역으로 설치를 완료한 후 테스트 커멘드를 통해 공룡이 그려지는지 확인해야 합니다.

```bash
npx artillery dino

 ------------
< Artillery! >
 ------------
          \
           \
            __ 
           / _) 
    .-^^^-/ / 
 __/       / 
<__.|_|-|_|

```

#### Playwright 설치

**Artillery** 를 설치했으면 이제 *가상 유저가 띄울 Browser 를 설치*해야합니다.

*Artillery 는 Chronium 을 지원하기 때문에 Playwright 로 시나리오 스크립트 작성이 가능합니다.*

이부분에 대해서는 공식홈페이지에서는 자세히 나와있지는 않지만, 저의 경우에는 **Linux 환경에서 설치**를 해보았을 경우 아래 커멘드를 통해 관련 의존성 및 브라우저를 설치하시면 됩니다.

```bash
apt-get update&& apt-get install -y --no-install-recommends fonts-liberation libasound2 libatk-bridge2.0-0 libatk1.0-0 libatspi2.0-0 libcairo2 libcups2 libdbus-1-3 libdrm2 libegl1 libgbm1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxdamage1 libxext6 libxfixes3 libxrandr2 libxshmfence1 xvfb fonts-noto-color-emoji ttf-unifont libfontconfig libfreetype6 xfonts-cyrillic xfonts-scalable fonts-ipafont-gothic fonts-wqy-zenhei fonts-tlwg-loma-otf ttf-ubuntu-font-family ffmpeg libcairo-gobject2 libdbus-glib-1-2 libfontconfig1 libgdk-pixbuf2.0-0 libpangocairo-1.0-0 libpangoft2-1.0-0 libxcb-shm0 libxcursor1 libxi6 libxrender1 libxt6 libxtst6 libenchant-2-2 libflite1 libx264-155 libenchant1c2a libepoxy0 libevdev2 libgl1 libgles2 libgudev-1.0-0 libharfbuzz-icu0 libharfbuzz0b libhyphen0 libicu66 libjpeg-turbo8 libnghttp2-14 libnotify4 libopengl0 libopenjp2-7 libopus0 libpng16-16 libsecret-1-0 libvpx6 libwayland-client0 libwayland-egl1 libwayland-server0 libwebp6 libwebpdemux2 libwoff1 libxkbcommon0 libxml2 libxslt1.1 libatomic1 libevent-2.1-7'
```
맥OS 에서는 이미 **playwright** 에서 사용할 **Browser** 를 설치한 상황이었기 떄문에 추가적인 설치가 필요가 없었고, 만약 Mac OS 에서 진행하실 분들은 아래 설치를 통해 진행하시면 과정 간 브라우저 설치를 하실 수 있습니다.

 ```bash
npm init playwright@latest

or

yarn create playwright

or

pnpm create playwright
 ```

설치가 다 되었고 테스트를 진행합니다.

### 실제 테스트 진행

먼저 *Artillery 환경 설정에 필요한 YAML 파일을 하나 생성*해줘야 하며, 실행 환경에 대한 설정값을 명시해 줍니다.

#### YAML CONFIG 파일

```yml
# senario.yml
config:
  target: https://xxx.xxx.com/ # 부하 테스트 대상 URL을 설정합니다.
  
  phases: # 부하 테스트의 단계를 설정합니다.
    - duration: 100 # duration: 테스트의 총 소요 시간을 초 단위로 지정합니다.
      arrivalRate: 1 # arrivalRate: 초당 도착하는 요청의 수를 설정합니다.

  engines: # 사용할 엔진을 설정합니다.
      playwright: # playwright: 테스트 엔진으로 Playwright를 사용합니다.
        extendedMetrics: true # extendedMetrics: 세부 메트릭을 수집할지 여부를 설정합니다.

  processor: "./senario.js" # 테스트 함수가 정의된 JavaScript 파일의 경로를 지정합니다.

scenarios: # 시나리오를 설정합니다.
  - name: Stress Test # name: 시나리오의 이름을 지정합니다.
    engine: playwright # engine: 시나리오에 사용할 엔진을 선택합니다.
    testFunction: "senarioFunction" # testFunction: 시나리오에서 실행할 테스트 함수의 이름을 지정합니다.
```
일단은 기본적인 내용은 위와 같습니다.

위 시나리오의 경우 가상 브라우저가 *https://xxx.xxx.com/ 에 접근하게 설정*하였고, 가상 브라우저의 증분에 대해서 설정해주었습니다.

**duration, arrivalRate** 로 증분은 총 *100초 간 진행되며, 초당 1명씩 증가*되게 설정하였습니다.

**Engine** 은 *playwright 를 사용하기 떄문에 playwright 의 config 를 이부분에서 설정*할 수 있습니다.

**processor** 항목에 *playwright 를 활용해서 작성한 시나리오 script 의 경로를 작성*해줍니다.

마지막 **senarios** 에 내 *시나리오의 name 과 사용 engine 그리고 script 내에 export 한 함수 명을 명시*합니다.

#### 시나리오 스크립트

현재 진행하고 있는 차세대 프로젝트의 경우에 운영측에서 우려되는 부분의 하나인 시나리오를 테스트 하였습니다.

예를들어, 재작년 마스크 대란일 경우 마스크를 팔때의 시나리오를 작성했습니다.


```js
module.exports = { senarioFunction };

async function senarioFunction(page, vuContext, events, test) {
  const { step } = test;

  await step("[1] 기획전 페이지 렌딩 Step", async () => {
    // 기획전 URL
    const exhibitionURL = '기획전 URL'

    await page.goto(exhibitionURL);

    try {
      await page.waitForURL(exhibitionURL, {waitUntil: 'domcontentloaded'})

      const pageHeight = await page.evaluate(() => document.body.scrollHeight);
      // 페이지의 가장 아래로 스크롤합니다.
      await page.evaluate((pageHeight) => {
          window.scrollTo(0, pageHeight);
      }, pageHeight);

      await page.waitForTimeout(8000)

      // events.emit('counter', `[1]${exhibitionURL} 접속 성공`, 1);
    } catch (error) {
      events.emit('counter', `[1]${exhibitionURL} 접속 실패`, 1);
      throw new Error('counter', `[1]${exhibitionURL} 접속 실패 : ${error}`);
    }
  })

  await step("[2] 하단 서브 카테고리 탭 노출 확인", async () => {
    const elements = await page.$$('.navi-scroll li');

    const expectedTexts = ["라면", "만두", "떡볶이"]
    let index = 0

    for(const element of elements) {
      const buttonText = await element.$eval('button', button => button.textContent)
      if(buttonText.trim() === expectedTexts[index]) {
        events.emit('counter', `[3]${expectedTexts[index]} 버튼 노출 성공`, 1);
      } else {
        events.emit('counter', `[3]${expectedTexts[index]} 버튼 노출 실패`, 1);
        throw new Error(`[3]${expectedTexts[index]} 버튼 노출 실패`)
      }
      index++
    }
    await page.waitForTimeout(8000);
  })

  await step("[3] 하단 첫번째 상품 클릭 후 페이지 이동 확인", async () => {
    
    // 첫번째 상품 URL 변경시 해당 링크 수정 필요
    const nextStepURL = '상품 페이지 URL'

    const ulSelector = 'ul.item-list.grid li:first-child div.unit-wrap.grid > a' // 기획전 첫번째 상품 
    
    await page.waitForSelector(ulSelector)
    
    await page.click(ulSelector)
    try {
      await page.waitForURL(nextStepURL, {waitUntil: 'domcontentloaded'})

      // 페이지의 높이를 가져옵니다.
      const pageHeight = await page.evaluate(() => document.body.scrollHeight);

      await page.evaluate((pageHeight) => {
           window.scrollTo(0, pageHeight);
       }, pageHeight);

      await page.waitForTimeout(8000)
      // events.emit('counter', `[3] ${nextStepURL} 으로 이동 성공`, 1);
    } catch (error) {
      events.emit('counter', `[3] ${nextStepURL} 으로 이동 실패`, 1);
      throw new Error(`[3] ${nextStepURL} 으로 이동 실패 : ${error}`)
    }            
  })

  ... 
}
```

먼저 저의 경우 각각의 *step 을 활용해서 시나리오를 분리*하였고, 각각의 시나리오가 성공했는지 실패했는지에 대한 예외처리를 통해 *emit 을 활용해서 로그*를 남기도록 하였습니다.

#### 실행 커멘드

```bash
artillery run senario.yml
```

커멘드로 실행하게 되면 자체 내부 Resouce 를 활용해서 가상 Chronium 브라우저를 생성하여 작성한 Playwright 스크립트를 토대로 브라우저에서 E2E 테스트를 실행하게 됩니다.

진행이 완료되면 아래와 같은 결과 리포트를 받을 수 있습니다.

```bash
All VUs finished. Total time: 5 minutes, 26 seconds

--------------------------------
Summary report @ 16:56:19(+0900)
--------------------------------

browser.http_requests: ......................................................... 213526
browser.memory_used_mb:
  min: ......................................................................... 19.7
  max: ......................................................................... 28.2
  mean: ........................................................................ 22.4
  median: ...................................................................... 21.5
  p95: ......................................................................... 26.8
  p99: ......................................................................... 27.4
browser.page.FCP.xxx.xxx.com:
  min: ......................................................................... 564.1
  max: ......................................................................... 837.8
  mean: ........................................................................ 681.6
  median: ...................................................................... 685.5
  p95: ......................................................................... 757.6
  p99: ......................................................................... 788.5
browser.page.FID.xxx.xxx.com:
  min: ......................................................................... 1.6
  max: ......................................................................... 16.5
  mean: ........................................................................ 3.1
  median: ...................................................................... 2.8
  p95: ......................................................................... 4.4
  p99: ......................................................................... 9.1
browser.page.LCP.xxx.xxx.com:
  min: ......................................................................... 776.5
  max: ......................................................................... 1201.9
  mean: ........................................................................ 947.8
  median: ...................................................................... 944
  p95: ......................................................................... 1085.9
  p99: ......................................................................... 1153.1
browser.page.TTFB.xxx.xxx.com:
  min: ......................................................................... 8.9
  max: ......................................................................... 100.8
  mean: ........................................................................ 34.5
  median: ...................................................................... 23.3
  p95: ......................................................................... 80.6
  p99: ......................................................................... 92.8
browser.page.codes.200: ........................................................ 186281
browser.page.codes.201: ........................................................ 900
browser.page.codes.202: ........................................................ 17324
browser.page.codes.204: ........................................................ 6311
browser.page.codes.302: ........................................................ 1810
browser.page.codes.503: ........................................................ 900
browser.page.domcontentloaded: ................................................. 900
browser.page.domcontentloaded.xxx.xxx.com...  900
browser.page.dominteractive:
  min: ......................................................................... 34
  max: ......................................................................... 154
  mean: ........................................................................ 70.9
  median: ...................................................................... 63.4
  p95: ......................................................................... 125.2
  p99: ......................................................................... 138.4
browser.page.dominteractive.xxx.xxx.com:
  min: ......................................................................... 34
  max: ......................................................................... 154
  mean: ........................................................................ 70.9
  median: ...................................................................... 63.4
  p95: ......................................................................... 125.2
  p99: ......................................................................... 138.4
browser.step.[1] 기획전 페이지 렌딩 Step:
  min: ......................................................................... 8718
  max: ......................................................................... 10113
  mean: ........................................................................ 8955.3
  median: ...................................................................... 8868.4
  p95: ......................................................................... 9416.8
  p99: ......................................................................... 9607.1
browser.step.[2] 하단 서브 카테고리 탭 노출 확인:
  min: ......................................................................... 8045
  max: ......................................................................... 8152
  mean: ........................................................................ 8066.2
  median: ...................................................................... 8024.5
  p95: ......................................................................... 8024.5
  p99: ......................................................................... 8186.6
browser.step.[3] 하단 첫번째 상품 클릭 후 페이지 이동 확인:
  min: ......................................................................... 8393
  max: ......................................................................... 8665
  mean: ........................................................................ 8498.9
  median: ...................................................................... 8520.7
  p95: ......................................................................... 8520.7
  p99: ......................................................................... 8520.7
vusers.completed: .............................................................. 900
vusers.created: ................................................................ 900
vusers.created_by_name.blog: ................................................... 900
vusers.failed: ................................................................. 0
vusers.session_length:
  min: ......................................................................... 25283
  max: ......................................................................... 26793.9
  mean: ........................................................................ 25568.4
  median: ...................................................................... 25598.5
  p95: ......................................................................... 26115.6
  p99: ......................................................................... 26115.6
```

여러가지 지표중에 제가 중요하게 본 부분은 **브라우저 성능(LCP, FCP)** , 각각의 **Step 시나리오**, **시나리오 실패(vusers.failed)** , **시나리오 성공(vusers.completed)**, **시나리오 생성(vusers.created)**, 세**션 시간(vusers.session_length)** 이렇게를 중점적으로 분석하였습니다.

p95, p99 와 같이 백분위 가장 끝쪽에 있는 지표도 볼 수 있는점과 평균 값을 볼 수 있는 부분도 좋은 점이었던 것 같습니다.

### 테스트 진행 과정에서 유의할점

테스트를 진행하면서 몇가지 시행착오가 있었습니다. 

이 부분에 있어서 Artillery 가 유의미할 수 도 있고, 의미가 없을수도 있습니다. 

#### 실행 환경 자원 부족



**Artillery** 는 가상의 유저를 생성하여 *Chronium 브라우저를 띄우고 시나리오를 진행*하는 방식입니다.

아래 스팩의 경우로 테스트를 진행해보았습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/346059fb-7b33-42b7-82d1-e6e8c1e9fd19)

이때, 메모리와 CPU 가 많이 사용되는데 메모리 *16G / 8코어의 맥 기준으로 10초당 8명이 한계*였습니다.

시간이 지날수록 CPU 자원사용에서 오는 부하로 인해 *브라우저 속도가 저하되면서 Timeout 이 발생*합니다.

이 Timeout 은 Playwright 에서 설정한 Timeout 으로 사실상 **Playwright 에서 발생한 오류**이지만, *부하를 진행하는 의미는 뒷단에 클라우드 자원의 Auto Scaling 과 같은 상태를 확인하기 위함인데 부하로 인해 느리게 호출되면 의미가 없다고 판단*했습니다.

그래서 메모리 *500G+/80코어 서버를 지원받아 linux OS*를 설치 후 진행을 해보았습니다.

동일한 스펙의 서버 3대를 지원받아 linux OS 에서 테스트 환경을 구축 한 뒤 동일한 시나리오를 설정하였을때, *최대 300 초간 초당 9명씩 증가하게 설정하는데 까지 가능했고, 이말은 총 8100 명의 세션을 실행했다는 의미*였습니다.

동시에 25초의 시나리오를 가지고 진행했으므로, 한 서버당 **평균 225명의 사용자**가 어느 시점부터 유지된다는 가정하에 **동시접속 675명** 까지 진행을 할 수 있었습니다. **동시에 초당 API 호출 수 평균인 TPS 값을 3000** 까지 올려볼 수 있었습니다.

그 이후에는 CPU 부하로 인해서 더이상의 호출이 불가능하였고, 가능한만큼의 테스트 결과를 기준으로 클라우드의 각각의 자원 분배를 유추하여 진행하기로 하였습니다.

UI / API GATEWAY / HA Proxy 등의 자원은 위 테스트로 어느정도 분배가 가능했고, 앞단에서 CPU 부하로 브라우저에 접근이 느려지다보니 실제 API 부하에 대해서는 보강이 필요했습니다.

#### Artillery VS K6

API 부하테스트의 경우 **K6** 라는 K8S 에서 사용하는 부하테스트를 사용하였습니다.

**Artillery** 의 경우 Playwright 와 함께 E2E 테스트를 진행하였으므로, 브라우저는 외부 환경에서 실제 사용자가 들어오는 시나리오를 설정하여 진행하였기 떄문에 전체적인 부하를 알 수 있는 장점이 있지만 구동 환경의 자원에 따라 뒷단까지 유의미한 부하를 줄 수 없다는 단점이 있었습니다.

반면에, **K6** 의 경우에는 초당 *API 호출 건수를 3000*까지 올릴 수 있는 장점이 있지만 이는 *단순한 HTTP 호출*이므로 *전체적인 부하를 알 수 없고* 특정 API 서버에 부하를 주는데 특화 되어 있다고 생각하면 될 것 같습니다.

### 최종 정리

이번 기회에 오픈소스를 활용해서 부하테스트를 진행할 수 있다는 점이 좋은 경험이었던것 같습니다.

>정리해보면, Artillery + Playwright 를 활용한 E2E 부하 테스트의 경우 구동하는 환경의 리소스 자원에 따라 가능 범위가 달라집니다. 그래서 이부분으로는 클라우드 MSA 환경의 여러 POD 와 클라우드 자원 배분에 대한 어느정도 기준을 잡을 수 있으며 추가적인 API 서버의 부하는 K8 혹은 Junit 과 같은 단순 HTTP Request 요청을 통한 부하를 줌으로써 진행할 수 있을 것 같다.

뭐든 한가지로만은 부족한부분들이 있기 떄문에 두가지 모두 활용하면 유의미한 클라우드 환경의 자원 분배에 도움을 줄 수 있었습니다.

새로운 기술을 접목해서 해보는 작업이어서 신선했고, 재미있는 작업이었습니다. 나중에 필요한 부분에 꼭 다시 사용해봐야 겠습니다.

### 참고 사이트

- [Artiller 공홈](https://www.artillery.io/docs)
- [Playwright 공홈](https://playwright.dev/docs/api/class-browser#browser-new-context)
















