---
date: "2024-09-20"
title: "[Monorepo] Webpack Module Federation 개념정리"
image: moduleFederation.png
rootCategory: Programming
category1depth: Framework
category2depth: monorepo
keywords: ["Monorepo", "Webpack"]
excerpt: Monorepo 에 관련된 포스팅 공간입니다.
isFeatured: true
---

### 개요

웹으로 UI 를 개발하고 기능을 개발해서 괜찮은 블로그를 만들었다고 생각하였지만, 점점 완성되갈수록 이제는 내가 원하는 앱을 개발해보고 싶은 생각이 들었다.

프론트 개발자의 영역을 **Javascript 개발자로 한정짓는 시대**는 지나버렸고, 이제는 프론트 영역의 대부분의 프로세스, 생태계를 알고 이 부분에서 본인의 강점을 조금 더 각각의 영역의 전문가와 협업하여 완성도 있는 개발을 하는것이 중요하다고 생각한다.

따라서, 이번 기획에 앱개발을 살짝 맛을 보기위해서 고민을 하였고, 요즘 **Flutter** 를 많이 사용한다고 하지만 내가 전적으로 앱개발자로 전향하고자 하는것이 아닌 호기심반 그리고 기술적인 욕심 반으로 시작하는 것이기 때문에 이부분에서 **React Native** 를 선택하고자 하였다.

이미 **React** 에 대해서 익숙한 부분이 가장 큰 선택의 이유였고, **m1 Mac** 기준 **Android** 및 **IOS** 에서 **Simulator** 를 통한 개발환경 구축에 대한 내용을 기록할 예정입니다.

### Android 설치

expo 설치 및 기본 페이지 개발은 되어있다는 가정 하게 포스팅을 작성합니다.

먼저, **Android** 영역은 간단합니다.

1. **Andorid 스튜디오** 를 설치

Android 스튜디오 설치 및 실행 후 아래와 같이 실행이되면 More Actions 를 클릭 후 Virtual Device Manager 를 클릭합니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/b02c22c6-fd61-45c3-b501-8bd69f9b9894)

클릭 후 아래와 같이 Manager 창으로 들어가서 + 버튼을 눌러 원하는 버전 및 디바이스를 선택할 수 있고, 설치하게 되면 아래와 같이 리스트를 확인할 수 있습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/3af77f97-0e65-4e42-86ec-e3b9a9b7b51c)

여기서 원하는 디바이스를 실행시키면 자동으로 Simulator 가 실행됩니다.

2. **Expo** 에서 **Android** 연동

expo 를 설치하였다면, 프로젝트에서 expo 기동 후 아래와 같은 커멘드창을 볼 수 있습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/c5c2909a-66a2-44d8-9360-5a4b0a444565)

여기서 설명에서 보이듯이 a 를 누르면 알아서 Simulator 에서 expo 와 연동되서 현재의 프로젝트가 연동되는것을 보실 수 있습니다.

### IOS 설치

**IOS Simulator** 의 경우에 준비물은 **xcode** 를 **App Store** 에서 받는 부분이고, 최신 **xcode** 를 설치하였으면, 원하는 기종에 대한 리스트를 설정할 수 있다.

1. xcode 실행 > 메뉴바 Window > Devices and Simulators 진입

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/856557f0-3918-4f8f-b764-85f5ca1ca5a5)

여기서 원하는 기종의 **Simulator 기종**을 설치 합니다.

2. finder > 응용프로그램 > xcode 우클릭 > 패키지 내용보기 클릭 > Contents > Developr > Applications > Simulator 실행

이후 **Android** 와 동일하게 expo 실행 시킨 상태에서 i 를 누르면 실행이 됩니다.

하지만, 여기서 몇가지 설치가 필요한 부분이 있습니다.

#### cocoapod 설치

```bash
sudo gem install cocoapods
```

위 커멘드로 설치를 진행하면 되지만, 저의 경우에는 아래와 같이 **오류가 발생**하였습니다.

```bash
...
ERROR:  Error installing cocoapods:
        ERROR: Failed to build gem native extension.

    current directory: /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/ext/ffi_c
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby -I /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0 -r ./siteconf20240116-36652-1gpt2lx.rb extconf.rb
mkmf.rb can't find header files for ruby at /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/include/ruby.h

You might have to install separate package for the ruby development
environment, ruby-dev or ruby-devel for example.
...
```

인터넷을 찾아보니 **CommendLineTools** 설치를 선행해야 해야해서 설치해 줍니다.

```bash
xcode-select --install
```

그러면 OS 창이 나타나고 설치를 완료해주고, 설치 완료후 다시 **cocoapod** 를 설치하면 정상적으로 설치가 됩니다.

#### 설치 완료후 IOS 실행 시 오류

설치까지 완료하였고, **Simulator** 를 실행을 하려고 **Expo** 에서 i 를 누르게되면 이상하게 아래와 같은 커멘드가 나왔었습니다.

```bash
Xcode must be fully installed before you can continue. Continue to the App Store?
```

나는 분명 xcode 를 최신버전으로 설치했는데도 불구하고 계속해서 설치하라고 해서 이상해서 구글에 찾아 해결할 수 있었습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/c5321946-18a1-4617-b669-3feb2aa854eb)

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

위 커멘드로 해결한다음 다시 진행하면 정상적으로 모든 **Simulator** 를 활용할 수 있었습니다.

![image](https://github.com/jjou33/next-hippo-blog/assets/56063287/f08826fa-84b8-453e-b137-22ea80414261)

모두들 즐거운 개발 되세요~

### 참고 사이트

- [https://github.com/expo/expo/issues/21727](https://github.com/expo/expo/issues/21727)
- [https://maart.tistory.com/70](https://maart.tistory.com/70)
