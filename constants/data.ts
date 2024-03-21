const DATA = {
  MAIN_POST_LENGTH: 9,
  FOOTER_INFO: {
    GITHUB_LINK: 'https://github.com/jjou33',
  },
  IMAGES: {
    LOGO_IMAGE: '/static/images/logo_Image.png',
    HERO_IMAGES: [
      '/static/images/HeroImage/heroImage1.jpg',
      '/static/images/HeroImage/heroImage2.jpg',
      '/static/images/HeroImage/heroImage3.jpg',
      '/static/images/HeroImage/heroImage4.jpg',
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
      SUB_TITLE: '실무에서 진행했던 내용에 대한 포스팅 입니다.',
    },
    LIST: [
      {
        title: 'Vue3 차세대 프로젝트',
        keywords: ['Vue3', '공통 개발'],
        imagePath: '/static/images/Framework/vue/headImage.png',
        linkPath: `posts/vue?page=1`,
        content:
          '해당 프로젝트는 현재 실무에서 차세대 프로젝트에 참여하여 진행중인 프로젝트간 필요한 내용을 포스팅 합니다.',
      },
      {
        title: 'Blog By NextJS',
        keywords: ['NextJS', 'SSR', 'Blog'],
        imagePath: '/static/images/Framework/nextjs/headImage.png',
        linkPath: `posts/nextjs?page=1`,
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
        title: 'nextjs',
        expert:
          'NextJS 로 개발하면서 만든 포스트들에 대한 정보를 기록한 공간입니다.',
        imageLink: '/static/images/Framework/nextjs/headImage.png',
      },
      {
        title: 'cicd',
        expert:
          '1인 개발과정에서 husky, Github Action 등을 활용한 CI/CD 자동화에 대한 내용을 기록한 공간입니다.',
        imageLink: '/static/images/Web/cicd/headImage.png',
      },
      {
        title: 'app',
        expert: 'APP 과 관련된 기술 내용에 대한 포스트를 기록하는 공간입니다.',
        imageLink: '/static/images/Web/app/headImage.png',
      },
      {
        title: 'browser',
        expert:
          'Browser 의 동작과정을 학습하면서 학습한 내용을 기록하는 공간입니다.',
        imageLink: '/static/images/Web/browser/headImage.png',
      },
      {
        title: 'environment',
        expert:
          'Package Manager, Bundler 등 FrontEnd 개발에 필요한 환경에 대한 정보를 기록한 공간입니다.',
        imageLink: '/static/images/Web/environment/headImage.png',
      },
      {
        title: 'style',
        expert: 'FrontEnd Style 에 관련된 기록들을 포스트한 카테고리 입니다.',
        imageLink: '/static/images/Web/style/headImage.png',
      },
    ],
  },
}

export default DATA
