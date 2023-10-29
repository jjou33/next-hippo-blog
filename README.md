<h1>Hippo Dev Blog By NextJS</h1>

#### 프로젝트 제작 개요

---

기존 Gatsby 를 활용해서 블로그를 최근 관심을 가지게 된 NextJS 로 변경하기 위한 프로젝트 입니다.

아직까지는 전체적으로 더미데이터로 구성되어있며 참고 부탁드립니다.

Gatsby 프로젝트 블로그 주소 : [https://hippo-dev.vercel.app/](https://hippo-dev.vercel.app/)

## Tech Stack

| Name             | Description      |
| ---------------- | ---------------- |
| React            | Frontend Library |
| Recoil           | 상태 관리        |
| Type-script      | 작성 언어        |
| NextJS           | 서버사이드       |
| PNPM             | Package Manager  |
| Styled Component | 스타일링         |

<br />

---

<br />

## Install and use

<br />

✅ 프로젝트 실행 방법

---
<br />

✅ PNPM 설치 

```bash
npm install -g pnpm
```

<br />

✅ 의존성 설치 (<strong style="color: red">pnpm global 설치 작업 선행 후 진행</strong>)

```bash
pnpm install
```

<br />

✅ 프로젝트 기동 (의존성 설치 후 진행 가능)

```bash
pnpm dev
```

## Coding Convention Check


✅ LINT 검사

```bash
pnpm lint
```

<br />

✅ Type Check

```bash
pnpm typecheck
```

<br />
---

## Browser support

본 프로젝트 개발 브라우저 환경은 `Chrome 80+` 이상 사용을 권장합니다.

## 프로젝트 구조
```
next-hippo-blog
├─ components
│  ├─ common // 공용성 컴포넌트
│  │  ├─ Badge // 뱃지 
│  │  ├─ Button // 공용성 버튼
│  │  ├─ ColorText // Color Effect 텍스트 
│  │  ├─ Footer // 푸터
│  │  ├─ Header // 헤더
│  │  ├─ IconBox // IconBox 공통 컴포넌트
│  │  ├─ Label // 공용성 Label
│  │  ├─ Layout // 공통 Layout
│  │  ├─ Lottie // Lottie 애니메이션
│  │  ├─ Motion // 모션 공통 컴포넌트
│  │  │  └─ MotionShowBox
│  │  ├─ ScrollStateBar // 상단 스크롤바
│  │  ├─ StyledLayout // Flex, Divider.. 공통 스타일
│  │  ├─ Typography // Typhograpy 공통 컴포넌트
│  ├─ main
│  │  ├─ HeroSection // 히어로 렌딩 이미지 섹션
│  │  │  ├─ TypingSection
│  │  ├─ ProjectSection // 사이드 프로젝트 섹션
│  │  │  ├─ ProjectGrid
│  │  │  ├─ ProjectItem
│  │  ├─ RecommendSection // 추천 사이트 섹션
│  │  │  ├─ RecommendGrid
│  │  │  ├─ RecommendItem
│  ├─ navigation // 네비게이션
│  │  ├─ NavigationSection // 사이드 네비게이션 섹션
│  │  │  ├─ NavMainCategory
│  │  │  ├─ NavRootTitle
│  │  │  ├─ NavSubCategory
│  │  ├─ ProfileSection // 사이드 프로필 섹션
│  │  │  ├─ LogoImage
│  │  │  ├─ SiteInfo
│  │  │  │  ├─ LinkedIcon
│  │  │  │  ├─ NumberCountBox 
│  └─ posts
│     ├─ PostDetail // Post 상세 페이지
│     └─ PostList // Post 리스트 페이지
├─ hooks // 커스텀 훅
│  ├─ useHeaderSticky.ts
│  ├─ useNumberCount.ts
│  ├─ useScrollStateBar.ts
│  └─ useTypingTitle.ts
├─ lib // 라이브러리
│  └─ api
├─ pages // 서버사이드
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ index.tsx
│  └─ posts
│     ├─ [categoryId]
│     │  ├─ [postId].tsx
│     │  └─ index.tsx
│     ├─ [postId]
│     └─ index.tsx
├─ posts // 포스트 MD 파일
│  ├─ dfs.md
│  ├─ dfs1.md
│  ├─ dfs2.md
│  └─ next1.md
├─ public // 정적 리소스
│  ├─ favicon.ico
│  └─ static
│     ├─ fonts // 폰트
│     ├─ icon // 아이콘
│     └─ images // 이미지
├─ styles // 스타일
├─ tsconfig.json
├─ .eslintrc.json
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.json
├─ next.config.js
├─ package.json
├─ README.md
├─ pnpm-lock.yaml
├─ types // 공용성 타입
│  ├─ post
│  │  └─ index.ts
│  ├─ styled.d.ts
│  └─ styles
│     └─ index.ts
└─ utils
   └─ PostUtil.ts

```