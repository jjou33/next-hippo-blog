---
title: "[ESLINT] 초기 프로젝트 셋팅에 필요한 개발환경 구성"
date: "2024-01-10"
image: eslint.png
rootCategory: Programming
category1depth: Web
category2depth: environment
keywords: ['eslint', 'prettier', 'airbnb']
excerpt: 개발환경에 필요한 도구들과 관련된 포스팅 입니다.
isFeatured: true
---

### 개요
---

최근에 프로젝트를 진행하기 위한 **Starter Boiler Plate**를 미리 구성해놔야겠다는 생각이들어서 초기 셋팅을 잡아보고 있는데요.

당연히 아는줄 알았던 부분도, 부족한 부분 그리고 잘못알았던 부분들도 있었고 생각보다 도움이 많이 된 것 같습니다.

이번 포스트에서는 코드 컨벤션을 위한 **eslint** 에 **airbnb** 룰셋을 적용해서 진행해 보도록 하겠습니다.

저의 경우에는 **React Boiler Plate** 에 적용해보도록 하겠습니다.

### 환경 구성

먼저 React 구성에 필요한 필수 의존성들에 대한 설치가 필요합니다.

```bash
pnpm add -D eslint prettier typescript
```

위 명령어를 통해서 **eslint, prettier, typescript** 에 대한 설치를 진행합니다.

### Plugin 설치

먼저 **Typescript** 와 관련된 **Plugin** 들을 설치해줍니다.

```bash
pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

설치가 완료되었다면, **prettier** 와 함께 사용하기 위한 **Plugin** 들을 설치해줍니다.

```bash
pnpm add -D eslint-config-prettier eslint-plugin-prettier
```

### Airbnb 규칙 설정

**airbnb** 스타일 가이드 및 리엑트 관련 **Plugin** 들을 설치해 줍니다.

```bash
# 스타일 가이드
pnpm add -D eslint-config-airbnb 

# 리엑트 관련 Plugins
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import
```

### eslintrc.json 파일 설정

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json",
    "createDefaultProgram": true
  },
  "plugins": ["react", "@typescript-eslint"],
  "extends":[
    "airbnb",
    "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    // var 금지
    "no-var": "warn",
    // 일치 연산자 사용 필수
    "eqeqeq": "warn",
    // 컴포넌트의 props 검사 비활성화, propstype 사용하지 않아도 경고 띄우지 않음
    "react/prop-types": 0,
    // 불필요한 세미콜론 사용 시 에러 표시
    "no-extra-semi": "error",
    // 한 파일 내 export 문이 하나일 경우 default export 사용 권장 경고 비활성화
    "import/prefer-default-export": 0,
    // 파일 경로가 틀렸는지 확인하는 옵션 끄기
    // "import/no-unresolved": ["error", { "caseSensitive": false }],
    "import/no-unresolved": 0,

    // jsx 파일 확장자 .jx, jsx, ts, tsx 허용
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    // 함수의 형태 정의 arrow-function , function-declaration 중 
    "react/function-component-definition": [2, { "namedComponents": ["arrow-function"] }],
    // JSX 속성이나 자식 요소에서 항상 중괄호를 사용해야 하는지를 검사
    "react/jsx-curly-brace-presence": ["warn", { "props": "always", "children": "always" }],
    // props spreading 허용하지 않는 경고 표시 (커스텀 속성의 경우 무시)
    "react/jsx-props-no-spreading": [1, { "custom": "ignore" }],
    // 줄바꿈 문자 스타일 검사
    "linebreak-style": 0,
    // 확장자에 대한 검사
    "import/extensions": 0,
    // import React from "react' 제거
    "react/react-in-jsx-scope": 0,
    // 한줄에 하나의 표현식만을 허용하는지를 확인합니다.
    "react/jsx-one-expression-per-line": 0,
    // 중첩된 삼항 연산자를 사용제어
    "no-nested-ternary": 0,
    // 화살표 함수의 파라미터가 하나일대 괄호 생략 
    "arrow-parens": ["warn", "as-needed"],
    // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용 허용
    "import/no-extraneous-dependencies": 0,
    // 콘솔 사용 시 발생하는 경고 비활성화
    "no-console": "off",
    "prettier/prettier": [
      "error", {
        "semi": false,
        "printWidth": 80,
        "tabWidth": 2,
        "useTabs": false,
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": true,
        "quoteProps": "as-needed",
        "arrowParens": "avoid",
        "endOfLine": "auto"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}
```

위와 같이 진행하여 기본적인 **lint** 셋팅을 마무리 짓습니다.

### 참고 사이트
---
- [https://oliviakim.tistory.com/159](https://oliviakim.tistory.com/159)
- [https://bum-developer.tistory.com/entry/TypeScript-Eslint%EC%99%80-Prettier-%EC%84%A4%EC%A0%95](https://bum-developer.tistory.com/entry/TypeScript-Eslint%EC%99%80-Prettier-%EC%84%A4%EC%A0%95)

