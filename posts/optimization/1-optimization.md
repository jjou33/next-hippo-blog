---
date: "2023-11-28"
title: "[Optimization] NextJS 를 활용한 이미지 최적화"
image: 'optimization1.jpg'
rootCategory: Programming
category1depth: Web
category2depth: optimization
keywords: ['Optimization', 'NextJS', 'Image', 'avif']
excerpt: NextJS 를 활용하여 사이트를 최적화하는 방안에 대한 내용을 기록하고 있습니다.
isFeatured: true
---

### 개요

우리가 웹 사이트를 운영하면서 가장 중요한건 사용자가 체감하는 **유저경험**일 것입니다.

*속도* 그리고 *번들사이즈* 등 다양한 요소들이 최적화가 필요한 부분이고 이에 대해 필자가 운영하고 있는 사이트에 대해 **최적화**를 진행해 보았습니다.

### 이미지 최적화(Image Optimization)

웹 사이트에는 굉장히 많은 이미지들이 포함되고, 인스턴스가 실행되면 브라우저 엔진은 해당 이미지들을 서버로부터 받아오게 되는데요.

이때, 사이즈가 크면 클수록 더 많은 크기의 이미지를 다운받아야된다고 생각하면 됩니다.

그래서 많은 사이트에서는 CDN 을 통해 이미지 캐싱을 진행하는 등 다양한 방법으로 이러한 시간을 단축시키려고 노력을 하고 있습니다.

**NextJS** 로 구축된 필자의 사이트의 이미지 최적화를 진행한 방향은 *이미지 압축률*과 *Size 최적화* 두가지 방법으로 진행해 보았습니다.

#### Webp VS Avif

이미지 포맷은 **jpg, png, webp** 등 여러가지가 존재하는데요.

이중에서 *webp* 는 구글에서 **웹 페이지 로딩 속도**를 높이기 위해 만들었으며, *jpg, png* 등 기존의 이미지 포맷보다 더 **높은 압축률**을 가지고 있기 떄문에 약 **26% 이상**의 크기를 줄일 수 있습니다.

이로인해 웹 페이지가 빠르게 로딩되면 검색엔진에서의 **SEO 노출 순위**에 영향을 줄 수 있다는 장점도 있습니다.

하지만, 이후 Webp 보다 더 좋은 성능의 *avif 포맷*이 등장하였고, 현재는 이 두가지를 많이 쓰고 있으며, 각각의 포맷에 대한 더 자세한 내용은 [이곳](https://jakearchibald.com/2020/avif-has-landed/)에서 확인하실 수 있습니다.

실제 성능에 대한 비교는 아래 이미지에서 볼 수 있듯이, avif 나 webp 가 기존의 **jpg, png** 보다 월등히 **높은 압축률**을 보여주는것을 볼 수 있고, 이중에서도 *avif* 가 가장 높은 압축률을 제공하고 있습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/a46f7750-6b3a-497f-a202-9a88223cc94f)

그럼 이제 최적화로 들어가보도록 하겠습니다.

#### NextJS Image 최적화 적용

NextJS 에서 **next/Image** 를 사용하면 자동으로 *avif , webp* 로의 변환을 제공하고 있습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/971743e6-aef9-49f2-a5a2-da7ea800bfcb)

설정은 **next.config.js** 에서 아래와 같이 설정을 진행하게되면, 가장 우선적으로 *avif 포맷*으로 변환하고, 이를 지원하지 않는다면 *webp 포맷*으로 변경해줄 수 있습니다.

```ts
  images: {
    formats: ['image/avif', 'image/webp'],
    ...
  },
```

#### 개선 전 후 비교

- 적용 전

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/916d5e29-3969-4e4b-88fe-f65afbb0e8dc)

- 적용 후

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/fb2ae8e4-8996-4a33-838c-cd43cd9e5884)

