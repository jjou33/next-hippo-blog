// eslint-disable-next-line import/no-anonymous-default-export
import METADATA from 'constants/METADATA'
import { DefaultSeoProps } from 'next-seo'
const DEFAULT_SEO: DefaultSeoProps = {
  titleTemplate: `%s | ${METADATA.meta.title}`,
  defaultTitle: `${METADATA.meta.title} - 나만의 개발 기록 일기장`,
  description: METADATA.meta.description,
  canonical: METADATA.meta.url,
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  openGraph: {
    description: METADATA.meta.description,
    type: 'website',
    locale: 'ko_KR',
    url: METADATA.meta.url,
    site_name: METADATA.meta.title,
    images: [
      {
        url: `${METADATA.meta.imageUrl}/og_image.png`,
        width: 850,
        height: 600,
        alt: METADATA.headerTitle,
      },
    ],
  },
}

export default DEFAULT_SEO
