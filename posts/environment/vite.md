---
title: "[Bundler] Vite 새로운 번들러"
date: "2022-03-18"
image: vite.png
rootCategory: Programming
category1depth: Web
category2depth: environment
keywords: ['Bundler', 'Vite']
excerpt: 개발환경에 필요한 도구들과 관련된 포스팅 입니다.
isFeatured: true
---

### 개요
---

방대한 코드이기에 모든 분석은 불가하고  **vite** 가 어떤 환경에서 사용되고 장점인 **esbuild** 개발 구성에 대해서 **node_module** 내 소스 분석을 통해 정리한다.

### vite 은 무엇을 해결하고자 하였나
---

왜 **vite** 가 빠를것인가?

우리는 웹 생태계가 발전함에 따라 각 서비스마다 방대하고 복잡한 코드를 가진다.

따라서, 우리는 **번들링**을 통해 이를 해결하고자 하였고 **webpack**, **Rollup**, **Parcel** 등과 같은 개발자에게 조금 더 쉽게 이작업을 처리해주는 도구를 사용하게 되었다.

하지만, 점점 더 복잡해지고 방대해지는 **Javascript** 의 크기가 증가하고 그에따라 **Module** 의 개수가 크게 증가하였다.

이는 **Build** 성능에 조금씩 부담을 주게 되었고, 예를 들면 모든 **Javascript** 소스를 **IIFE** 로 묶는 **Webpack** 또한 시간이 길어질 수 밖에 없었다.

이를 해결하고자 **Vite** 는 새로운 사상을 들고 나왔고 이에 대한 분석을 진행한다.

### vite 는 무엇이 다른가?
---

기본적으로 **Vite** 는 **dev** 와 **production** 을 나눈다고 생각하면 된다.

먼저 **dev** 서버를 실행할때 **Dependency** 부분과 **Source** 부분을 나누어 작업이 되도록 구성된다.

####  Dependency(종속성)
---

먼저 **Dependencies** 가 제공하는 다양한 **Module** 의 형식(**ESM**, **CommonJS**) 을 **esbuild** 를 사용하여 **dependency pre-bundling** 하여 기존 **JS** 기반 번들러보다 효율을 높일 수 있다고 공식 문서에서는 말하고 있다.

이게 어떤 의미인지 생각해보면 단순하게 생각해서 전통적인 모듈 제공 방식은 **CommonJS and UMD** 에 소스를 **ESM** 방식으로 사용할 수 있도록 사전에 **Bundling** 을 진행한다는 의미인것 같다.

두번째로, 앞선 내용에서 설명했듯이 수만은 **ESM** 모듈이 존재한다고 가정하자.

예를 들어 아래와 같이 **loadash-es** 는 내부적으로 **600개** 이상의 내부 **Module** 을 가지고 있고 우리는 아래와 같이 필요에 의해 사용하게 된다.

```js
import { debounce } from 'lodash-es'
```
만약 이 모든 내부적인 **Module** 들을 사용하려면 브라우저는 **600번** 이상의 **HTTP** 요청을 하게되지만, **Vite** 는 **dependency pre-bundling** 을 통하여 **Single-Module** 로 변경하기 때문에 결과적으로 **한번의** HTTP 요청만으로 동일하게 사용할 수 있게 된다고 한다.


#### 내부 소스
---

실제 **vite** 의 내부 소스를 보면 조금 더 쉽게 이해할 수 있다.

우리가 **dev** 서버를 올리기 위한 **command** 를 작성하면 **Vite** 는 여러 옵션을 확인하지만 크게 **build**인지 **dev or serve** 인지를 확인한다.

여기서는 **개발서버** 를 이야기하고 있기 때문에 우선은 **개발** 에 초점을 맞추어 생각해보자.

내부 커멘드 작성 시 **cli.ts** 파일에서 위 내용을 구분할 수 있는 코드를 확인할 수 있다.

```js

// cli.ts

// dev
cli
  .command('[root]', 'start dev server') // default command
  .alias('serve') // the command is called 'serve' in Vite's API
  .alias('dev') // alias to align with the script name
  ... 
// build
cli
  .command('build [root]', 'build for production')
  .option('--target <target>', **[string] transpile target (default: 'modules')**)
  .option('--outDir <dir>', **[string] output directory (default: dist)**)
```

이때 **dev** 커멘드가 확인되면 내부 로직인 **createServer** 를 통해 실제 **localDevServer** 를 올리는 작업이 진행되게 된다.

```js
// cli.ts
   ... 
   // output structure is preserved even after bundling so require()
    // is ok here
    const { createServer } = await import('./server')
    try {
      const server = await createServer({
        root,
        base: options.base,
        mode: options.mode,
        configFile: options.config,
        logLevel: options.logLevel,
        clearScreen: options.clearScreen,
        optimizeDeps: { force: options.force },
        server: cleanOptions(options)
      })
    ...
```

실제로 **./server** 안에 **createServer** 의 로직을 보면 **resolveConfig(환경설정)** , **resolveHttpsConfig(HTTP 설정)** 등 여러가지 설정을 하게 된다.