개별로 보면 네트워크 상황에따라서 결과가 다르게 나오기도 하지만 전체적으로 **Size 가 감소**하였고, 그에따라 시간또한 단축된것을 확인할 수 있었습니다.

### ReacMarkdown 에 Next/Image 적용

현 블로그는 ReactMarkdown 을 통해서 md 파일의 내용을 HTML 로 변환하여 포스팅을 제공하기 때문에 최적화를 포스팅에도 적용하기 위해 몇가지 설정을 추가해줘야 합니다.

#### Domain 설정

ReactMarkdown 을 활용한 페이지를 들어가면 아래와 같은 오류가 발생합니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/daaf9ae1-6540-4530-850a-d343f917766d)

저의 경우 Github Issue 를 활용해서 Image 주소를 생성하기 때문에 발생한 오류인것 같습니다.

자세히 읽어보면 next/Image 에서 github.com 이란 hostname 이 config 내에 있는 image 안에 설정되지 않았다고 합니다.

제공해준 [공식문서](https://nextjs.org/docs/messages/next-image-unconfigured-host)를 가서 확인해보니 큰 문제는 아니었고, next.config.js > image 설정에 domain 을 추가해주면 됩니다.

```js
module.exports = bundleAnalyzer({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['github.com'], // 이미지가 호스팅된 도메인 추가
  },
  ...
  },
})
```

#### md 파일 내 img 태그 Next/Image 적용

페이지가 시작 시 **요청되는 이미지**에 대해서는 위와 같이 적용을 하였으나, 저와 같은 경우에는 **블로그 포스팅**에 추가한 이미지의 경우 적용이 되지 않는것을 발견하였습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/db1ff125-ca2f-4725-9dee-cbaa8098177e)

원인은 **ReactMarkDown** 을 활용해서 md 파일의 내용들을 *HTML* 로 변환하는 과정에서 추가한 Image 들은 *<img>* 태그로 추가되는 것이기 때문에 **Next/Image** 를 활용하지 않았기 때문이었습니다.

**ReactMarkDown** 에 **CustomRender** 를 활용하여 Img 태그를 변환해주는 방법으로 해결하였습니다.

```tsx
import Image from 'next/image'
...

// Next/Image 를 활용하여 Styled 태그 생성
export const StyledImage = styled(Image)`
  ...
`

const PostContent = ({
  postDetailInfo: { content },
}: {
  postDetailInfo: PostData
}) => {
  const customRenderers = {
    img({ ...props }) {
      // img 태그인 경우 props 로 src,alt 등 내부 인자를 받아
      // StyledImage 로 대체
      return (
        <StyledImage
          src={`${props.src}`}
          alt={props.alt}
          ...
        />
      )
    },
    ...
  }

  return (
    <S.ContentsContainer>
      ...
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      ...
    </S.ContentsContainer>
  )
}

export default PostContent

```

위 코드처럼 *customRenderers* 를 *ReactMarkdown* 에 적용하였고, 내부 img 태그를 **Next/Image 모듈을 활용한 Styled 태그로 변환**해줄 수 있습니다.

정상적으로 설정을 완료하면 아래와 같이 적용되어 속도를 크게 줄일 수 있으며, *LazyLoading* 까지 차례로 적용이 됩니다.

#### 전 후 결과 비교

- 적용 전

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/db1ff125-ca2f-4725-9dee-cbaa8098177e)

- 적용 후

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/c40402fd-2cc3-48d7-af7a-d1b0b63f911f)

### 최종정리

물론, 이밖에도 더 많은 최적화 방법이 있고 더 좋은 최적화 방법이 있을 수 있을 수 있습니다.

앞으로 차차 시간이 나는대로 관련되어 학습하고 적용해볼 예정이며 다음 포스트에서는 Light House 를 참고하여 최적화를 진행해보도록 하겠습니다.

### 참고 사이트

- [NextJS 공식문서](https://nextjs.org/docs/pages/building-your-application/optimizing/images)












