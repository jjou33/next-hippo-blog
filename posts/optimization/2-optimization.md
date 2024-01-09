---
date: "2023-12-01"
title: "[Optimization] Lighthouse 분석을 통한 사이트 성능 최적화"
image: 'optimization2.png'
rootCategory: Programming
category1depth: Web
category2depth: optimization
keywords: ['Optimization', 'NextJS', 'Lighthouse']
excerpt: NextJS 를 활용하여 사이트를 최적화하는 방안에 대한 내용을 기록하고 있습니다.
isFeatured: true
---

### 개요

[이전 포스트](https://next-hippo-blog.vercel.app/posts/optimization/1-optimization)에서 이미지를 최적화 하는 방안에 대한 내용을 학습하였습니다.

이번엔 Chrome 에서 제공하는 **Lighthouse** 의 분석을 토대로 차근차근 최적화를 진행해보도록 하겠습니다.

### Chrome Lighthouse 란?

*Lighthouse* 는 **Google Chrome** 에서 재공하는, 웹앱의 품질 개선에 도움을 주는 자동화 도구 입니다.

성능과 접근성, SEO 등 사이트에 대한 전반적인 진단을 하고 원인을 분석해줍니다.

### 사이트 분석

최적화 이전의 사이트를 한번 분석해봤고, 결과는 아래와 같았습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/a9833321-c981-4b5f-b015-3cb3ba16db2e)

문제가 되는 항목부터 최적화를 진행해보도록 하겠습니다.

#### Properly Size Images

저의 운영중인 Site 를 Lighthouse 로 분석해보면 아래와 같은 문제점이 확인됩니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/079bf1e4-6d7c-4c0d-9534-352f6e41666e)

요약해보면 이미지의 크기로 인해서 느려질수도 있으니, 사이즈 최적화가 필요하고 Next/Image 를 사용해서 sizes 를 맞추라는 이야기입니다.

위 내용은 [공식 홈페이지](https://nextjs.org/docs/pages/building-your-application/optimizing/images)에서도 찾아볼 수 있었습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/2c7557a6-8ce6-41fd-ad30-63fb5b5563fd)

제 생각에는 현재 저의 사이트 Hero Image 의 경우 사이드 네비게이션으로 인해 100vw 가 필요 없음에도 100vw 로 설정을 하여서 나온 문제인것 같습니다.

이부분은 Image 에 적절한 sizes 프로퍼티만 추가하면 됩니다.

```tsx
  <S.StyledImage
    key={index}
    src={image}
    alt={'Hero Image'}
    fill
    sizes="(max-width: 1300px) 100vw, 80vw"
    selected={index === currentImage}
  />
```

#### Largest Contentful Paint

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/a6c4f22e-75d9-49cd-b9ba-2267b5d7d382)

콘텐츠가 포함된 **최대 페인트(LCP)** 측정항목은 페이지의 로딩 성능을 확인합니다. 

LCP는 뷰포트 내에서 페이지의 가장 큰 요소를 표시하는 데 걸리는 시간을 측정합니다. 이는 페이지의 주요 공간을 차지하는 큰 텍스트 블록, 비디오 또는 이미지일 수 있습니다.

이는 페이지의 주요 내용에 대한 화면 렌더링이 완료되는 시기를 결정하는데 사용됩니다.

자세한 내용은 [이곳](https://nextjs.org/learn-pages-router/seo/web-performance/lcp) 에서 확인이 가능합니다.

위와 같은 경우 *next/Image* 의 경우 **lazy loading** 의 기능이 **default** 로 설정되어 있기 때문에 발생하였습니다.

저의 경우에는 메인 화면에 **HeroIamge** 가 뷰포트의 대부분을 차지하는 큰 **Painting** 이 필요한 부분인데 *next/Image* 사용으로 **Lazy loading** 이 설정되면 스캐너에서 이미지를 숨기기 때문에 browser 에서 해당 이미지를 늦게 요청하게되어 발생하였습니다.

그러면 어떻게 해결해야 할까에 대한 부분을 찾아봤는데 공식홈페이지에 자세히 나와있었습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/4a2b0b6e-d4bb-4b64-8fc3-352c8602b967)

*true* 일 경우에는 **순위가 높아**지고 **preload** 가 진행되며, *lazy loading* 이 자동적으로 **disabled** 되게 됩니다.

개선을 위해 저의 메인 **HeroImage** 에 **priority** 값을 *true* 로 주면 위 **score warning** 은 해소됩니다.

```tsx
<S.StyledImage
  key={index}
  src={image}
  alt={'Hero Image'}
  fill
  sizes="(max-width: 1300px) 100vw, 80vw"
  selected={index === currentImage}
  priority
/>
```

다만 **Lazy Loading** 의 의미로도 아시다시피 *본인이 해당 페이지에서 얼마나 많은 리소스*를 받아야되며, 이로인해서 *페이지 속도*나 *UX* 에 영향을 줄 수 있는지 **개인적으로의 판단**이 필요할 것 같습니다.

#### Avoid enormous network payloads

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/a2489295-11fc-4abd-8f82-3aaa289a9702)

이부분은 여러가지 이유가 있지만, 저의 경우에는 원인은 너무 많은 **style 의 font 를 최적화하여 세분화**시킨 것이 이유였습니다.

그래서 기존에 정의했던, 대략 **30 가지의 font style 을 정리하여 10개로** 만들었고 이후 해소 되었습니다.

### 전체적인 개선 결과

그렇다면 위 작업을 통해 최적화한 후 **Lighthouse** 의 점수는 어떻게 될까요?

- 개선 전 ☠️

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/f33cc3c2-83f6-4b97-ac43-b81a9788102b)

- 개선 후 💡

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/f29918c9-c7b4-444b-96bc-7e86da4efcb8)

**Performance Tab** 이 *80 > 95* 점으로 상향 되었고, **LCP 시간**이 *4s > 1.3s 로 2.7 초 감소*한것을 확인할 수 있습니다..

2.7초 라는 시간이 짧다면 짧은 시간이지만 사용자의 입장에서 사이트에 **2.7 초의 딜레이**가 생긴다면 경험이 좋지 않을것임을 우리는 알고 있기 때문에 나름 만족스러운 결과였습니다 👍

### 최종 결과 정리

최적화를 통해서 사이트가 생각보다 더 좋은 방향으로 개선되고 있다는 느낌을 받았습니다.

물론, 실제 운영하는 실무처럼 무겁고 많은 파일들이 있는건 아니지만 나름 **속도 및 Lighthouse 스코어**를 줄일 수 있었습니다.

앞으로도 계속적으로 해보고 싶은 새로운 기능들을 추가하고 공유하는 저만의 개발 일기장으로 만들고 싶습니다.

다음 포스트에서는 **bundle Analyze** 를 활용하여 **최적화**하는 방법을 기록해 보도록 하겠습니다.