여기서 위에서 말햇듯이, **DepsOptimizer** 를 통해 **종속성**을 하나의 **ESM** 모듈로 바꾸는 작업들이 진행되는 것을 볼 수 있다.

```js
// index.ts
 ... 
 async ssrLoadModule(url, opts?: { fixStacktrace?: boolean }) {
      if (isDepsOptimizerEnabled(config, true)) {
        await initDevSsrDepsOptimizer(config, server)
      }
      await updateCjsSsrExternals(server)
      return ssrLoadModule(
        url,
        server,
        undefined,
        undefined,
        opts?.fixStacktrace
      )
    },
  ...
```

**Production** 의 경우 **Rollup** 을 사용하여 빌드하게 되는데 이부분은 추후 기록하도록 한다.

더 깊은 로직은 생략하고 이와 같이 위에서 말했던 **Dependency Pre-building** 의 의미에 대해서 조금 더 알수 있는 부분이다.

####  Source 분할
---

위에 말한 종속성 이에외도 **개발 환경** 에서 더 빠른 이유가 있다.

우리가 보통 말하는 **Dynamic Import** 는 **Lazy-loading** 을 가능하게 해주는 개념이다.

즉, 필요 시에 필요한 기능을 로드하여 사용함으로써 불필요한 **로드** 를 줄인다는 의미이다.

이를 기반으로 **개발 환경** 에서 **Vite** 는 모든 소스 코드를 동시에 로드하지 않는다.

먼저 기존 **Webpack** 의 내용과 현재 **Vite** 의 내용을 비교해서 확인해보자.

#### Webpack
---

![image](https://user-images.githubusercontent.com/56063287/180706390-5addf526-9a7e-44c1-8bb0-6499fda11c64.png)

**Webpack** 은 모든 **Resource** 를 **Bundling** 을 통해 하나의 파일로 만들고 **브라우저** 는 압축되어 있는 이 **Bundle** 결과물을 **로드** 하여 사용한다고 생각하면 된다.

**Vite** 의 사상으로는 이러한 경우 불필요한 기능이 **Load** 될 수 밖에 없는 내용을 개선하고자 하였다.

물론 **Webpack** 또한 **Chunk** 로 분리하여 **Lazy-loading** 방식을 사용할 수 있지만, 이는 넘어가도록 한다.

따라서, 아래는 **Vite** 의 사상이다.

**Vite 는 기본적으로 Bundler 가 했던 작업의 일부를 브라우저에게 인계하는 것** 이다 라는 공식문서의 이야기가 적절한것 같다.

기존의 **Bundle Based** 된 **개발 서버** 와 **Native ESM** 기반의 **개발 서버**를 비교하는 자료가 있다.

![image](https://user-images.githubusercontent.com/56063287/180706922-c22a3eed-bc47-4141-9833-b938dcdcc315.png)

우리가 확인할 부분은 기존 개발 서버의 경우 **webpack** 과 같이 모든 내용을 **bundle** 파일에 담아 서버에 준비 시켜놓고 사용하는 경우이다.

반면, **Vite** 의 경우 **내부 소스** 에서 **middleware** 란 명칭으로 **HTTP Request** 를 받아 요청이 왔을때 필요한 **소스 코드** 를 **transform** 후에 전달한다고 생각하면 된다.

```js
  /**
   * The resolved urls Vite prints on the CLI. null in middleware mode or
   * before **server.listen** is called.
   *
   * @experimental
   */
  resolvedUrls: ResolvedServerUrls | null
  /**
   * Programmatically resolve, load and transform a URL and get the result
   * without going through the http request pipeline.
   */
  transformRequest(
    url: string,
    options?: TransformOptions
  ): Promise<TransformResult | null>
  /**
   * Apply vite built-in HTML transforms and any plugin HTML transforms.
   */
  transformIndexHtml(
    url: string,
    html: string,
    originalUrl?: string
  ): Promise<string>
  /**
   * Transform module code into SSR format.
   */
  ssrTransform(
    code: string,
    inMap: SourceMap | null,
    url: string
  ): Promise<TransformResult | null>
```

### 실제 성능 비교
---

현재까지 진행된 프로젝트에 **Webpack**과 **Vite** 를 각각 탑재하여 성능 테스트를 진행해보았다.

#### Webpack
---

![image](https://github.com/jjou33/jjou33/assets/56063287/30204c85-1d84-49b7-891f-4f2bc85ca5cc)

#### Vite
---

![image](https://github.com/jjou33/jjou33/assets/56063287/b222e3ac-a695-4e2f-b2ab-ccdc06e6b5cc)

두 표본 모두 **cli 를 통해 기본 셋팅**을 진행한 후 돌린 결과이다.

결과와 같이 각각 **1.2초 와 0.3초** 로 유의미한 차이가 발생했다.

복잡해지고 프로젝트가 진행될 수록 모듈이 많아지게 된다면 더 유의미한 결과가 나올것이다.


### 참고 사이트

---

- [Vite 공식 사이트](https://vitejs.dev/guide/)