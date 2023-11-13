const DATA = {
  MAIN_POST_LENGTH: 6,
  FOOTER_INFO: {
    GITHUB_LINK: 'https://github.com/jjou33',
  },
  IMAGES: {
    LOGO_IMAGE: '/static/images/logo_Image.png',
    HERO_IMAGES: [
      '/static/images/HeroImage/landing.jpg',
      '/static/images/HeroImage/landing2.jpg',
      '/static/images/HeroImage/landing3.jpg',
    ],
  },
  ROOT_INFO: {
    TITLE: 'TOTAL CONTENTS',
  },
  PROFILE_INFO: {
    LIST: [
      {
        color1: '#f97253',
        color2: '#f7cb80',
        iconName: 'Git',
        title: 'GITHUB',
        href: 'https://github.com/jjou33',
      },
      {
        color1: '#8a7240',
        color2: '#e68e66',
        iconName: 'Email',
        title: 'CONTACT',
        href: '/',
      },
    ],
    COUNT_TITLE: {
      CATEGORY: '총 카테고리',
      POSTS: '총 게시글',
    },
  },
  INTRO_INFO: {
    TITLE: `Don't dream, Be it`,
    AUTHOR: 'Tim curry',
    SUBTITLE:
      ' 즐거운 개발 라이프를 지향하며, 더욱 좋은 개발자가 되기 위해 노력합니다 🧑🏼‍💻',
  },
  POST_LIST_INFO: {
    HEADER: {
      TITLE: '🧑🏻‍💻 모든 포스트',
      SUB_TITLE: '최신 순으로 모든 게시물을 만나보세요!',
    },
  },
  PROJECT_INFO: {
    HEADER: {
      TITLE: '프로젝트 이야기 ✨',
      SUB_TITLE: '진행했던 프로젝트들에 대한 기술 포스팅입니다.',
    },
    LIST: [
      {
        title: 'Vue3 차세대 프로젝트(실무)',
        keywords: ['Vue3', '공통 개발'],
        imagePath: '/static/images/Framework/Vue/headImage.png',
        linkPath: `posts/Vue?page=1`,
        content:
          '해당 프로젝트는 현재 실무에서 차세대 프로젝트에 참여하여 진행중인 프로젝트간 필요한 내용을 포스팅 합니다.',
      },
      {
        title: 'Blog By NextJS',
        keywords: ['NextJS', 'SSR', 'Blog'],
        imagePath: '/static/images/Framework/NextJS/headImage.png',
        linkPath: `posts/NextJS?page=1`,
        content:
          'NextJS 를 활용하여 개인 Blog 를 구축 기술 및 관련 내용을 기록하는 공간입니다.',
      },
    ],
  },
  RECOMMEND_INFO: {
    HEADER: {
      TITLE: '추천 카테고리 🎖',
      SUB_TITLE:
        '제가 많이 참고하고 좋은 내용을 담고 있는 사이트를 모아봤습니다!',
    },
  },
  SLIDE_CONTENTS_INFO: {
    LIST: [
      {
        title: 'NextJS',
        expert:
          'NextJS 로 개발하면서 만든 포스트들에 대한 정보를 기록한 공간입니다.',
        imageLink: '/static/images/Framework/NextJS/headImage.png',
      },
      {
        title: 'CICD',
        expert:
          '1인 개발과정에서 husky, Github Action 등을 활용한 CI/CD 자동화에 대한 내용을 기록한 공간입니다.',
        imageLink: '/static/images/Web/CICD/headImage.png',
      },
      {
        title: 'App',
        expert: 'APP 과 관련된 기술 내용에 대한 포스트를 기록하는 공간입니다.',
        imageLink: '/static/images/Web/App/headImage.png',
      },
      {
        title: 'Browser',
        expert:
          'Browser 의 동작과정을 학습하면서 학습한 내용을 기록하는 공간입니다.',
        imageLink: '/static/images/Web/Browser/headImage.png',
      },
      {
        title: 'Environment',
        expert:
          'Package Manager, Bundler 등 FrontEnd 개발에 필요한 환경에 대한 정보를 기록한 공간입니다.',
        imageLink: '/static/images/Web/Environment/headImage.png',
      },
      {
        title: 'Style',
        expert: 'FrontEnd Style 에 관련된 기록들을 포스트한 카테고리 입니다.',
        imageLink: '/static/images/Web/Style/headImage.png',
      },
      {
        title: 'Javascript',
        expert:
          'Javascript 를 학습하면서 필요한 내용들을 포스트하여 기록해둔 공간입니다.',
        imageLink: '/static/images/Languages/Javascript/headImage.png',
      },
    ],
  },
}

export default DATA
