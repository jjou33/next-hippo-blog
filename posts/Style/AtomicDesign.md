---
title: "[Design] Atomic Design 으로 컴포넌트 관리하기 (1)"
date: "2023-09-10"
image: atomic.png
rootCategory: Programming
category1depth: Web
category2depth: Style
keywords: ['AtomicDesign']
excerpt: 웹 페이지를 구성하는 디자인 아키텍처에 관련한 포스팅 입니다.
isFeatured: true
---

### 개요

---

**React** 로 블로그 프로젝트를 진행을 하면서 **Atomic Design** 을 대략적으로만 설계를 해서 진행하였다.

그러다보니, 1차적으로 완성된 블로그 페이지는 잘 돌아가지만, 파일구조를 한눈에 알아보기 힘들고 각각의 구조가 불명확하여 통일성이 없게 되었다.

따라서, 관련 자료 및 깃헙 레퍼런스를 통해 조사하였고 이를 활용하여 내가 느끼고 있는 복잡함과 모호한 프로젝트의 **컴포넌트 디자인**을 리펙토링 해보려 한다.


### Atomic Design 이란?

---

프로젝트가 조금씩 커짐에 따라 우리는 조금 더 **체계화**된 컴포넌트 관리의 필요성을 느낀다.

여러명과의 협업을 통해서 한 프로젝트를 관리하기 위해서는 조금 명확한 파일 구조 및 디자인 시스템이 필요할 것이기 때문이다.

이러한 고민을 해결해주는 디자인 기법이 **Atomic Design** 이다.

즉, **효율적인 인터페이스 디자인 시스템을 만들어내기 위해** 사용된다고 보면 된다.

### Atomic Design 분류

---

분류는 아래와 같이 된다.

- Atom (원자)
- Molecule (분자)
- Organism (유기체)
- Template (템플릿)
- Page (페이지)

#### Atom
---

Atom은 디자인 할 수 있는 요소 중 **가장 작은 구성단위**를 의미한다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/740709d0-2f01-47c7-9ff9-b975321c7779)

위 그림에서 볼 수 있듯이 가장 작은 단위의 구성요소를 의미한다고 보면된다.

보통 이렇게 원자 단위로 컴포넌트 설계를 진행하면 장점은 재상용이 용이해 진다는 점이다.

따라서, 어떻게보면 재사용을 위해서는 **Atom** 까지 쪼개는게 맞을 듯 하나, 이는 매우 큰 노력이 소모되기에 개인 블로그 프로젝트에는 **Molecule** 까지만 하기로 했다.

#### Molecule

---

**Molecule**은 여러 **Atom 요소들을 조합하여 만들어 내는 구성단위**를 의미한다.


![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/1e45cbc3-b7f3-448e-8f21-b60a402c1b49)

위의 **Card** 컴포넌트는 **title, category, contents, img...** 등등 여러가지 **Atom** 들이 모여 만들어진 **Molecule** 이라 생각하면된다.

#### Organism

---

**Organism**은 여러 **Molecule 과 Atom 의 요소들을 조합하여 만들어내는 구성단위를 의미한다**

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/fdb941b8-fa83-4e5c-8efa-d1230217838d)

하나의 **Section** 이라고 이해하면 쉬울 것 같다.


#### Template

---

**Template** 는 여러 **Organism, Molecule, Atom 이 모여서 만들어지는 구성단위**를 의미한다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/335cc8fa-4d40-4ec6-a26c-6f47ca3751e5)


사실 **Template** 과 **Page** 간의 기점이 애매해서 아직까지는 정확한 구분점을 모르겠으나, 보통은 비중이 적게 진행이 된다고 한다.

#### Page

---

모든 구성요소들을 통해 만들어진 구성단위를 **Page** 라 한다.


### 참고 사이트

---

1. [https://jforj.tistory.com/274](https://jforj.tistory.com/274)
2. [https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)
